const style = "solid red";

const title = document.querySelector("h2");
title.style.border = style;

var id = document.querySelectorAll(".a");
var i;
for (i = 0; i < id.length; i++) {
  id[i].style.border = style;
} 

var className = document.querySelector("#example");
className.style.border = style;