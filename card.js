    // Aparecer cards com animação ao rolar a página
    function revealCards() {
      const cards = document.querySelectorAll('.card');
      const windowBottom = window.innerHeight;

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowBottom - 100) {
          card.classList.add('visible');
        }
      });
    }

    window.addEventListener('scroll', revealCards);
    window.addEventListener('load', revealCards);