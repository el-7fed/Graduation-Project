/**
 * Go Egypt Tour - Render Places
 * Handles rendering place cards from JSON data
 */

// Global places data
let placesData = [];

document.addEventListener("DOMContentLoaded", function () {
  loadPlaces();
});

/**
 * Load places from JSON file
 */
async function loadPlaces() {
  try {
    const response = await fetch("assets/data/places.json");
    if (!response.ok) {
      throw new Error("Failed to load places data");
    }
    placesData = await response.json();

    // Check which page we're on and render accordingly
    const featuredContainer = document.getElementById("featured-places");
    const placesContainer = document.getElementById("places-grid");

    if (featuredContainer) {
      renderFeaturedPlaces(featuredContainer);
    }

    if (placesContainer) {
      // Check for category filter in URL
      const categoryParam = GoEgypt.getUrlParam("category");
      if (categoryParam) {
        document.getElementById("category-filter").value = categoryParam;
        filterAndRenderPlaces();
      } else {
        renderPlaces(placesContainer, placesData);
      }
      updateResultsCount(placesData.length);
    }
  } catch (error) {
    console.error("Error loading places:", error);
    // Show error or fallback content
    const container =
      document.getElementById("places-grid") ||
      document.getElementById("featured-places");
    if (container) {
      container.innerHTML =
        '<p class="text-center">Unable to load places. Please try again later.</p>';
    }
  }
}

/**
 * Render featured places (top 6)
 */
function renderFeaturedPlaces(container) {
  const featured = placesData.slice(0, 6);
  renderPlaces(container, featured);
}

/**
 * Render place cards
 */
function renderPlaces(container, places) {
  container.innerHTML = "";

  if (places.length === 0) {
    document
      .getElementById("no-results")
      ?.style.setProperty("display", "block");
    return;
  }

  document.getElementById("no-results")?.style.setProperty("display", "none");

  places.forEach((place, index) => {
    const card = createPlaceCard(place);
    card.style.animationDelay = `${index * 0.1}s`;
    container.appendChild(card);
  });
}

/**
 * Create a place card element
 */
function createPlaceCard(place) {
  const card = document.createElement("article");
  card.classList.add("place-card", "fade-in");

  const imageSrc =
    place.images && place.images.length > 0
      ? `assets/images/${place.images[0]}`
      : "assets/images/placeholder.jpg";

  const rating =
    place.reviews && place.reviews.length > 0
      ? (
          place.reviews.reduce((sum, r) => sum + r.rating, 0) /
          place.reviews.length
        ).toFixed(1)
      : "4.5";

  card.innerHTML = `
        <div class="place-card-image">
            <img src="${imageSrc}" alt="${
    place.name
  }" onerror="this.src='assets/images/placeholder.jpg'">
            <span class="place-card-category">${place.category}</span>
        </div>
        <div class="place-card-content">
            <h3 class="place-card-title">${place.name}</h3>
            <p class="place-card-location">📍 ${place.location}</p>
            <p class="place-card-description">${GoEgypt.truncateText(
              place.description,
              100
            )}</p>
            <div class="place-card-footer">
                <span class="place-card-rating">⭐ ${rating}</span>
                <a href="place-details.html?id=${
                  place.id
                }" class="btn btn-primary">View Details</a>
            </div>
        </div>
    `;

  return card;
}

/**
 * Filter and render places based on current filters
 */
function filterAndRenderPlaces() {
  const searchTerm =
    document.getElementById("search-input")?.value.toLowerCase() || "";
  const categoryFilter =
    document.getElementById("category-filter")?.value || "all";
  const locationFilter =
    document.getElementById("location-filter")?.value || "all";

  let filtered = placesData.filter((place) => {
    // Search in both Arabic and English names
    const nameMatch =
      place.name.toLowerCase().includes(searchTerm) ||
      (place.nameEn && place.nameEn.toLowerCase().includes(searchTerm));
    const descMatch = place.description.toLowerCase().includes(searchTerm);
    const locationMatch =
      place.location.toLowerCase().includes(searchTerm) ||
      (place.locationEn && place.locationEn.toLowerCase().includes(searchTerm));

    const matchesSearch = nameMatch || descMatch || locationMatch;
    const matchesCategory =
      categoryFilter === "all" ||
      place.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesLocation =
      locationFilter === "all" ||
      place.location.toLowerCase().includes(locationFilter.toLowerCase()) ||
      (place.locationEn &&
        place.locationEn.toLowerCase().includes(locationFilter.toLowerCase()));

    return matchesSearch && matchesCategory && matchesLocation;
  });

  const container = document.getElementById("places-grid");
  if (container) {
    renderPlaces(container, filtered);
    updateResultsCount(filtered.length);
  }
}

/**
 * Update results count display
 */
function updateResultsCount(count) {
  const resultsInfo = document.getElementById("results-count");
  if (resultsInfo) {
    resultsInfo.textContent = `Showing ${count} place${count !== 1 ? "s" : ""}`;
  }
}

/**
 * Get place by ID
 */
function getPlaceById(id) {
  return placesData.find((place) => place.id === parseInt(id));
}

// Export functions
window.placesData = placesData;
window.filterAndRenderPlaces = filterAndRenderPlaces;
window.getPlaceById = getPlaceById;
window.loadPlaces = loadPlaces;
