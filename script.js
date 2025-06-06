const btn = document.getElementById('animateBtn');

window.onload = () => {
  const savedColor = localStorage.getItem('buttonColor');
  if (savedColor) {
    btn.style.backgroundColor = savedColor;
  }
};

function animateButton() {
  btn.classList.add('animate');
  
  btn.addEventListener('animationend', () => {
    btn.classList.remove('animate');
  }, { once: true });

  const newColor = getRandomColor();
  btn.style.backgroundColor = newColor;
  localStorage.setItem('buttonColor', newColor);
}

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

btn.addEventListener('click', animateButton);
