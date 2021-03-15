let temp = parseFloat(document.getElementById('tempnum').innerHTML);
let wind = parseFloat(document.getElementById('windnum').innerHTML);
console.log(temp);
let windPow = Math.pow(wind, .16);
let chill = 35.74 + (.6215 * temp) - (35.75 * windPow) + (.4275 * temp * windPow);
if (temp <= 50 & wind > 3.0){
  document.getElementById('chillnum').textContent = chill.toFixed(1);
} else {
  document.getElementById('chillnum').textContent = "N/A";
}