let age = parseInt(prompt("Age :"));
let salaire = parseFloat(prompt("Salaire :"));
let exp = parseInt(prompt("Années d'expérience :"));

if(age < 30){
    console.log("Vous n'avez pas l'âge requis");
    alert("Vous n'avez pas l'âge requis");
} else if(salaire > 40000){
    console.log("Trop gros salaire");
    alert("Trop gros salaire");
} else if(exp < 5){
    console.log("Pas assez d'xp");
    alert("Pas assez d'xp");
} else{
    console.log("Profil valide !");
    alert("Profil valide !");
}
