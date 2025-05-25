function affichersnap() {
  const texte = document.getElementById("afficherbouton");
  texte.style.display = "block";

  // Cacher le texte après 3 secondes (3000 millisecondes)
  setTimeout(() => {
    texte.style.display = "none";
  }, 3000);
}

function affichertiktok() {
  const texte = document.getElementById("afficherboutontiktok");
  texte.style.display = "block";

  // Cacher le texte après 3 secondes (3000 millisecondes)
  setTimeout(() => {
    texte.style.display = "none";
  }, 3000);
}
