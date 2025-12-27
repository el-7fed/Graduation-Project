/**
 * Go Egypt Tour - Place Details
 * Handles loading and displaying individual place details
 */

let loadedPlace = null;

document.addEventListener("DOMContentLoaded", function () {
  loadPlaceDetails();
});

document.addEventListener("languageChanged", function () {
  if (loadedPlace) {
    renderPlaceDetails(loadedPlace);
  }
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
    loadedPlace = place;
    renderPlaceDetails(place);
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
  const currentLang = window.languageUtils
    ? window.languageUtils.getCurrentLanguage()
    : "ar";
  const displayName =
    currentLang === "ar" ? place.name : place.nameEn || place.name || "";
  const displayCategoryKey = place.category ? place.category.toLowerCase() : "";
  const displayCategory = window.languageUtils
    ? window.languageUtils.t(displayCategoryKey)
    : place.category;
  const categoryText = displayCategory || place.category || "";
  const displayLocation =
    currentLang === "ar"
      ? place.location
      : place.locationEn || place.location || "";
  const displayLongDescription =
    currentLang === "ar"
      ? place.longDescription || place.description || ""
      : place.longDescriptionEn ||
        place.descriptionEn ||
        place.longDescription ||
        place.description ||
        "";
  const displayHeritage =
    currentLang === "ar"
      ? place.heritageStory || ""
      : place.heritageStoryEn || place.heritageStory || "";
  const displayOpeningHours =
    currentLang === "ar"
      ? place.openingHours || ""
      : place.openingHoursEn || place.openingHours || "";
  const displayTicketPrice =
    currentLang === "ar"
      ? place.ticketPrice || ""
      : place.ticketPriceEn || place.ticketPrice || "";
  const displayAddress =
    currentLang === "ar"
      ? place.address || ""
      : place.addressEn || place.address || "";
  const displayHighlights =
    currentLang === "ar"
      ? place.highlights
      : place.highlightsEn || place.highlights;
  const displayImportantNotes =
    currentLang === "ar"
      ? place.importantNotes
      : place.importantNotesEn || place.importantNotes;
  const displayActivities =
    currentLang === "ar"
      ? place.nearbyActivities
      : place.nearbyActivitiesEn || place.nearbyActivities;

  // Initialize gallery slider
  if (place.images && place.images.length > 0) {
    initGallerySlider(place.images);
    initGalleryGrid(place.images);
  }

  // Category
  const categoryEl = document.getElementById("place-category");
  if (categoryEl) categoryEl.textContent = categoryText;

  // Title
  const titleEl = document.getElementById("place-title");
  if (titleEl) titleEl.textContent = displayName;

  // Location
  const locationEl = document.getElementById("place-location");
  if (locationEl) {
    const span = locationEl.querySelector("span");
    if (span) span.textContent = displayLocation;
  }

  // Description
  const descriptionEl = document.getElementById("place-description");
  if (descriptionEl) {
    descriptionEl.textContent = displayLongDescription;
  }

  // Heritage Story
  const heritageEl = document.getElementById("place-heritage");
  if (heritageEl) {
    const heritageText =
      displayHeritage ||
      "[PLACEHOLDER: Heritage story content will be added here]";
    heritageEl.innerHTML = `<p>${heritageText}</p>`;
  }

  // Opening Hours
  const hoursEl = document.getElementById("opening-hours");
  if (hoursEl) hoursEl.textContent = displayOpeningHours || "[PLACEHOLDER]";

  // Ticket Price
  const priceEl = document.getElementById("ticket-price");
  if (priceEl) priceEl.textContent = displayTicketPrice || "[PLACEHOLDER]";

  // Sidebar Location
  const sidebarLocationEl = document.getElementById("sidebar-location");
  if (sidebarLocationEl) sidebarLocationEl.textContent = displayLocation;

  // Full Address
  if (displayAddress) {
    const addressCard = document.getElementById("address-card");
    const fullAddressEl = document.getElementById("full-address");
    if (addressCard && fullAddressEl) {
      addressCard.style.display = "block";
      fullAddressEl.textContent = displayAddress;
    }
  }

  // Highlights
  if (displayHighlights && displayHighlights.length > 0) {
    const highlightsSection = document.getElementById("highlights-section");
    const highlightsList = document.getElementById("highlights-list");
    if (highlightsSection && highlightsList) {
      highlightsSection.style.display = "block";
      highlightsList.innerHTML = displayHighlights
        .map((highlight) => `<li>💎 ${highlight}</li>`)
        .join("");
    }
  }

  // Important Notes
  if (displayImportantNotes && displayImportantNotes.length > 0) {
    const notesSection = document.getElementById("notes-section");
    const notesList = document.getElementById("notes-list");
    if (notesSection && notesList) {
      notesSection.style.display = "block";
      notesList.innerHTML = displayImportantNotes
        .map((note) => `<li>📌 ${note}</li>`)
        .join("");
    }
  }

  // Nearby Activities
  const activitiesEl = document.getElementById("nearby-activities");
  if (activitiesEl) {
    const activities = displayActivities || [
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
                            <span class="reviewer-name">${
                              currentLang === "ar"
                                ? review.name
                                : review.nameEn || review.name || ""
                            }</span>
                        </div>
                        <span class="review-rating">${"⭐".repeat(
                          Math.floor(review.rating)
                        )} ${review.rating}</span>
                    </div>
                    <p class="review-comment">${
                      currentLang === "ar"
                        ? review.comment
                        : review.commentEn || review.comment || ""
                    }</p>
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

  const siteName = currentLang === "ar" ? "جوله في مصر" : "Tour in Egypt";
  document.title = `${displayName} - ${siteName}`;
}
