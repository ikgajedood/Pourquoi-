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

  const dateCible = new Date("2025-11-26T12:00:00").getTime();
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
