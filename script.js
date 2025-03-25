document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita il comportamento predefinito

    const form = event.target;
    const formData = new FormData(form);

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
    .then(() => {
        document.getElementById("success-message").classList.remove("d-none");
        document.getElementById("success-message").textContent = "Messaggio inviato con successo! ✅";
        form.reset();
    })
    .catch(error => {
        alert("Errore durante l'invio: " + error);
    });
});
