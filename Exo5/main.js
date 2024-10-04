let temp = parseInt(prompt("Temperature :"));

let resultat = temp >= 0 ? (temp > 100 ? "GAZEUX" : "LIQUIDE") : "SOLIDE";

console.log(resultat);
alert(resultat);
