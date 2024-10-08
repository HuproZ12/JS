let etudiants = [ 
    { 
        prenom: "José", 
        nom: "Garcia", 
        matieres: { 
            francais: 16, 
            anglais: 7, 
            humour: 14 
        }  
    }, 
    { 
        prenom: "Antoine", 
        nom: "De Caunes", 
        matieres: { 
            francais: 15, 
            anglais: 6, 
            humour: 16, 
            informatique: 4, 
            sport: 10 
        } 
    } 
];

etudiants.forEach(etudiant=> {
    console.log("###########DEBUT etudiant###########");
    console.log(`Etudiant : ${etudiant.nom} ${etudiant.prenom}`);
    for (matiere in etudiant.matieres) {
        console.log(` ${matiere} : ${etudiant.matieres[matiere]}`);
    }
    calculMoyenne(etudiant.matieres);
    console.log("###########FIN etudiant###########");
});

function calculMoyenne(matieres) {
    let notes = Object.values(matieres);
    let somme= 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    console.log(`La moyenne est de ${(somme/notes.length).toFixed(2)}`);
}
