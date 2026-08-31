// back button variable
var backBtn = document.getElementById("back");
// uploadmesage button variable
var uploadMessage = document.querySelector(".upload-message");
// addline button variable
var addLine = document.getElementById("addLine");
// heading button variable
var heading = document.getElementById("heading");
// upload button variable
var upload = document.getElementById("upload-button");
// settings button variable
var settings = document.getElementById("settings");
// settings-ui varible 
let settingsUI = document.getElementById("settings-ui");
// settings me jab click hota bei
settings.addEventListener("click", () => {
  upload.style.display = "none";
  settings.style.display = "none";
  addLine.style.display = "none";
  heading.style.display = "none";
  uploadMessage.style.display = "none";
  backBtn.style.display = "flex";
  settingsUI.style.display = "block"
})
// back me click hota hei
backBtn.addEventListener("click", () => {
  upload.style.display = "flex";
  settings.style.display = "block";
  addLine.style.display = "block";
  heading.style.display = "block";
  uploadMessage.style.display = "block";
  backBtn.style.display = "none";
  uploadMessage.style.display = "block";
  settingsUI.style.display = "none";
})


function openGallery() {
  
  const input = document.getElementById("galleryInput");
  
  /*
    showPicker() থাকলে browser-এর native
    picker খুলবে।
  */
  if (input.showPicker) {
    try {
      input.showPicker();
      return;
    } catch (e) {}
  }
  
  input.click();
}


document.getElementById("galleryInput")
  .addEventListener("change", function() {
    
    const file = this.files[0];
    
    if (!file) return;
    // file varification karega
    if (!file.name.toLowerCase().endsWith(".apk")) {
      alert("only apk allowed");
      return;
    }
    const preview = document.getElementById("preview");
    
    preview.innerHTML = "";
    
    const apkURL = URL.createObjectURL(file);
    const apkSizeMB = (file.size / (1024 * 1024)).toFixed(2);
    // card Rander karega 
    const oneCard = document.createElement("div");
    oneCard.className = "oneCart";
    oneCard.innerHTML =`
    <h3 class="apkName">Name:- ${file.name}</h3><br>
    <p class="fileSize">Size:- ${apkSizeMB}</p><br>
    <a href="${apkURL}" dawnload="${file.name}">
     <button class="dawnloadBtn">Dawnload</button>
     </a>
    `;
    preview.appendChild(oneCard);
    uploadMessage.style.display = "none";
  });