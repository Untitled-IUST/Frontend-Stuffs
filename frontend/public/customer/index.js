let arrow = document .querySelectorAll(".arrow")[0];
let slider = document .querySelectorAll(".slider")[0];
arrow.addEventListener("click" , ()=>{
  slider.classList.toggle("close");
});
let togglebtn = document.querySelectorAll(".checkbox")[0];
let body = document.querySelectorAll(".mainbody")[0];
let search = document.querySelectorAll(".fa-magnifying-glass")[0];
togglebtn.addEventListener("click" , ()=>{
  body.classList.toggle("dark");
  slider.classList.toggle("middark");
  slider.classList.toggle("color");
  

});
