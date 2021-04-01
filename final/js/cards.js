const requestURL = 'json/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    const directory = jsonObject['directory'];
    for (let i = 0; i < directory.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let h3_2 = document.createElement('h3');
      let a = document.createElement('a');

      let img = document.createElement('img');
      
      img.setAttribute('src', directory[i].logo);
      h2.textContent = directory[i].name;
      h3.textContent = directory[i].address;
      h3_2.textContent = directory[i].phone;
      a.textContent = directory[i].name;
      a.setAttribute('href', directory[i].url);
      a.setAttribute('target', '_blank');
      img.setAttribute('alt', directory[i].name + ' logo');
      img.setAttribute('loading', 'lazy');

      card.appendChild(img);
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(h3_2);
      card.appendChild(a);

     

      document.querySelector('div.cards').appendChild(card);
    }
  });

  