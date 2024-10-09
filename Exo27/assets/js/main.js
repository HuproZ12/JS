let apiUrl = "https://pokeapi.co/api/v2/";
let currentPokemonId;

let getPokemon = async (id) => {
    try {
        let response = await fetch(`${apiUrl}pokemon/${id}`);
        let data = await response.json();

        document.getElementById('pokemon-picture').src = data.sprites.other.home.front_default;;
        document.getElementById('pokemon-name').textContent = `${data.name}`;
        document.getElementById('pokemon-id').textContent = `#${data.id}`;
        document.getElementById('pokemon-weight').textContent = `${data.weight / 10} kg`;
        document.getElementById('pokemon-height').textContent = `${data.height / 10} m`;

        let types = data.types;
        document.getElementById('pokemon-types').innerHTML = "";
        types.forEach(type => {
            let typeItem = document.createElement('li');
            typeItem.textContent = type.type.name;
            typeItem.classList.add(`type-${type.type.name}`);
            document.getElementById('pokemon-types').appendChild(typeItem);
        });

        let capacites = data.abilities;
        document.getElementById('pokemon-abilities').innerHTML = "";
        capacites.forEach(capacite => {
            let capaciteItem = document.createElement('li');
            capaciteItem.textContent = capacite.ability.name;
            document.getElementById('pokemon-abilities').appendChild(capaciteItem);
        });

        if(data.id > 1){
            document.getElementById('pokemon-previous').disabled = false;
        }else{
            document.getElementById('pokemon-previous').disabled = true;
        }

        if(data.id < 1025){
            document.getElementById('pokemon-next').disabled = false;
        }else{
            document.getElementById('pokemon-next').disabled = true;
        }

        currentPokemonId = data.id;
    } catch (error) {
        console.error("Erreur :", error);
    }
};

document.getElementById('pokemon-search').addEventListener('submit', (event) => {
    event.preventDefault();
    let recherche = document.getElementById("search-input").value;
    getPokemon(recherche);
});
document.getElementById('pokemon-previous').addEventListener('click', () => {getPokemon(currentPokemonId - 1)});
document.getElementById('pokemon-next').addEventListener('click', () => {getPokemon(currentPokemonId + 1)});