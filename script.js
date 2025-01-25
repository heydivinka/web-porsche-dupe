document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.scroll-animation');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Hentikan pengamatan setelah terlihat
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
// active link

// Pilih semua link di navbar
const links = document.querySelectorAll('nav ul li a');

// Fungsi untuk menyorot link aktif berdasarkan posisi scroll
function highlightLink() {
    let scrollPosition = window.scrollY;

    links.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        
        // Periksa apakah bagian ini terlihat di viewport
        if (
            section.offsetTop <= scrollPosition + 100 &&
            section.offsetTop + section.offsetHeight > scrollPosition + 100
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Tambahkan event listener saat pengguna menggulir
document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");
    const images = [
        '/2022-Porsche-911-GT3-007-1080.jpg',
        '/2023-Porsche-Vision-357-Concept-003-1080.jpg',
        '/2025-Porsche-Macan-Turbo-006-1080.jpg',
        '/2025-Porsche-Taycan-Turbo-GT-001-1080.jpg'
    ];
    let index = 0;

    // Set initial background image and transition properties
    aboutSection.style.backgroundImage = `url(${images[index]})`;
    aboutSection.style.transition = "background-size 10s ease"; // Smooth transition for zoom effect

    const changeBackground = () => {
        // Start zoom effect
        aboutSection.style.backgroundSize = "110%"; // Slowly zoom in

        setTimeout(() => {
            // Switch image after zoom completes
            index = (index + 1) % images.length; // Cycle through the array
            aboutSection.style.backgroundImage = `url(${images[index]})`;
            aboutSection.style.backgroundSize = "100%"; // Reset size
        }, 10000); // Zoom effect duration matches CSS transition
    };

    // Change background every 10 seconds
    setInterval(changeBackground, 10000);

    // Ensure image is fully loaded before applying zoom
    const img = new Image();
    img.src = images[index];
    img.onload = function() {
        // Set initial zoomed background after the image is loaded
        aboutSection.style.backgroundSize = "100%"; 
    };
});
