import './css/styles.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './fetchCountries'

const searchForm = document.querySelector('#search-form')
const searchBtn = document.querySelector('button')

searchBtn.addEventListener('input', onInputclick)

function onInputclick(e) {
  e.preventDefault;
  fetchPictures()
}