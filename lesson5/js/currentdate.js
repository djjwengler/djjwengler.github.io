
const todaysdate = new Date();

const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentdate').textContent = todaysdate.toLocaleDateString('en-GB', options);

