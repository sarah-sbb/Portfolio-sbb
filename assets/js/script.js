  /* COMPETENCES */
  // Charger les compétences depuis le fichier JSON
  fetch('/assets/data/skills.json')
    .then((response) => response.json())
    .then((data) => {
      const skillsList = document.getElementById('skills-list'); // Cible l'élément <ul>
      data.skills.forEach((skill) => {
        const listItem = document.createElement('li'); // Crée un <li>
        const img = document.createElement('img'); // Crée une balise <img>
        img.src = skill.image; // Chemin de l'image
        img.alt = skill.name; // Texte alternatif
        listItem.appendChild(img); // Ajoute l'image au <li>
        skillsList.appendChild(listItem); // Ajoute le <li> à la liste <ul>
      });
    })
    .catch((error) => console.error('Erreur lors du chargement des compétences :', error));

/* FORMATIONS */
fetch('/assets/data/formations.json')
  .then((response) => response.json())
  .then((data) => {
    const formationsList = document.getElementById('formations-list'); // Cible l'élément <ul>

    data.formations.forEach((formation) => {
      const listItem = document.createElement('li'); // Crée un <li>

      // Crée les éléments
      const title = document.createElement('h3'); // <h3>
      const date = document.createElement('span'); // <span>
      const description = document.createElement('p'); // <p>
      const level = document.createElement('span'); // <span>

      // Ajoute les classes si nécessaire
      date.classList.add('date'); // Ajoute une classe "date"
      level.classList.add('level'); // Ajoute une classe "level"

      // Ajoute les contenus
      title.textContent = formation.name; // Nom de la formation
      date.textContent = formation.date; // Date
      description.textContent = formation.description; // Description
      level.textContent = formation.level; // Niveau

      // Assemble les éléments dans le <li>
      listItem.appendChild(title);
      listItem.appendChild(date);
      listItem.appendChild(description);
      listItem.appendChild(level);

      // Ajoute le <li> à la liste <ul>
      formationsList.appendChild(listItem);
    });
  })
  .catch((error) =>
    console.error('Erreur lors du chargement des formations :', error)
  );