// botón flecha 
function playAnimation() {
    $('#flecha').attr('src', 'MEDIA/EXTRA/flecha.gif').css('filter', 'sepia(41%) brightness(64%) hue-rotate(23deg) saturate(84%)');
  }
  
  function showStatic() {
    $('#flecha').attr('src', 'MEDIA/EXTRA/flecha-estatica.jpg').css('filter', 'none');
  }