// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Hero Background Slider
const hero = document.querySelector(".hero");

const images = [
  "assets/bg1.jpg",
  "assets/bg3.jpg",
  "assets/bg2.jpg",
  "assets/bg4.jpg",
  "assets/bg1.jpg",
];

let current = 0;

function changeBackground() {
  hero.style.backgroundImage = `url('${images[current]}')`;
  current = (current + 1) % images.length;
}

changeBackground(); // Initial load
setInterval(changeBackground, 5000); // Every 5 seconds


  const readMoreBtn = document.getElementById('readMoreBtn');
  const extraList = document.querySelector('.extra-list');

  readMoreBtn.addEventListener('click', () => {
    if (extraList.classList.contains('hidden')) {
      extraList.classList.remove('hidden');
      readMoreBtn.textContent = 'Show Less';
    } else {
      extraList.classList.add('hidden');
      readMoreBtn.textContent = 'Read More';
      // Scroll back to the top of the about section when collapsed
      document.getElementById('about').scrollIntoView({behavior: 'smooth'});
    }
  });

// Light Box

  const triggers = document.querySelectorAll('.lightbox-trigger');
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-image');
  const closeBtn = document.querySelector('.close-lightbox');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault();
      const fullImg = trigger.getAttribute('data-full');
      modalImg.src = fullImg;
      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });


  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    scrollToTopBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
  };

  scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  window.addEventListener("load", function () {
    const loaderWrapper = document.getElementById("loader-wrapper");
    loaderWrapper.style.transition = "opacity 0.5s ease";
    loaderWrapper.style.opacity = "0";
    setTimeout(() => loaderWrapper.style.display = "none", 500);
  });

