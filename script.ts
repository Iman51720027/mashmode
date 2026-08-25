// Back button variable
const backBtn = document.getElementById("back") as HTMLElement;

// Upload message variable
const uploadMessage = document.querySelector(
    ".upload-message"
) as HTMLElement;

// Add line variable
const addLine = document.getElementById("addLine") as HTMLElement;

// Heading variable
const heading = document.getElementById("heading") as HTMLElement;

// Upload button variable
const upload = document.getElementById(
    "upload-button"
) as HTMLElement;

// Settings button variable
const settings = document.getElementById(
    "settings"
) as HTMLElement;

// Settings UI variable
const settingsUI = document.getElementById(
    "settings-ui"
) as HTMLElement;


// Settings par click hone par
settings.addEventListener("click", (): void => {
    upload.style.display = "none";
    settings.style.display = "none";
    addLine.style.display = "none";
    heading.style.display = "none";
    uploadMessage.style.display = "none";
    
    backBtn.style.display = "flex";
    settingsUI.style.display = "block";
});


// Back par click hone par
backBtn.addEventListener("click", (): void => {
    upload.style.display = "flex";
    settings.style.display = "block";
    addLine.style.display = "block";
    heading.style.display = "block";
    uploadMessage.style.display = "block";
    
    backBtn.style.display = "none";
    settingsUI.style.display = "none";
});


function openGallery(): void {
    
    const input = document.getElementById(
        "galleryInput"
    ) as HTMLInputElement;
    
    /*
      showPicker() available hone par
      browser ka native file picker khulega.
    */
    
    if ("showPicker" in input) {
        try {
            input.showPicker();
            return;
        } catch (e) {
            // Fallback
        }
    }
    
    input.click();
}


// Gallery input
const galleryInput = document.getElementById(
    "galleryInput"
) as HTMLInputElement;


galleryInput.addEventListener(
    "change",
    function(): void {
        
        const file: File | undefined = this.files?.[0];
        
        if (!file) return;
        
        const preview = document.getElementById(
            "preview"
        ) as HTMLElement;
        
        preview.innerHTML = "";
        
        const image: HTMLImageElement =
            document.createElement("img");
        
        image.src = URL.createObjectURL(file);
        
        preview.appendChild(image);
        
        uploadMessage.style.display = "none";
    }
);