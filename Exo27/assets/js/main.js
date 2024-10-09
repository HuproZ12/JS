let apiUrl = "https://pokeapi.co/api/v2/";

let getPokemon = async () => {
    try {
        let recherche = document.getElementById("search-input").value;

        let response = await fetch(`${apiUrl}pokemon/${recherche}`);
        let data = await response.json();

        let imageUrl = data.sprites.other.home.front_default;
        document.getElementById('pokemon-picture').src = imageUrl;
    } catch (error) {
    }
};

document.getElementById('pokemon-search').addEventListener('submit', getPokemon);
