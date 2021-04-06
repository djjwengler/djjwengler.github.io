const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.2457&lon=-74.8460&units=imperial&exclude=hourly,minutely&appid=88c0bc34a4fb7c35a743678592cd2c89';



fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let temp = jsObject.current.temp;
    document.getElementById('tempnum').textContent = temp.toFixed(1);
    document.getElementById('now').textContent = jsObject.current.weather[0].description;
    document.getElementById('humnum').textContent = jsObject.current.humidity;
    
    let dayArray = ["SUN", "MON", "TUES", "WEDS", "THURS", "FRI", "SAT"];
    const justList = jsObject.daily;

    for (let i=1; i<4; i++){
        let li = document.createElement('li');
        let h4 = document.createElement('h3');
        let img = document.createElement('img');
        let h4_2 = document.createElement('h3');
        let date = new Date((justList[i].dt) * 1000);
        let dayNum = date.getDay();

      h4.textContent = dayArray[dayNum];
      img.setAttribute('src', 'images/icons/' + justList[i].weather[0].main + '.png');
      img.setAttribute('class', 'weather-icon');
      img.setAttribute('alt', dayArray[dayNum] + ' forecast')
      h4_2.innerHTML = Math.round(justList[i].temp.day) + '&deg; F';

      li.appendChild(h4);
      li.appendChild(img);
      li.appendChild(h4_2);

      
      document.querySelector('ul.three-day').appendChild(li);
     
}
if (jsObject.alerts != undefined){
  let alerts = jsObject.alerts;
  let text = ' for Yardley! <a href="https://api.openweathermap.org/data/2.5/onecall?lat=40.2457&lon=-74.8460&units=imperial&exclude=hourly,minutely,current,daily&appid=88c0bc34a4fb7c35a743678592cd2c89" target="_blank">Details here.</a> ';
  for (let i=0; i < alerts.length; i++){
    if (i === 0){
      text = alerts[i].event + text;
    }
    else {
      text = alerts[i].event + ' and ' + text;
    }
  }
  document.getElementById('alert').innerHTML = text;
} 
  });

  