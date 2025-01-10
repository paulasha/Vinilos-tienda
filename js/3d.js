

// circle movement
document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Select all the image elements
    const images = document.querySelectorAll('.artistas img');

    images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const imgCenterX = rect.left + rect.width / 2;
        const imgCenterY = rect.top + rect.height / 2;

        // Calculate the distance between the mouse and the center of the image
        const deltaX = mouseX - imgCenterX;
        const deltaY = mouseY - imgCenterY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        // Move the image slightly away if the mouse is close
        if (distance < 150) { // Threshold distance for effect
            const moveX = (deltaX / distance) * 10; // Scaled movement
            const moveY = (deltaY / distance) * 10;

            // Apply the transform
            img.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            // Reset the position when the mouse moves away
            img.style.transform = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });
  
    // Record click event to extend the section
    const records = document.querySelectorAll('.record');
    records.forEach((record) => {
      record.addEventListener('click', () => {
        // Toggle 'active' class
        record.classList.toggle('active');
  
        // Ensure only one record is active at a time
        records.forEach((otherRecord) => {
          if (otherRecord !== record) {
            otherRecord.classList.remove('active');
          }
        });
      });
    });
  });


  
  
  document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const equalizer = document.getElementById('equalizer');
    const music = document.getElementById('music');
  
    // Función para reproducir música
    playBtn.addEventListener('click', () => {
      music.play();
      playBtn.style.display = 'none';
      pauseBtn.style.display = 'inline-block';
      equalizer.style.display = 'flex'; // Mostrar ecualizador
    });
  
    // Función para pausar música
    pauseBtn.addEventListener('click', () => {
      music.pause();
      playBtn.style.display = 'inline-block';
      pauseBtn.style.display = 'none';
      equalizer.style.display = 'none'; // Ocultar ecualizador
    });
  
    // Reiniciar la interfaz cuando la música termina
    music.addEventListener('ended', () => {
      playBtn.style.display = 'inline-block';
      pauseBtn.style.display = 'none';
      equalizer.style.display = 'none';
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");
    const musicSection = document.getElementById("music-section");
    const genreText = document.getElementById("genre-text");
    const vinyl = document.getElementById("vinyl");
    const audio = new Audio();
  
    circles.forEach((circle) => {
      circle.addEventListener("click", () => {
        const newColor = circle.getAttribute("data-color");
        const newGenre = circle.getAttribute("data-genre");
        const newSong = circle.getAttribute("data-song");
  
        // Cambia el fondo
        musicSection.style.backgroundColor = newColor;
  
        // Cambia el texto
        genreText.textContent = newGenre;
  
        // Cambia la canción
        audio.src = `music/${newSong}`;
        audio.play();
      });
    });
  
    // Controles para las flechas
    document.getElementById("prev").addEventListener("click", () => {
      const activeIndex = Array.from(circles).findIndex(
        (circle) => circle.getAttribute("data-genre") === genreText.textContent
      );
      const prevIndex = (activeIndex - 1 + circles.length) % circles.length;
      circles[prevIndex].click();
    });
  
    document.getElementById("next").addEventListener("click", () => {
      const activeIndex = Array.from(circles).findIndex(
        (circle) => circle.getAttribute("data-genre") === genreText.textContent
      );
      const nextIndex = (activeIndex + 1) % circles.length;
      circles[nextIndex].click();
    });
  });
  
  
  const modelViewerColor = document.querySelector("model-viewer#color");
  
  document.querySelector('#color-controls').addEventListener('click', (event) => {
    const colorString = event.target.dataset.color;
    const [material] = modelViewerColor.model.materials;
    material.pbrMetallicRoughness.setBaseColorFactor(colorString);
  });
  document.querySelectorAll('.circle').forEach(circle => {
      const color = circle.getAttribute('data-color'); // Leer el atributo data-color
      circle.style.backgroundColor = color; // Aplicar el color al fondo del círculo
    });
  