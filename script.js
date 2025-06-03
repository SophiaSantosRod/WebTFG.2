const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const form = document.getElementById('form-contacto');
const response = document.getElementById('form-response');
form.addEventListener('submit', e => {
  e.preventDefault();
  response.textContent = '¡Gracias, tu mensaje ha sido enviado!';
  form.reset();
});

 document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.feature').forEach(feature => {
      const thumbnails = feature.querySelectorAll('.thumb');
      const mainBox = feature.querySelector('.imagen');

      function loadMainContent(type, src, posterUrl = '') {
        mainBox.innerHTML = '';

        if (type === 'video') {
          const video = document.createElement('video');
          video.src = src;
          video.muted = true;
          video.loop = true;
          video.playsInline = true;
          video.preload = 'metadata';
          if (posterUrl) video.poster = posterUrl;
          mainBox.appendChild(video);
        } else {
          const img = document.createElement('img');
          img.src = src;
          mainBox.appendChild(img);
        }
      }

      thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
          const type = thumb.getAttribute('data-type');
          let src = thumb.getAttribute('data-src');
          let posterUrl = '';

          if (type === 'video') {
            const vidThumb = thumb.querySelector('video');
            if (vidThumb) {
              posterUrl = vidThumb.getAttribute('poster') || '';
            }
          }

          loadMainContent(type, src, posterUrl);
          mainBox.setAttribute('data-current-type', type);
        });
      });

      if (thumbnails.length > 0) {
        thumbnails[0].click();
      }

      mainBox.addEventListener('mouseenter', () => {
        const vid = mainBox.querySelector('video');
        if (vid) vid.play().catch(() => {});
      });
      mainBox.addEventListener('mouseleave', () => {
        const vid = mainBox.querySelector('video');
        if (vid) vid.pause();
      });
    });
  });





