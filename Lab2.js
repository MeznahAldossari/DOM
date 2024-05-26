let divAtt = document.getElementById("div1");
let p = 0;

setInterval(Moving, 1000);

function Moving() {
  p = p + 10;

  divAtt.style.marginLeft = p + "px";

  divAtt.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  divAtt.style.width = "20vw";
  divAtt.style.height = "20vh";
  divAtt.style.opacity = "0.5";
}
