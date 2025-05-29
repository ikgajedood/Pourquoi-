document.addEventListener("DOMContentLoaded", () => {
  function affichersnap() {
    const texte = document.getElementById("afficherbouton");
    texte.style.display = "block";
    setTimeout(() => {
      texte.style.display = "none";
    }, 3000);
  }

  function affichertiktok() {
    const texte = document.getElementById("afficherboutontiktok");
    texte.style.display = "block";
    setTimeout(() => {
      texte.style.display = "none";
    }, 3000);
  }

  window.affichersnap = affichersnap;
  window.affichertiktok = affichertiktok;

  const dateCible = new Date("2025-06-26T12:00:00").getTime();
  const countdownEl = document.getElementById("countdown");
  const texteSecret = document.getElementById("texteSecret");

  const interval = setInterval(() => {
    const maintenant = new Date().getTime();
    const diff = dateCible - maintenant;

    if (diff <= 0) {
      clearInterval(interval);
      countdownEl.style.display = "none";
      texteSecret.style.display = "block";
    } else {
      const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
      const heures = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secondes = Math.floor((diff % (1000 * 60)) / 1000);

      countdownEl.textContent = ` ${jours}j ${heures}h ${minutes}m ${secondes}s`;
    }
  }, 1000);
});


  const landing = document.getElementById("landing");
  const siteContent = document.getElementById("siteContent");
  const musique = document.getElementById("musique");
  const muteButton = document.getElementById("muteBtn");
  const volumeControl = document.getElementById("volumeControl");

  let musiqueLancee = false;

  landing.addEventListener("click", () => {
    landing.style.display = "none";
    siteContent.style.display = "block";
    musique.play().then(() => {
      musiqueLancee = true;
    }).catch((e) => {
      console.log("Erreur lors du démarrage de la musique :", e);
    });
  });

  function muteMusique() {
    if (!musiqueLancee) return;

    if (musique.paused) {
      musique.play().then(() => {
        muteButton.textContent = "🔇 Couper la musique";
      }).catch((e) => {
        console.log("Erreur lors de la relance de la musique :", e);
      });
    } else {
      musique.pause();
      muteButton.textContent = "🔊 Reprendre la musique";
    }
  }

  // Gestion du volume avec la barre
  volumeControl.addEventListener("input", () => {
    musique.volume = volumeControl.value;
  });