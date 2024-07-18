document.addEventListener('DOMContentLoaded', function () {
  // Fetch data from the API
  fetch('https://api.jikan.moe/v4/top/anime')
    .then((response) => response.json())
    .then((data) => {
      // Get the list of anime from the API response
      const animeList = data.data;

      // Get the container where the anime list will be displayed
      const animeListContainer = document.getElementById('animeList');

      // Clear any existing content in the anime list container
      animeListContainer.innerHTML = '';

      // Loop through the anime list and create HTML elements for each anime
      animeList.forEach((anime) => {
        // Create a div element for each anime
        const animeDiv = document.createElement('div');
        animeDiv.classList.add('col-md-3', 'mb-3');

        // Create a button element for "More info"
        const moreInfoButton = document.createElement('button');
        moreInfoButton.textContent = 'More info';
        moreInfoButton.classList.add('btn', 'btn-primary', 'btn-sm');
        moreInfoButton.dataset.animeId = anime.id; // Store anime ID as dataset attribute

        // Add click event listener to the "More info" button
        moreInfoButton.addEventListener('click', function () {
          // Redirect to details.html with the anime's ID as query parameter
          window.location.href = `details.html?id=${anime.id}`;
        });

        // Create an image element for the anime poster
        const animeImage = document.createElement('img');
        animeImage.src = anime.attributes.posterImage.original;
        animeImage.alt = anime.attributes.titles.en;
        animeImage.classList.add('img-fluid', 'rounded');

        // Create a paragraph element for the anime name
        const animeName = document.createElement('p');
        animeName.textContent = anime.attributes.titles.en;

        // Append the image and name elements to the anime div
        animeDiv.appendChild(animeImage);
        animeDiv.appendChild(animeName);

        // Append the "More info" button to the anime div
        animeDiv.appendChild(moreInfoButton);

        // Append the anime div to the anime list container
        animeListContainer.appendChild(animeDiv);
      });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
});
