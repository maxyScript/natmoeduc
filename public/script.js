function nextPage(pageNumber) {
    const pages = document.querySelectorAll('.form-page');
    pages.forEach((page, index) => {
        page.classList.remove('active');
        if (index === pageNumber - 1) {
            page.classList.add('active');
        }
    });
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Formulaire soumis avec succès!');
        // Ajoutez ici la logique pour traiter les données du formulaire
    } else {
        alert('Veuillez remplir tous les champs.');
    }
}