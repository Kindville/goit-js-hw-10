import './css/styles.css';
import countryCard from './country-card.hbs';
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
  clearCountryCard();
  const formValue = e.target.value;
   
  if (formValue.length === 1) {
    Notiflix.Report.info('Too many matches found. Please enter a more specific name.');
  } else if (formValue.length >= 2) {
    return API.fetchCountries(formValue)
  .then(data => renderCountryCard(data));
  } 
 
}


function renderCountryCard(country) {
  const markUp = countryCard(...country);
  countryList.innerHTML = markUp;
}
function clearCountryCard() {
  countryList.innerHTML ='';
}