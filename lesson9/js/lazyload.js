
const imgOptions =   {
  root:null, 
  rootMargin: '0px 0px 100px 0px',threshold:0};

const loadImage =(image)=> {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('datasrc');
  };

};

let images = document.querySelectorAll('img[data-src]');

const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=> {
        if ( entry.isIntersecting){
            loadImage(entry.target);
            observer.unobserve(entry.target);
            entry.target.className="blur-remove";
        };
    });
} ,imgOptions);
    images.forEach(image => {
        observer.observe(image);});