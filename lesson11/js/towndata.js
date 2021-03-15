const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const townData = jsonObject['towns'];
    for (let i = 0; i < townData.length; i++ ) {
      if (townData[i].name == "Preston" || townData[i].name == "Fish Haven" || townData[i].name == "Soda Springs"){
      let town = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let h3_2 = document.createElement('h3');
      let h3_3 = document.createElement('h3');
      let h3_4 = document.createElement('h3');
      let img = document.createElement('img');
      
      h2.textContent = townData[i].name;
      h3.textContent = townData[i].motto;
      h3_2.textContent = 'Year Founded: ' + townData[i].yearFounded;
      h3_3.textContent = 'Population: ' + townData[i].currentPopulation;
      h3_4.textContent = 'Annual Rain Fall: ' + townData[i].averageRainfall;
      img.setAttribute('src', townData[i].photo);
      img.setAttribute('alt', townData[i].name + ' photo');
      img.setAttribute('loading', 'lazy');
      

      town.appendChild(h2);
      town.appendChild(h3);
      town.appendChild(h3_2);
      town.appendChild(h3_3);
      town.appendChild(h3_4);
      town.appendChild(img);
 

      document.querySelector('div.town-info').appendChild(town);

    }}
  });