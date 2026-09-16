// setting_icon var 
var setting_icon = document.getElementById("settings_icon");
// h1 var
var h1 = document.getElementsByTagName("h1")[0];
// p var 
var p = document.getElementsByTagName("p")[0];
// hr var
var hr = document.getElementsByTagName("hr")[0];
// h3 var
var h3= document.getElementsByTagName("h3")[0];
// a var 
var a = document.getElementsByTagName("a")[0];
// back btn var
var backBtn = document.getElementById("back-btn");
// setting_icon event
setting_icon.addEventListener('click',function () {
  setting_icon.style.display = "none";
  h1.style.display = "none";
  p.style.display = "none";
  hr.style.display = "none";
  h3.style.display = "block";
  a.style.display = "inline";
  backBtn.style.display = "inline";
  //theme.style.display = "inline";
})
// backBtn event
backBtn.addEventListener('click',function () {
  setting_icon.style.display = "block";
  h1.style.display = "block";
  p.style.display = "block";
  hr.style.display = "block";
  h3.style.display = "none";
  a.style.display = "none";
  backBtn.style.display = "none";
})
