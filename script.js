const bouton = document.getElementById('boutonanim');

bouton.addEventListener('click', () => {
  for (let i = 0; i < 20; i++) {
    creerCoeur();
  }
});

function creerCoeur() {
  const coeur = document.createElement('div');
  coeur.classList.add('coeur');
  const posX = Math.random() * (window.innerWidth - 30);
  coeur.style.left = posX + 'px';
  coeur.style.animationDelay = (Math.random() * 1) + 's';
  document.body.appendChild(coeur);
  setTimeout(() => {
    coeur.remove();
  }, 3000);
}

    // Date de début (modifie ici la date réelle de votre début)
    const dateDebut = new Date(2025, 2, 8, 17, 0, 0);

    function updateCompteur() {
      const maintenant = new Date();
      let diff = maintenant - dateDebut; // différence en millisecondes

      if (diff < 0) {
        document.getElementById('compteur').textContent = "La date de début est dans le futur !";
        return;
      }

      const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
      const heures = Math.floor((diff / (1000 * 60 * 60)) % 24);

      document.getElementById('compteur').textContent =
        jours + " jours et " + heures + " heures passés ensemble";
    }

    setInterval(updateCompteur, 1000 * 60 * 5); // mise à jour toutes les 5 minutes
    updateCompteur(); // mise à jour au chargements