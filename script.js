// Piccolo script per aggiungere un effetto di hover sulle immagini della galleria
const images = document.querySelectorAll('.image-gallery img');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});
