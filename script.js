const fileInput = document.getElementById("pet-photo");
const photoText = document.getElementById("photo-text");
const nextButton = document.querySelector(".btn-next");
const petNameInput = document.getElementById("pet-name");
const petBreedInput = document.getElementById("pet-breed");
const petBirthdayInput = document.getElementById("pet-birthday");

function validateForm() {
    if (!petNameInput.value.trim()) {
        alert("Por favor, completa el nombre de la mascota.");
        petNameInput.focus();
        return false;
    }

    if (!petBreedInput.value.trim()) {
        alert("Por favor, completa la raza de la mascota.");
        petBreedInput.focus();
        return false;
    }

    if (!petBirthdayInput.value) {
        alert("Por favor, selecciona la fecha de cumpleaños.");
        petBirthdayInput.focus();
        return false;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
        alert("Por favor, sube una foto de la mascota.");
        return false;
    }

    return true;
}

nextButton.addEventListener("click", function () {
    if (validateForm()) {
        alert("Formulario válido. Puedes continuar.");
    }
});

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
        photoText.textContent = "Sube una foto";
        photoText.style.color = "#4a4a4a";
    }
});
