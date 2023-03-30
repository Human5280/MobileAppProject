fetch('walkingtracks.json')
  .then(response => response.json())
  .then(data => {
    // Display the walking paths information
  });
  const pathsContainer = document.getElementById('walkingtracks');
data.paths.forEach(path => {
  const pathElement = document.createElement('div');
  pathElement.innerHTML = `
    <h2>${path.Title_en}</h2>
    <p><strong>Distance:</strong> ${path.Route_en}</p>
  `;
  pathsContainer.appendChild(pathElement);
});