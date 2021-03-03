const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const townData = jsonObject['towns'];
    const townArray = [5, 1, 6];
    for (let i = 0; i < townArray.length; i++ ) {
      let town = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let h3_2 = document.createElement('h3');
      let h3_3 = document.createElement('h3');
      let h3_4 = document.createElement('h3');
      let img = document.createElement('img');
      let act = document.createElement('section');
      let h4 = document.createElement('h4');
      let ul = document.createElement('ul');
      
      
      h2.textContent = townData[townArray[i]].name;
      h3.textContent = townData[townArray[i]].motto;
      h3_2.textContent = 'Year Founded: ' + townData[townArray[i]].yearFounded;
      h3_3.textContent = 'Population: ' + townData[townArray[i]].currentPopulation;
      h3_4.textContent = 'Annual Rain Fall: ' + townData[townArray[i]].averageRainfall;
      img.setAttribute('src', townData[townArray[i]].photo);
      img.setAttribute('alt', townData[townArray[i]].name + ' photo');
      ul.setAttribute('class', townData[townArray[i]].name + 'act');
      h4.textContent = townData[townArray[i]].name;
      let eventArray = townData[townArray[i]].events
      console.log(eventArray);
      for (let j = 0; j<eventArray.length; j++){
        let li = document.createElement('li');
        li.textContent = eventArray[j];
        ul.appendChild(li);
      }

      town.appendChild(h2);
      town.appendChild(h3);
      town.appendChild(h3_2);
      town.appendChild(h3_3);
      town.appendChild(h3_4);
      town.appendChild(img);
      act.appendChild(h4);
      act.appendChild(ul);

      document.querySelector('div.town-info').appendChild(town);
      document.querySelector('section.town-activities').appendChild(act);
    }
  });