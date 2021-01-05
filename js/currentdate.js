
const todaysdate = new Date();
function zeroPad(n) {
  if (n <= 9) {
    n = "0" + n;
  }
  return n;
}
function correctMonth(m) {
  return m+1;
}
  var hours = zeroPad(todaysdate.getHours());
  var minutes = zeroPad(todaysdate.getMinutes());
  var seconds = zeroPad(todaysdate.getSeconds());
  var month = zeroPad(correctMonth(todaysdate.getMonth()));
  var day = zeroPad(todaysdate.getDate());


document.getElementById('currentdate').textContent = month + "/" + day + "/" + todaysdate.getFullYear() + " " + hours + ":" + minutes + ":" + seconds;
document.getElementById('currentyear').textContent = todaysdate.getFullYear();