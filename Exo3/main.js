let rayon = parseFloat(prompt("Rayon du cône :"));
let hauteur = parseFloat(prompt("Hauteur du cône :"));

let volume = (1/3) * Math.PI * Math.pow(rayon, 2) * hauteur;

console.log(`Rayon --> ${rayon}, hauteur --> ${hauteur} : Volume --> ${volume.toFixed(2)}`);
alert(`Rayon --> ${rayon}, hauteur --> ${hauteur} : Volume --> ${volume.toFixed(2)}`);
