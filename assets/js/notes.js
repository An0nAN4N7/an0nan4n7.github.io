fetch('data/notes.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('notes-container');

    if (data.length === 0) {
      container.innerHTML = "<p>No notes available yet.</p>";
      return;
    }

    const ul = document.createElement('ul');
    ul.classList.add('notes-list');

    data.forEach(note => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${note.url}" target="_blank" download>
          📄 ${note.name}
        </a>
      `;
      ul.appendChild(li);
    });

    container.appendChild(ul);
  })
  .catch(error => {
    console.error("Error loading notes:", error);
    document.getElementById('notes-container').innerHTML = "<p>Error loading notes.</p>";
  });
