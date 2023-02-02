const loadCountries = () =>{
   fetch('https://restcountries.com/v3.1/all')
   .then(res=>res.json())
   .then(data=>displayCountries(data))
}

const displayCountries = countries=>{
   const countriesContainer = document.getElementById('countries-container');
   countries.forEach(country => {
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
    countryDiv.innerHTML=`
      <h1>${country.name.common}</h1>
      <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
    `
    countriesContainer.appendChild(countryDiv)
   });
}
const loadCountryDetail = (code) =>{
   const url = `https://restcountries.com/v3.1/alpha/${code}`;
   fetch(url).then(res=>res.json()).then(data=>displayCountryDetail(data[0]))
}
const displayCountryDetail = country =>{
   console.log(country)
   const countryDetail = document.getElementById('country-detail');
   countryDetail.innerHTML = `
   <h2>Name: ${country.name.official}</h2>
   <p>Capital: ${country.capital?country.capital[0]:'No Capital'}</p>
   <p>Region: ${country.region}</p>
   <p>Subregion: ${country.subregion}</p>
   <p>Area: ${country.area} km<sup>2</sup></p>
   <p>Population: ${country.population}</p>
   <p>Timezone: ${country.timezones}</p>
   <img src="${country.flags.png}"</img>
   `;
}
loadCountries()