import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';  
function fetchCountries(name) {
  if (name) {
      return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,)
  
          .then(response => {
              if (response.status === 404) {
                 return  Notiflix.Notify.failure('Oops, there is no country with that name');
              }
        //   console.log('then', response);
        if (response.ok) return response.json();
        throw new Error('Error fetching data')
      })
      .catch(error =>
        console.log('catch', error));
  }
}
export default{fetchCountries}

