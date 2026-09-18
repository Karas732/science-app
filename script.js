document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  const heroSection = document.querySelector('.herosection');
  const title = document.querySelector('.herosection h1');
  const subtitle = document.querySelector('.herosection p');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('is-active'));
      button.classList.add('is-active');

      const targetName = button.textContent.trim().toLowerCase();
      const targets = {
        home: heroSection,
        about: document.querySelector('footer'),
        services: document.querySelector('footer'),
        contact: document.querySelector('footer')
      };

      const target = targets[targetName];
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  if (heroSection && title && subtitle) {
    heroSection.addEventListener('pointermove', (event) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      title.style.transform = `translate(${x * 18}px, ${y * 18}px)`;
      subtitle.style.transform = `translate(${x * 12}px, ${y * 12}px)`;
    });

    heroSection.addEventListener('pointerleave', () => {
      title.style.transform = 'translate(0, 0)';
      subtitle.style.transform = 'translate(0, 0)';
    });
  }

  document.body.classList.add('is-ready');
});
