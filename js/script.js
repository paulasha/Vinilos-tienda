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