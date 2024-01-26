String.prototype.toTitleCase = function () {
  return this[0].toUpperCase() + this.slice(1, this.length);
};

const fontDivContainer = document.getElementById("fonts");
const colorDivContainer = document.getElementById("colors");
const baseCss = Array.from(document.styleSheets).filter((x) =>
  x.href.includes("base.css")
)[0];
const root = Array.from(baseCss.cssRules).filter((x) =>
  x.cssText.includes(":root")
)[0];
const rootText = root.cssText.replace(/:root|\{|\}|--/g, "");
const rootVariables = rootText.split(";").map((x) => x.split(":"));



rootVariables.forEach((variable) => {
  if (variable[0] != " ") {
    let name = variable[0].trim();
    let value = variable[1].trim();

    // if variable is a color
    if (value[0] === "#") {
      let div = document.createElement("div");
      div.style.backgroundColor = value;

      let p = document.createElement("p");
      p.innerHTML = `${name.toTitleCase()} Color`;

      let p2 = document.createElement("p");
      p2.innerHTML = value.toUpperCase();
      div.append(p, p2);
      colorDivContainer.append(div);
    }
    // assume it is a font
    else {
      let p = document.createElement("p");
      p.innerHTML = `${value} will be used for headings.`;
      p.style.fontFamily = value;
      fontDivContainer.append(p);
    }
  }
});
