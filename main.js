let h1 = document.getElementsByClassName("firstH1");
h1[0].setAttribute(
  "style",
  "background-color: red; font-family: Georgia, serif"
);
console.log(h1);

let firstP = document.getElementById("firstP");
firstP.setAttribute("style", "font-weight: bold");

firstP.setAttribute("class", "pClass");

let img = document.getElementsByTagName("img")[0];
img.setAttribute("src", "./flower.jpg");

let li = document.createElement("li");
let contect = document.createTextNode("first");
li.appendChild(contect);

document.querySelector("ul").appendChild(li);
let li2 = document.createElement("li");
let contect2 = document.createTextNode("second");
li2.appendChild(contect2);
document.querySelector("ul").appendChild(li2);
let li3 = document.createElement("li");
let contect3 = document.createTextNode("third");
li3.appendChild(contect3);
document.querySelector("ul").appendChild(li3);

let ul = document.querySelector("ul");
ul.setAttribute("style", "border: 2px solid black;");

let lis = document.querySelectorAll("li");

for (let x = 0; x < lis.length; x++) {
  lis[x].setAttribute(
    "style",
    "display: inline; list-style: none; margin-left:5px"
  );
}
// lis.setAttribute("style", "display: inline; style-list: none");

let row1 = document.createElement("tr");
let col1 = document.createElement("td");
let text1 = document.createTextNode("first");
col1.appendChild(text1);

let col2 = document.createElement("td");
let text2 = document.createTextNode("second");
col2.appendChild(text2);
let col3 = document.createElement("td");
let text3 = document.createTextNode("third");
col3.appendChild(text3);

row1.appendChild(col1);
row1.appendChild(col2);
row1.appendChild(col3);
document.querySelector("table").appendChild(row1);

let row2 = document.createElement("tr");
let col12 = document.createElement("td");
let text4 = document.createTextNode("first");
col12.appendChild(text4);
let col22 = document.createElement("td");
let text5 = document.createTextNode("second");
col22.appendChild(text5);
let col23 = document.createElement("td");
let text6 = document.createTextNode("second");
col23.appendChild(text6);
row2.appendChild(col12);
row2.appendChild(col22);
row2.appendChild(col23);
document.querySelector("table").appendChild(row2);

let x = document.querySelector("table");
x.setAttribute("class", "tableClass");
let y = document.querySelectorAll("tr");

for (let x = 0; x < y.length; x++) {
  y[x].setAttribute("class", "tableClass");
}

let z = document.querySelectorAll("td");
for (let x = 0; x < z.length; x++) {
  z[x].setAttribute("class", "tableClass");
}
