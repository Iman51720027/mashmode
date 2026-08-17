var uploadMessage = document.querySelector(".upload-message");
var addLine = document.getElementById("addLine");
var heading = document.getElementById("heading");

var upload = document.getElementById("upload-button");
var settings = document.getElementById("settings");

settings.addEventListener("click",() => {
  upload.style.display = "none";
  settings.style.display = "none";
  addLine.style.display = "none";
  heading.style.display = "none";
  uploadMessage.style.display = "none";
})