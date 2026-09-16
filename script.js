var setting_icon = document.getElementById("settings_icon");
var h1 = document.getElementsByTagName("h1")[0];
var p = document.getElementsByTagName("p")[0];
var hr = document.getElementsByTagName("hr")[0];
var h3= document.getElementsByTagName("h3")[0];
var a = document.getElementsByTagName("a")[0];
setting_icon.addEventListener('click',function () {
  setting_icon.style.display = "none";
  h1.style.display = "none";
  p.style.display = "none";
  hr.style.display = "none";
  h3.style.display = "block";
  a.style.display = "inline";
})