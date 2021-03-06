const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // temporary checking for valid response and data parsing
    const townData = jsonObject['towns'];
    const townFilter = townData.filter(x => x.name == "Preston" || x.name =="Soda Springs" || x.name =="Fish Haven");
    for (let i = 0; i < townFilter.length; i++ ) {
      let town = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let h3_2 = document.createElement('h3');
      let h3_3 = document.createElement('h3');
      let h3_4 = document.createElement('h3');
      let img = document.createElement('img');
      
      h2.textContent = townFilter[i].name;
      h3.textContent = townFilter[i].motto;
      h3_2.textContent = 'Year Founded: ' + townFilter[i].yearFounded;
      h3_3.textContent = 'Population: ' + townFilter[i].currentPopulation;
      h3_4.textContent = 'Annual Rain Fall: ' + townFilter[i].averageRainfall;
      img.setAttribute('src', townFilter[i].photo);
      img.setAttribute('alt', townFilter[i].name + ' photo');
      img.setAttribute('loading', 'lazy');

      town.appendChild(h2);
      town.appendChild(h3);
      town.appendChild(h3_2);
      town.appendChild(h3_3);
      town.appendChild(h3_4);
      town.appendChild(img);
 
      document.querySelector('div.town-info').appendChild(town);

    }
  });