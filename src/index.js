import './css/styles.css';
import countryCard from './country-card.hbs';
import countryCards from './countryList.hbs';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import API from'./fetchCountries';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();
  const formValue = e.target.value.trim();
  if (formValue === '') {
     return  clearCountryCard();
  }
  
  API.fetchCountries(formValue).then(data => {
    clearCountryCard();
     if (data.length > 10) {
      Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    
    } else if (data.length === 1) {
      renderCountryCard(data, countryCard);
    } else if (data.length <= 10) {
      renderCountryCard(data, countryCards);
    }
  })
  .catch(error =>
        console.log('catch', error));
}

function renderCountryCard(countries, template) {
  const markUp = countries.map(country => template(country)).join('');
  countryList.innerHTML = markUp;
}
function clearCountryCard() {
  countryList.innerHTML ='';
}