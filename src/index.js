import './css/styles.css';
import countryCard from './country-card.hbs';
import Notiflix from 'notiflix';


// import './fetchCountries';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('country-list');

inputEl.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));

fetchCountries()
    .then(renderCountryCard)
    .catch(error =>
        console.log(error));

function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
         .then(r => {
            return r.json()
        })
}

function renderCountryCard(country) {
  const markUp = countryCard(country);
  countryList.innerHTML = markUp;
}
