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