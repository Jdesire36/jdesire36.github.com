// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formMessage').innerText = `Merci, ${name}! Votre message a été envoyé avec succès.`;
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').innerText = 'Veuillez remplir tous les champs du formulaire.';
    }
});
