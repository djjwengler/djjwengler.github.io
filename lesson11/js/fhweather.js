const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=88c0bc34a4fb7c35a743678592cd2c89';
const apiForURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=88c0bc34a4fb7c35a743678592cd2c89';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let temp = jsObject.main.temp;
    let wind = jsObject.wind.speed;
    const desc = jsObject.weather[0].description; 
    document.getElementById('tempnum').textContent = temp.toFixed(1);
    document.getElementById('now').textContent = desc;
    document.getElementById('highnum').textContent = (jsObject.main.temp_max).toFixed(1); 
    document.getElementById('humnum').textContent = jsObject.main.humidity;
    document.getElementById('windnum').textContent = wind.toFixed(1);
    
    let windPow = Math.pow(wind, .16);
    let chill = 35.74 + (.6215 * temp) - (35.75 * windPow) + (.4275 * temp * windPow);
    if (temp <= 50 & wind > 3.0){
      document.getElementById('chillnum').textContent = chill.toFixed(1);
    } else {
       document.getElementById('chillnum').textContent = "N/A";
    }
  });

  fetch(apiForURL)
  .then((response) => response.json())
  .then((jsObject) => {
   
    let dayArray = ["SUN", "MON", "TUES", "WEDS", "THURS", "FRI", "SAT"];
    const justList = jsObject.list;
    console.log(justList);
    function getHour(x){
      let dateVar = justList[x].dt_txt;
      let hour = new Date(dateVar).getHours();
      return hour;
    }
    console.log(justList[2].main.temp);
    for (let i=0; i<justList.length; i++){
      if (getHour(i) == 18){
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let img = document.createElement('img');
        let h4_2 = document.createElement('h4');
        let date = justList[i].dt_txt;
        let dayNum = new Date(date).getDay();

      h4.textContent = dayArray[dayNum];
      img.setAttribute('src', 'images/icons/' + justList[i].weather[0].main + '.png');
      img.setAttribute('class', 'weather-icon');
      img.setAttribute('alt', dayArray[dayNum] + ' forecast')
      h4_2.innerHTML = Math.round(justList[i].main.temp) + '&deg; F';

      li.appendChild(h4);
      li.appendChild(img);
      li.appendChild(h4_2);

      
      document.querySelector('ul.five-day').appendChild(li);
     
    }
}

  });