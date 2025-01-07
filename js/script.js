// botón flecha 
function playAnimation() {
  $('#flecha').attr('src', 'MEDIA/EXTRA/flecha.gif').css('filter', 'sepia(41%) brightness(64%) hue-rotate(23deg) saturate(84%)');
}

function showStatic() {
  $('#flecha').attr('src', 'MEDIA/EXTRA/flecha-estatica.jpg').css('filter', 'none');
}

// menu que se encoge y redondea al hacer scroll

const menu = document.getElementById("menu");
const navbarCollapse = document.getElementById("navbarNav");

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;

  menu.style.borderRadius = scrollY === 0 ? '0' : '900px';

  if (scrollY > 50) { 
      menu.classList.add('scrolled');
  } else {
      menu.classList.remove('scrolled');
  }
});

navbarCollapse.addEventListener('show.bs.collapse', function () {
  menu.style.borderRadius = "30px";
});

navbarCollapse.addEventListener('hide.bs.collapse', function () {
  menu.style.borderRadius = "900px";
});


// scroll indicator
$(window).scroll(function () {
scrollIndicator();
});

function scrollIndicator() {
var winScroll = $(document).scrollTop();
var height = $(document).height() - $(window).height();
var scrolled = (winScroll / height) * 100;
$("#bar").width(scrolled + "%");
}


// menu movil
const menuItems = document.querySelectorAll('.navbar-nav .nav-item');

menuItems.forEach(item => {
item.addEventListener('click', () => {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  navbarCollapse.classList.remove('show');
});
});

// marquee
document.addEventListener("DOMContentLoaded", () => {
  const marquee = document.getElementById("marquee-title");

  // Optional: Adjust speed dynamically based on content length
  const textLength = marquee.innerText.length;
  const speed = Math.max(10, textLength / 2); // Longer text scrolls slower
  marquee.style.animationDuration = `${speed}s`;
});


 // Scroll text animation using Intersection Observer
 const scrollText = document.getElementById("scroll-text");
  
 const observer = new IntersectionObserver(
   (entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         scrollText.classList.add("in-view");
         scrollText.classList.remove("out-of-view");
       } else {
         scrollText.classList.remove("in-view");
         scrollText.classList.add("out-of-view");
       }
     });
   },
   { threshold: 0.5 } // Trigger when 50% of the element is in view
 );

 observer.observe(scrollText);


 document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".square");
  const expandedSquares = document.querySelectorAll(".expanded-square");
  const closeButtons = document.querySelectorAll(".close-btn");

  // Show the corresponding expanded view
  squares.forEach((square) => {
    square.addEventListener("click", () => {
      const id = square.dataset.id;
      const expandedSquare = document.getElementById(`expanded-${id}`);

      // Hide all other expanded squares first
      expandedSquares.forEach((exp) => exp.classList.remove("active"));

      // Show the correct expanded square
      expandedSquare.classList.add("active");
    });
  });

  // Close the expanded view
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      expandedSquares.forEach((exp) => exp.classList.remove("active"));
    });
  });
});

// circle movement
document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Select all the image elements
  const images = document.querySelectorAll('.black-section img');

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


// Carousel Logic
const carousels = document.querySelectorAll(".image-carousel");

carousels.forEach((carousel) => {
  const imagesContainer = carousel.querySelector(".carousel-images");
  const images = imagesContainer.querySelectorAll("img");
  const leftArrow = carousel.querySelector(".left-arrow");
  const rightArrow = carousel.querySelector(".right-arrow");

  let currentIndex = 0;
  const totalImages = images.length;

  const updateCarousel = () => {
    const offset = -currentIndex * 100; // Each image takes 100% of the container's width
    imagesContainer.style.transform = `translateX(${offset}%)`;
  };

  const moveNext = () => {
    currentIndex = (currentIndex + 1) % totalImages; // Wrap around to the first image
    updateCarousel();
  };

  const movePrevious = () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Wrap around to the last image
    updateCarousel();
  };

  let autoSlideInterval = setInterval(moveNext, 6000); // Auto-slide every 5 seconds

  // Arrow click events
  leftArrow.addEventListener("click", () => {
    movePrevious();
    resetAutoSlide();
  });

  rightArrow.addEventListener("click", () => {
    moveNext();
    resetAutoSlide();
  });

  // Mouse slide functionality
  let startX = 0;
  let isDragging = false;

  imagesContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
  });

  imagesContainer.addEventListener("mouseup", (e) => {
    isDragging = false;
    const diff = e.clientX - startX;
    if (diff > 50) movePrevious(); // Slide right
    if (diff < -50) moveNext(); // Slide left
    resetAutoSlide();
  });

  // Reset auto-slide timer
  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(moveNext, 6000);
  };
});

// ----------------------------------


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


