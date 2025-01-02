const canvas = document.getElementById('trailing-line');
const ctx = canvas.getContext('2d');

// Configurar tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Actualizar tamaño del canvas si cambia el tamaño de la ventana
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let mouseX = 0;
let mouseY = 0;
let prevX = 0;
let prevY = 0;

document.addEventListener('mousemove', (event) => {
    // Guardar las posiciones anteriores
    prevX = mouseX;
    prevY = mouseY;

    // Actualizar las posiciones actuales
    mouseX = event.clientX;
    mouseY = event.clientY;

    // Dibujar la línea
    drawLine(prevX, prevY, mouseX, mouseY);
});

function drawLine(x1, y1, x2, y2) {
    ctx.strokeStyle = '#00ffff'; // Color azul eléctrico
    ctx.lineWidth = 2; // Grosor de la línea
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// Crear un efecto de desvanecimiento para que el rastro desaparezca con el tiempo
function fadeCanvas() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Fondo semitransparente
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(fadeCanvas);
}
fadeCanvas();