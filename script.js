const fileInput = document.getElementById("pet-photo");
const photoText = document.getElementById("photo-text");

fileInput.addEventListener("change", function () {
    if (this.files && this.files.length > 0) {
        const fileName = this.files[0].name;
        const maxCharacters = 22;

        if (fileName.length > maxCharacters) {
            photoText.textContent =
                fileName.substring(0, maxCharacters) + "...";
        } else {
            photoText.textContent = fileName;
        }

        photoText.style.color = "#333";
    } else {
        photoText.textContent = "Upload a photo";
        photoText.style.color = "#4a4a4a";
    }
});
