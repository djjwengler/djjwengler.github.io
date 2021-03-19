const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
     // temporary checking for valid response and data parsing
    const townData = jsonObject['towns'];
    const townName = document.getElementById('town-name').innerHTML;
    const townFilter = townData.filter(x => x.name == townName);
    const eventList = townFilter[0].events;
    let events = document.createElement('section');

    for (let j = 0; j<eventList.length; j++){
        let p = document.createElement('p');
        p.textContent = eventList[j];
        events.appendChild(p);
      }

      document.querySelector('section.events').appendChild(events);
    
  });