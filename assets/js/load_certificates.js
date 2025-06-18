// Load and render certificate and badge images from JSON

fetch("data/certificates.json")
  .then(res => res.json())
  .then(data => {
    const certGrid = document.getElementById("certificates-grid");
    const badgeGrid = document.getElementById("badges-grid");

    const createCard = (item) => {
      const card = document.createElement("div");
      card.className = "cert-card";

      const img = document.createElement("img");
      img.src = `assets/certificates/${item.file}`;
      img.alt = item.description || item.file;
      img.loading = "lazy";
      img.onclick = () => window.open(img.src, '_blank');

      const desc = document.createElement("div");
      desc.className = "cert-description";
      desc.textContent = item.description || "";

      card.appendChild(img);
      card.appendChild(desc);
      return card;
    };

    data.certificates.forEach(cert => certGrid.appendChild(createCard(cert)));
    data.badges.forEach(badge => badgeGrid.appendChild(createCard(badge)));
  })
  .catch(err => console.error("❌ Failed to load certificates:", err));
