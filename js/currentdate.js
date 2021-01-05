
const todaysdate = new Date();
const lastMod = new Date(document.lastModified);
function zeroPad(n) {
  if (n <= 9) {
    n = "0" + n;
  }
  return n;
}
function correctMonth(m) {
  return m+1;
}
  var hours = zeroPad(lastMod.getHours());
  var minutes = zeroPad(lastMod.getMinutes());
  var seconds = zeroPad(lastMod.getSeconds());
  var month = zeroPad(correctMonth(lastMod.getMonth()));
  var day = zeroPad(lastMod.getDate());


document.getElementById('currentdate').textContent = month + "/" + day + "/" + lastMod.getFullYear() + " " + hours + ":" + minutes + ":" + seconds;
document.getElementById('currentyear').textContent = todaysdate.getFullYear();