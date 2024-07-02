const modeButton = document.getElementById('modeButton');
const body = document.body; 


const child = document.getElementsByClassName('child');
const image = document.getElementsByClassName('image');
const images = document.getElementsByClassName('images');
const button = document.getElementsByClassName('button')

modeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }



});


document.addEventListener('DOMContentLoaded', () => {
  const mode = localStorage.getItem('mode');
  
  if (mode === 'dark') {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});

button.addEventListener('dbclick', function(){
 
  images.style.backroundColor = 'blue'

 
})