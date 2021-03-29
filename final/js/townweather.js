const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.2457&lon=-74.8460&units=imperial&exclude=hourly,minutely&appid=88c0bc34a4fb7c35a743678592cd2c89';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let temp = jsObject.current.temp;
    document.getElementById('tempnum').textContent = temp.toFixed(1);
    document.getElementById('now').textContent = jsObject.current.weather[0].description;
    document.getElementById('humnum').textContent = jsObject.current.humidity;
    let alert = jsObject.alerts[0];
  console.log(jsObject.alerts[0]);
  if (jsObject.alerts.length > 0){

    document.getElementById('alert').textContent = alert.event + ' for Yardley!';
  }
    let dayArray = ["SUN", "MON", "TUES", "WEDS", "THURS", "FRI", "SAT"];
    const justList = jsObject.daily;
 

    for (let i=1; i<4; i++){
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let img = document.createElement('img');
        let h4_2 = document.createElement('h4');
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

  });

  