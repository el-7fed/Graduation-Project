/**
 * Go Egypt Tour - Search & Filter
 * Handles search and filtering functionality
 */

document.addEventListener("DOMContentLoaded", function () {
  initSearch();
  initFilters();
});

/**
 * Initialize search functionality
 */
function initSearch() {
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.querySelector(".search-btn");

  if (!searchInput) return;

  // Debounce function
  let debounceTimeout;
  function debounce(func, delay) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(func, delay);
  }

  // Live search with debounce
  searchInput.addEventListener("input", function () {
    debounce(filterAndRenderPlaces, 300);
  });

  // Search button click
  if (searchBtn) {
    searchBtn.addEventListener("click", filterAndRenderPlaces);
  }

  // Enter key to search
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      filterAndRenderPlaces();
    }
  });
}

/**
 * Initialize filter dropdowns
 */
function initFilters() {
  const categoryFilter = document.getElementById("category-filter");
  const locationFilter = document.getElementById("location-filter");

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterAndRenderPlaces);
  }

  if (locationFilter) {
    locationFilter.addEventListener("change", filterAndRenderPlaces);
  }
}

/**
 * Clear all filters
 */
function clearFilters() {
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const locationFilter = document.getElementById("location-filter");

  if (searchInput) searchInput.value = "";
  if (categoryFilter) categoryFilter.value = "all";
  if (locationFilter) locationFilter.value = "all";

  filterAndRenderPlaces();
}

// Export functions
window.clearFilters = clearFilters;
