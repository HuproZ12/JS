import {Contact} from './Contact.js';

let contacts = [];

document.getElementById('formContact').addEventListener('submit', ajouterContact);

function ajouterContact(event) {
    event.preventDefault();

    let titre = document.querySelector('input[name="titre"]:checked').value;
    let nom = document.querySelector('input[name="nom"]').value;
    let prenom = document.querySelector('input[name="prenom"]').value;
    let dateNaissance = document.querySelector('input[name="dateNaissance"]').value;
    let telephone = document.querySelector('input[name="telephone"]').value;
    let email = document.querySelector('input[name="email"]').value;

    document.getElementById("formContact").reset();

    let nouveauContact = new Contact(titre, nom, prenom, dateNaissance, telephone, email);
    contacts.push(nouveauContact);
    afficherContacts();
}

function afficherContacts(){
    let tableau = document.getElementById("result");
    tableau.innerHTML = ``;

    contacts.forEach(contact=> {
        tableau.innerHTML += `<tr>
            <td>${contact.titre}</td>
            <td>${contact.nom}</td>
            <td>${contact.prenom}</td>
            <td>${contact.dateNaissance}</td>
            <td>${contact.telephone}</td>
            <td>${contact.email}</td>
        </tr>`;
    });
}
