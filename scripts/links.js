const baseURL = "https://dc-cc-21.github.io/wdd230/";
// const linksURL = "./data/links.json";
const linksURL = `${baseURL}data/links.json`;
const container = document.getElementById("content");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  // console.log(data);
  displayLinks(data);
}
getLinks();

function displayLinks(weeks) {
  weeks.forEach((week) => {
    let li = document.createElement("li");
    let h4 = document.createElement("h4");
    h4.innerHTML = `Week ${week.lesson}`;
    li.append(h4);

    week.links.forEach((link) => {
      let a = document.createElement("a");
      a.href = link.url;
      a.innerHTML = link.title;
      li.append(a);
    });
    if (week.links.length == 0) {
      let p = document.createElement("p");
      p.innerHTML = "No Links Available";
      li.append(p);
    }
    container.append(li);
  });
}

// fetch(linksURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     jsonObject.forEach((week) => {
//       let li = document.createElement("li");
//       let h4 = document.createElement("h4");
//       h4.innerHTML = `Week ${week.lesson}`;
//       li.append(h4);

//       week.links.forEach((link) => {
//         let a = document.createElement("a");
//         a.href = link.url;
//         a.innerHTML = link.title;
//         li.append(a);
//       });
//       if(week.links.length == 0){
//         let p = document.createElement("p");
//         p.innerHTML = "No Links Available";
//         li.append(p);
//       }
//       container.append(li);
//     });
//   });
