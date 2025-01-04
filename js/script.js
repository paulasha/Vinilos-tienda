
  // Locomotive Scroll Initialization
  //const scroll = new LocomotiveScroll({
    //el: document.querySelector('[data-scroll-container]'),
   // smooth: true
  //});

  
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



 

  const colorCircles = document.querySelectorAll('.color-circle');
  const carouselSection = document.getElementById('carousel-section');
  const audio = new Audio();

  colorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
      // Cambiar color de fondo
      const color = circle.getAttribute('data-color');
      carouselSection.style.backgroundColor = color;

      // Cambiar música
      const music = circle.getAttribute('data-music');
      audio.src = music;
      audio.play();
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
      audio.src = `path/to/songs/${newSong}`;
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
