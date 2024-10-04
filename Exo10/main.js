let hauteur = parseInt(prompt("Hauteur triangle :"));

for (let i = 1; i <= hauteur; i++) {
    let espacement = ' '.repeat(hauteur - i);
    let etoiles = '*'.repeat(2 * i - 1);
    console.log(espacement + etoiles);
}
