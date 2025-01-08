// Crear el rastro dinámico con divs
const trailCount = 20;
const trails = [];

for (let i = 0; i < trailCount; i++) {
  const trail = document.createElement('div');
  trail.className = 'trail';
  document.body.appendChild(trail);
  trails.push(trail);
}

// Variables para la posición del ratón
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

// Animar los rastros
function animateTrails() {
  for (let i = trails.length - 1; i > 0; i--) {
    trails[i].style.left = trails[i - 1].style.left;
    trails[i].style.top = trails[i - 1].style.top;
  }
  trails[0].style.left = mouseX + 'px';
  trails[0].style.top = mouseY + 'px';

  requestAnimationFrame(animateTrails);
}

animateTrails();