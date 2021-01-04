
const todaysdate = new Date();
document.getElementById('currentdate').innerHTML = (todaysdate.getMonth() + 1) + "/" + todaysdate.getDate() + "/" + todaysdate.getFullYear() + " " + todaysdate.getHours() + ":" + todaysdate.getMinutes() + ":" + todaysdate.getSeconds();
document.getElementById('currentyear').textContent = todaysdate.getFullYear();