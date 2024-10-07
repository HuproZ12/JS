let tableau = [];

for (let i = 0; i < 10; i++) {
    let valeur = prompt("Entrez la valeur " + (i + 1) + " :");
    tableau.push(valeur);
}

console.log("Affichage des valeurs saisies :");
for (let i = 0; i < tableau.length; i++) {
    console.log("\t".repeat(i) + tableau[i]);
}
