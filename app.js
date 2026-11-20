const API_URL = "https://countries.dev/countries";

// Tous les pays reçus de l'API (rempli une seule fois, au chargement)
let allCountries = [];

// TODO : récupère ici les éléments du DOM dont tu as besoin

/**
 * Récupère tous les pays depuis l'API.
 * - Utilise fetch avec async/await.
 * - Appelée UNE SEULE FOIS, au chargement de la page.
 *
 * @returns {Promise<Array>} Le tableau de tous les pays.
 */
async function fetchCountries() {
  // TODO
  const countries = await fetch(API_URL);
  const response = await countries.json();
  return response;
}



/**
 * Crée la carte HTML d'un pays, sur le modèle de la maquette :
 * drapeau (avec un texte alternatif utile), nom, capitale, population.
 *
 * @param {Object} country - Un pays tel que renvoyé par l'API.
 * @returns {HTMLElement} La carte, prête à être ajoutée à la grille.
 */
const flagsPlaceholder = document.getElementById("flags-placeholder")
function createCountryCard(country) {
    const list = document.createElement("li");
    // list.classList.add("flex ")
    list.innerHTML = `<div><img src="${country.flags.png}"
    </div>
    <div><h3>${country.name}</h3>
    <p>${country.capital}</p>
    </div>
    <div>
    <p>population</p>
    <p>${country.population}
    </div>`
    flagsPlaceholder.appendChild(list)
  // TODO
}

/**
 * Affiche une liste de pays dans la grille.
 * - Vide d'abord la grille (sinon les cartes s'accumulent).
 * - Ajoute une carte par pays.
 * - Si la liste est vide, affiche le message « Aucun pays ne correspond ».
 *
 * @param {Array} countries - Les pays à afficher.
 */
async function displayCountries() {
    allCountries = await fetchCountries();
    console.log(allCountries);
    allCountries.forEach(country=>{
        createCountryCard(country);
    })
}
displayCountries();

/**
 * Applique les deux filtres EN MÊME TEMPS sur allCountries :
 * - le continent choisi dans la liste déroulante ;
 * - le texte saisi dans la recherche (majuscules et minuscules ignorées).
 * Puis affiche le résultat avec displayCountries().
 *
 * Aucune requête vers l'API ici !
 */
function filterCountries() {
  // TODO
}


// ------------------------------------------------------------
// BONUS
// ------------------------------------------------------------

/**
 * (Bonus) Trie des pays par population, du plus peuplé au moins peuplé.
 * Attention : ne modifie pas le tableau allCountries d'origine.
 *
 * @param {Array} countries
 * @returns {Array} Un nouveau tableau trié.
 */
function sortByPopulation(countries) {
  // TODO
}

/**
 * (Bonus) Affiche ou masque le message « Chargement des pays… ».
 *
 * @param {boolean} isLoading - true pour l'afficher, false pour le masquer.
 */
function showLoader(isLoading) {
  // TODO
}

/**
 * (Bonus) Affiche un message d'erreur clair quand l'API ne répond pas.
 *
 * @param {string} message
 */
function showError(message) {
  // TODO
}


// ------------------------------------------------------------
// DÉMARRAGE
// ------------------------------------------------------------

/**
 * Point d'entrée de l'application :
 * 1. récupère les pays avec fetchCountries() et les stocke dans allCountries ;
 * 2. affiche les pays du continent sélectionné par défaut ;
 * 3. écoute les changements de continent et la saisie dans la recherche.
 *
 * (Bonus) Gère le chargement et les erreurs avec try...catch.
 */
async function init() {
  // TODO
}

init();