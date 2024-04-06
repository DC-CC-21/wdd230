let rentalsEl = document.getElementById("rentals");
let mode = "lg";

fetch("./data/data.json")
  .then((res) => res.json())
  .then((jsObj) => {
    for (let key in jsObj) {
      createVehicleSection(key, jsObj);
    }

    if (window.innerWidth < 500) {
      mode = "sm";
      transposeTable(mode);
    }
  });

function createVehicleSection(key, vehicleData) {
  let vehicleSection = document.createElement("section");
  let vehicleType = document.createElement("h3");
  vehicleType.innerHTML = key;

  let bImage = document.createElement("span");
  bImage.classList.add("bImage");
  bImage.style.backgroundImage = `url(${vehicleData[key].image})`;

  vehicleSection.append(bImage, vehicleType);

  let vehicleContent = document.createElement("div");
  vehicleContent.classList.add("content");
  vehicleData[key].data.forEach((vehicle) => {
    createVehicleCard(vehicle, vehicleContent);
  });
  vehicleSection.append(vehicleContent);
  rentalsEl.append(vehicleSection);
}

function createVehicleCard(vehicle, vehicleSection) {
  let vehicleCard = document.createElement("div");
  let vehicleImage = document.createElement("img");
  vehicleImage.width = 300;
  vehicleImage.height = 200;
  vehicleImage.alt = `${vehicle.type} image`;
  let vehicleName = document.createElement("h4");

  vehicleImage.src = vehicle.image;
  vehicleName.innerHTML = vehicle.type;
  let table = new Table("Rental Pricing");
  table.addRow(
    ["@sp2", "Reservation@sp2", "Walk-In@sp2"],
    (trClasses = ["head"])
  );
  table.addRow(
    [
      "Vehicle Type",
      "Max Persons",
      "Half Day (3 hours)",
      "Full Day",
      "Half Day (3 hours)",
      "Full Day",
    ],
    (trClasses = ["head"])
  );

  table.addRow([
    vehicle.type,
    vehicle.persons,
    ...Object.values(vehicle.reservation).map((x) => `$${x}`),
    ...Object.values(vehicle["walk-in"]).map((x) => `$${x}`),
  ]);

  let div = document.createElement("div");
  div.classList.add("rentalInfo");
  div.append(vehicleImage, table.getTable());
  vehicleCard.append(vehicleName, div);
  vehicleSection.append(vehicleCard);
}

function transposeTable(typ = "sm") {
  let tables = document.querySelectorAll("table");
  if (typ === "sm") {
    tables.forEach((table) => {
      Table.transposeTable(table);
    });
  } else {
    tables.forEach((table) => {
      Table.restore(table);
    });
  }
}

class Table {
  constructor(title) {
    this.table = document.createElement("table");
    this.tbody = document.createElement("tbody");
    this.columns = 0;

    this.addTitle(title, ["title"]);
    // tbody.append(buildTableHead())
    this.table.append(this.tbody);
  }

  addTitle(data) {
    let tr = document.createElement("tr");
    tr.id = "title";

    let td = document.createElement("td");
    td.innerHTML = data;

    tr.appendChild(td);
    this.tbody.append(tr);
  }
  addRow(data, trClasses = [], tdClasses = []) {
    let tr = document.createElement("tr");
    trClasses.forEach((cls) => {
      tr.classList.add(cls);
    });

    if (typeof data === "string") {
      let td = document.createElement("td");

      if (data.includes("@sp")) {
        let number = parseInt(data);
        data = data.replace(/@sp\d+/g, "");
        td.colSpan = number;
      }
      td.innerHTML = data;
      tr.append(td);
    } else {
      data.forEach((value) => {
        let td = document.createElement("td");

        if (value.toString().includes("@sp")) {
          let number = value.match(/@sp\d+/)[0].replace(/@sp/, "");
          value = value.replace(/@sp\d+/g, "");
          td.colSpan = number;
        }

        td.innerHTML = value;
        tr.append(td);
      });
    }

    this.tbody.append(tr);
    this.fixTitle(tr.children.length);
  }

  fixTitle(x) {
    if (x > this.columns) {
      this.columns = x;

      this.table.querySelector("#title td").colSpan = this.columns;
    }
  }

  getTable() {
    return this.table;
  }
  static restore(table) {
    let tableTitle = table.querySelector("#title");
    let tableColumnPreTd = table.querySelectorAll("td.head:first-child");
    let tableColumnTd = table.querySelectorAll("td.head:not(:first-child)");
    let tableContentTd = table.querySelectorAll(
      "td:not(.head):not(tr#title td)"
    );

    let tableColumnPre = Table.extractHTML(tableColumnPreTd);
    tableColumnPre = Array.from(new Set(tableColumnPre)).map((x) => {
      let count = tableColumnPre.reduce((t, y) => (y === x ? t + 1 : t), 0);
      return `${x}@sp${count}`;
    });
    let tableColumns = Table.extractHTML(tableColumnTd);
    let tableContent = Table.extractHTML(tableContentTd);

    let newTable = new Table(tableTitle.innerHTML);
    newTable.addRow(tableColumnPre, (trClasses = ["head"]));
    newTable.addRow(tableColumns, (trClasses = ["head"]));
    newTable.addRow(tableContent);

    table.replaceWith(newTable.getTable());
  }

  addColumn(data, tdClasses = []) {
    function addClass(cls, el) {
      if (typeof cls === "string") {
        el.classList.add(cls);
      } else {
        cls.forEach((cls) => el.classList.add(cls));
      }
    }
    if (this.tbody.children.length === 1) {
      data.forEach((value) => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = value;
        addClass(tdClasses, td);
        tr.append(td);
        this.tbody.append(tr);
      });
    } else {
      data.forEach((value, index) => {
        let tr = this.tbody.children[index + 1];
        if (!tr) {
          tr = document.createElement("tr");
          this.tbody.append(tr);
        }
        let td = document.createElement("td");
        td.innerHTML = value;
        addClass(tdClasses, td);
        tr.append(td);

        this.fixTitle(tr.children.length);
      });
    }
  }

  static transposeTable(table) {
    let tableTitle = table.querySelector("#title");

    let tableColumnPreTr = table.querySelectorAll("tr.head")[0];
    let tableColumnTr = table.querySelectorAll("tr.head")[1];
    let tableContentTr = table.querySelector("tr:not(.head):not(#title)");

    let tableColumnsPre = [];
    for (let i of Array.from(tableColumnPreTr.children)) {
      for (let j = 0; j < i.colSpan; j++) {
        tableColumnsPre.push(i.innerHTML);
      }
    }

    let tableColumns = Table.extractHTML(tableColumnTr.children);
    let tableContent = Table.extractHTML(tableContentTr.children);

    let newTable = new Table(tableTitle.innerHTML);

    newTable.addColumn(tableColumnsPre, "head");
    newTable.addColumn(tableColumns, "head");
    newTable.addColumn(tableContent);

    table.replaceWith(newTable.getTable());
  }

  static extractHTML = (arr) => Array.from(arr).map((x) => x.innerHTML);
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 500 && mode === "lg") {
    mode = "sm";
    transposeTable(mode);
  }
  if (window.innerWidth >= 500 && mode === "sm") {
    mode = "lg";
    transposeTable(mode);
  }
});
