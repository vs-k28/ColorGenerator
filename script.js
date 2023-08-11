function toggleDropdown1() {
  var dropdownEl1 = document.getElementById("dropdown1");
  dropdownEl1.style.display =
    dropdownEl1.style.display === "block" ? "none" : "block";
}
function toggleDropdown2() {
  var dropdownEl2 = document.getElementById("dropdown2");
  dropdownEl2.style.display =
    dropdownEl2.style.display === "block" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", function () {
  function hideElement(event) {
    var hideEl = document.querySelectorAll(".dropdown-content");
    var x = event.target.nodeName;
    if (x != "BUTTON" && x != "I" && x != "P") {
      hideEl[0].style.display = "none";
      hideEl[1].style.display = "none";
    }
  }
  document.addEventListener("click", hideElement);
});

function rgb() {
  var randN1 = (Math.floor(Math.random()*255))+1;
  var randN2 = (Math.floor(Math.random()*255))+1; 
  var randN3 = (Math.floor(Math.random()*255))+1; 
  var color = `rgb(${randN1}, ${randN2}, ${randN3})`;
  document.body.style.backgroundColor = color;
  document.getElementById("color").value = color;
}

function rgba() {
  var randN1 = (Math.floor(Math.random()*255))+1;
  var randN2 = (Math.floor(Math.random()*255))+1; 
  var randN3 = (Math.floor(Math.random()*255))+1;
  var alpha = (Math.floor(Math.random()*11))/10;
  var color = `rgba(${randN1}, ${randN2}, ${randN3}, ${alpha})`;
  document.body.style.backgroundColor = color;
  document.getElementById("color").value = color;
}

function hex() {
  var list = ["0","1","2", "3", "4", "5", "6", "7", "8", "9", "a","b", "c", "d", "e", "f"];
  var color = "#"; 
  for (let i=0;i<6;i++){
    color += list[Math.floor(Math.random()*(list.length))];
  }
  document.body.style.backgroundColor = color;
  document.getElementById("color").value = color;
}

function hsl() {
  var randNum = (Math.floor(Math.random()*360))+1;
  console.log(randNum);
  var ran_percnt1 = (Math.floor(Math.random()*100)+1) +"%";
  var ran_percnt2 = (Math.floor(Math.random()*100)+1) +"%";
  var color = `hsl(${randNum}, ${ran_percnt1}, ${ran_percnt2})`;
  document.body.style.backgroundColor = color;
  document.getElementById("color").value = color;
  console.log(color);
}

function hsla() {
  var randNum = (Math.floor(Math.random()*360))+1;
  console.log(randNum);
  var ran_percnt1 = (Math.floor(Math.random()*100)+1) +"%";
  var ran_percnt2 = (Math.floor(Math.random()*100)+1) +"%";
  var alpha = (Math.floor(Math.random()*11))/10;
  var color = `hsl(${randNum}, ${ran_percnt1}, ${ran_percnt2}, ${alpha})`;
  document.body.style.backgroundColor = color;
  document.getElementById("color").value = color;
 
}
