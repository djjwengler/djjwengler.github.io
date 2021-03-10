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
      let act = document.createElement('section');
      let h4 = document.createElement('h4');
      let ul = document.createElement('ul');
      
      ul.setAttribute('class', townData[i].name + 'act');
      h4.textContent = townData[i].name;
      let eventArray = townData[i].events
      console.log(eventArray);
      for (let j = 0; j<eventArray.length; j++){
        let li = document.createElement('li');
        li.textContent = eventArray[j];
        ul.appendChild(li);
      }

      act.appendChild(h4);
      act.appendChild(ul);

      document.querySelector('div.town-activities').appendChild(act);
    }}
  });