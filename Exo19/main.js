function compterLettreA(chaine) {
    let compteur = 0;
    for (let i = 0; i < chaine.length; i++) {
        if (chaine[i] === 'a') {
            compteur++;
        }
    }
    return compteur;
}

console.log(compterLettreA("abba"));
console.log(compterLettreA("mixer"));