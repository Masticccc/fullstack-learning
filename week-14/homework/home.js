// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function () {
  // Define the API endpoint for fetching top anime
  const apiEndpoint = 'https://api.jikan.moe/v4/top/anime';
  // Select the container where the anime list will be displayed
  const listContainer = document.querySelector('[data-component="list"]');
  // Select the loader element to show when data is being fetched
  const loader = document.querySelector('[data-component="loader"]');
  // Select the pagination dropdown for selecting pages
  const paginationSelect = document.querySelector(
    '[data-component="pagination:select"]'
  );
  // Select the previous button for pagination
  const previousButton = document.querySelector(
    '[data-component="pagination:previous"]'
  );
  // Select the next button for pagination
  const nextButton = document.querySelector(
    '[data-component="pagination:next"]'
  );

  // Initialize the current page number and total pages
  let currentPage = 1;
  let totalPages = 1;

  // Function to fetch anime data from the API for a specific page
  async function fetchAnime(page = 1) {
    // Show the loader while fetching data
    loader.classList.remove('d-none');
    // Clear the current list of anime
    listContainer.innerHTML = '';

    try {
      // Fetch data from the API
      const response = await fetch(`${apiEndpoint}?page=${page}`);
      // Parse the JSON response
      const data = await response.json();
      // Display the fetched anime data
      displayAnime(data.data);
      // Update the total number of pages based on the response
      totalPages = data.pagination.last_visible_page;
      // Update pagination controls
      updatePagination();
    } catch (error) {
      // Log any errors to the console
      console.error('Failed to fetch anime data:', error);
      // Display an error message in the list container
      listContainer.innerHTML =
        "<p class='text-danger'>Failed to load data. Please try again later.</p>";
    } finally {
      // Hide the loader after fetching data
      loader.classList.add('d-none');
    }
  }

  // Function to display the list of anime in the DOM
  function displayAnime(animeList) {
    // Create HTML for each anime item and insert into the list container
    listContainer.innerHTML = animeList
      .map(
        (anime, index) => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="position-relative">
            <img src="${
              anime.images.jpg.image_url
            }" class="card-img-top" alt="${anime.title}">
            <div class="position-absolute top-0 end-0 m-2 bg-white text-dark rounded-pill">${
              anime.score
            }</div>
            <div class="card-body text-center"> <!-- Center the text -->
              <h5 class="card-title">${anime.title}</h5>
            </div>
          </div>
        </div>
        ${index % 4 === 3 ? '<div class="w-100"></div>' : ''}`
      )
      .join(''); // Join all HTML strings into one
  }

  // Function to update pagination controls
  function updatePagination() {
    // Clear current pagination options
    paginationSelect.innerHTML = '';
    // Create and append an option for each page
    for (let i = 1; i <= totalPages; i++) {
      paginationSelect.innerHTML += `<option value="${i}"${
        i === currentPage ? ' selected' : ''
      }>${i}</option>`;
    }
    // Enable or disable previous button based on current page
    previousButton.disabled = currentPage === 1;
    // Enable or disable next button based on current page
    nextButton.disabled = currentPage === totalPages;
  }

  // Event listener for pagination select dropdown change
  paginationSelect.addEventListener('change', function () {
    // Update current page based on selected value
    currentPage = Number(this.value);
    // Fetch and display anime for the new page
    fetchAnime(currentPage);
  });

  // Event listener for previous button click
  previousButton.addEventListener('click', function () {
    if (currentPage > 1) {
      // Decrease current page number
      currentPage--;
      // Fetch and display anime for the new page
      fetchAnime(currentPage);
    }
  });

  // Event listener for next button click
  nextButton.addEventListener('click', function () {
    if (currentPage < totalPages) {
      // Increase current page number
      currentPage++;
      // Fetch and display anime for the new page
      fetchAnime(currentPage);
    }
  });

  // Initial fetch to display the first page of results
  fetchAnime();
});
