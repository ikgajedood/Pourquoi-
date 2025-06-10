const bouton = document.getElementById('boutonanim');

bouton.addEventListener('click', () => {
  for (let i = 0; i < 30; i++) {
    creerCoeur();
  }
});

function creerCoeur() {
  const coeur = document.createElement('div');
  coeur.classList.add('coeur');
  const posX = Math.random() * (window.innerWidth - 30);
  coeur.style.left = posX + 'px';
  coeur.style.animationDelay = (Math.random() * 3) + 's';
  document.body.appendChild(coeur);
  setTimeout(() => {
    coeur.remove();
  }, 30000);
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



const photos = [
  "images/file_000000001bc46246bc7ba6d28638c696.png",
  "images/leydxleyley1.png",
  "images/leydfe.jpg"
  // Ajoute ici le nom de tes images
];
let index = 0;
const img = document.getElementById('carousel-img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function showPhoto(i) {
  index = (i + photos.length) % photos.length;
  img.src = photos[index];
}

// Flèches
prev.onclick = () => showPhoto(index - 1);
next.onclick = () => showPhoto(index + 1);

// Défilement automatique toutes les 3 secondes
setInterval(() => showPhoto(index + 1), 3000);