const fileInput = document.getElementById("pet-photo");
const photoText = document.getElementById("photo-text");
const nextButton = document.querySelector(".btn-next");
const petNameInput = document.getElementById("pet-name");
const petBreedInput = document.getElementById("pet-breed");
const petBirthdayInput = document.getElementById("pet-birthday");
const contactForm = document.getElementById("formulario");
const petForm = document.getElementById("pet-form");

let petSubmitted = false;
let contactSubmitted = false;

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
    // El botón ahora es submit del formulario; este listener queda como respaldo.
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

// Manejo de envío del formulario de mascota
if (petForm) {
    petForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (validateForm()) {
            petSubmitted = true;
            alert("Formulario de mascota válido.");
            attemptFinalSubmit();
        }
    });
}

// Manejo de envío del formulario de contacto
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Usar validación nativa para campos HTML (required, pattern, minlength)
        if (contactForm.checkValidity()) {
            contactSubmitted = true;
            alert("Formulario de contacto válido.");
            attemptFinalSubmit();
        } else {
            contactForm.reportValidity();
        }
    });
}

function attemptFinalSubmit() {
    // Comprobar ambos formularios
    const contactOk = contactForm ? contactForm.checkValidity() : false;
    const petOk = validateForm();

    if (petSubmitted && contactSubmitted && contactOk && petOk) {
        // Simular envío (aquí iría fetch/ajax). Luego limpiar ambos formularios.
        alert("Ambos formularios correctos. Enviando y limpiando formularios...");
        if (petForm) petForm.reset();
        if (contactForm) contactForm.reset();
        // Restaurar texto del selector de foto
        if (photoText) {
            photoText.textContent = "Sube una foto";
            photoText.style.color = "#4a4a4a";
        }
        petSubmitted = false;
        contactSubmitted = false;
    } else {
        // Indicar qué falta
        if (!petSubmitted) console.log("Falta enviar el formulario de mascota.");
        if (!contactSubmitted) console.log("Falta enviar el formulario de contacto.");
    }
