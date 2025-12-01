/**
 * Go Egypt Tour - Place Details
 * Handles loading and displaying individual place details
 */

document.addEventListener("DOMContentLoaded", function () {
  loadPlaceDetails();
});

/**
 * Load place details from JSON
 */
async function loadPlaceDetails() {
  const loadingState = document.getElementById("loading-state");
  const errorState = document.getElementById("error-state");
  const placeContent = document.getElementById("place-content");

  // Get place ID from URL
  const placeId = GoEgypt.getUrlParam("id");

  if (!placeId) {
    showError();
    return;
  }

  try {
    const response = await fetch("assets/data/places.json");
    if (!response.ok) {
      throw new Error("Failed to load places data");
    }

    const places = await response.json();
    const place = places.find((p) => p.id === parseInt(placeId));

    if (!place) {
      showError();
      return;
    }

    // Hide loading, show content
    if (loadingState) loadingState.style.display = "none";
    if (placeContent) placeContent.style.display = "block";

    // Render place details
    renderPlaceDetails(place);

    // Update page title
    document.title = `${place.name} - Go Egypt Tour`;
  } catch (error) {
    console.error("Error loading place details:", error);
    showError();
  }
}

/**
 * Show error state
 */
function showError() {
  const loadingState = document.getElementById("loading-state");
  const errorState = document.getElementById("error-state");

  if (loadingState) loadingState.style.display = "none";
  if (errorState) errorState.style.display = "flex";
}

/**
 * Render place details to the page
 */
function renderPlaceDetails(place) {
  // Initialize gallery slider
  if (place.images && place.images.length > 0) {
    initGallerySlider(place.images);
    initGalleryGrid(place.images);
  }

  // Category
  const categoryEl = document.getElementById("place-category");
  if (categoryEl) categoryEl.textContent = place.category;

  // Title
  const titleEl = document.getElementById("place-title");
  if (titleEl) titleEl.textContent = place.name;

  // Location
  const locationEl = document.getElementById("place-location");
  if (locationEl) {
    const span = locationEl.querySelector("span");
    if (span) span.textContent = place.location;
  }

  // Description
  const descriptionEl = document.getElementById("place-description");
  if (descriptionEl) {
    descriptionEl.textContent = place.longDescription || place.description;
  }

  // Heritage Story
  const heritageEl = document.getElementById("place-heritage");
  if (heritageEl) {
    heritageEl.innerHTML = `<p>${
      place.heritageStory ||
      "[PLACEHOLDER: Heritage story content will be added here]"
    }</p>`;
  }

  // Opening Hours
  const hoursEl = document.getElementById("opening-hours");
  if (hoursEl) hoursEl.textContent = place.openingHours || "[PLACEHOLDER]";

  // Ticket Price
  const priceEl = document.getElementById("ticket-price");
  if (priceEl) priceEl.textContent = place.ticketPrice || "[PLACEHOLDER]";

  // Sidebar Location
  const sidebarLocationEl = document.getElementById("sidebar-location");
  if (sidebarLocationEl) sidebarLocationEl.textContent = place.location;

  // Full Address
  if (place.address) {
    const addressCard = document.getElementById("address-card");
    const fullAddressEl = document.getElementById("full-address");
    if (addressCard && fullAddressEl) {
      addressCard.style.display = "block";
      fullAddressEl.textContent = place.address;
    }
  }

  // Highlights
  if (place.highlights && place.highlights.length > 0) {
    const highlightsSection = document.getElementById("highlights-section");
    const highlightsList = document.getElementById("highlights-list");
    if (highlightsSection && highlightsList) {
      highlightsSection.style.display = "block";
      highlightsList.innerHTML = place.highlights
        .map((highlight) => `<li>💎 ${highlight}</li>`)
        .join("");
    }
  }

  // Important Notes
  if (place.importantNotes && place.importantNotes.length > 0) {
    const notesSection = document.getElementById("notes-section");
    const notesList = document.getElementById("notes-list");
    if (notesSection && notesList) {
      notesSection.style.display = "block";
      notesList.innerHTML = place.importantNotes
        .map((note) => `<li>📌 ${note}</li>`)
        .join("");
    }
  }

  // Nearby Activities
  const activitiesEl = document.getElementById("nearby-activities");
  if (activitiesEl) {
    const activities = place.nearbyActivities || [
      "[PLACEHOLDER: Nearby activity 1]",
      "[PLACEHOLDER: Nearby activity 2]",
      "[PLACEHOLDER: Nearby activity 3]",
    ];

    activitiesEl.innerHTML = activities
      .map((activity) => `<li>${activity}</li>`)
      .join("");
  }

  // Reviews
  const reviewsEl = document.getElementById("reviews-list");
  if (reviewsEl) {
    if (place.reviews && place.reviews.length > 0) {
      reviewsEl.innerHTML = place.reviews
        .map(
          (review) => `
                <div class="review-card">
                    <div class="review-header">
                        <div class="reviewer-info">
                            <div class="reviewer-avatar">👤</div>
                            <span class="reviewer-name">${review.name}</span>
                        </div>
                        <span class="review-rating">${"⭐".repeat(
                          Math.floor(review.rating)
                        )} ${review.rating}</span>
                    </div>
                    <p class="review-comment">${review.comment}</p>
                </div>
            `
        )
        .join("");
    } else {
      reviewsEl.innerHTML = `
                <div class="review-card">
                    <div class="review-header">
                        <div class="reviewer-info">
                            <div class="reviewer-avatar">👤</div>
                            <span class="reviewer-name">[PLACEHOLDER: Reviewer Name]</span>
                        </div>
                        <span class="review-rating">⭐⭐⭐⭐ 4.0</span>
                    </div>
                    <p class="review-comment">[PLACEHOLDER: This is a sample review comment. The place was amazing!]</p>
                </div>
                <div class="review-card">
                    <div class="review-header">
                        <div class="reviewer-info">
                            <div class="reviewer-avatar">👤</div>
                            <span class="reviewer-name">[PLACEHOLDER: Another Reviewer]</span>
                        </div>
                        <span class="review-rating">⭐⭐⭐⭐⭐ 5.0</span>
                    </div>
                    <p class="review-comment">[PLACEHOLDER: Highly recommended! Beautiful location with rich history.]</p>
                </div>
            `;
    }
  }
}
