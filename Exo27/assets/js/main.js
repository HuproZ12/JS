let apiUrl = "https://pokeapi.co/api/v2/";

let getPokemon = async () => {
    try {
        let recherche = document.getElementById("search-input").value;

        let response = await fetch(`${apiUrl}pokemon/${recherche}`);
        let data = await response.json();

        let imageUrl = data.sprites.other.home.front_default;
        let nom = data.name;
        let poids = data.weight;
        let taille = data.height;
        let types = data.types;
        let capacites = data.abilities;

        document.getElementById('pokemon-picture').src = imageUrl;
        document.getElementById('pokemon-name').textContent = nom;
        document.getElementById('pokemon-weight').textContent = poids;
        document.getElementById('pokemon-height').textContent = taille;
        document.getElementById('pokemon-types').innerHTML = "";
        types.forEach(type => {
            let typeItem = document.createElement('li');
            typeItem.textContent = type.type.name;
            document.getElementById('pokemon-types').appendChild(typeItem);
        });
        document.getElementById('pokemon-abilities').innerHTML = "";
        capacites.forEach(capacite => {
            let capaciteItem = document.createElement('li');
            capaciteItem.textContent = capacite.ability.name;
            document.getElementById('pokemon-abilities').appendChild(capaciteItem);
        });
    } catch (error) {
    }
};

document.getElementById('pokemon-search').addEventListener('submit', getPokemon);
