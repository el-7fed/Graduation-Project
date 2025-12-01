/**
 * Go Egypt Tour - UI Interactions
 * Handles sliders, modals, and other UI components
 */

document.addEventListener("DOMContentLoaded", function () {
  initHeroSlider();
});

/**
 * Initialize Hero Slider
 */
function initHeroSlider() {
  const slider = document.querySelector(".hero-slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".slider-dots");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");

  let currentSlide = 0;
  let slideInterval;
  const intervalTime = 5000; // 5 seconds

  // Create dots
  if (dotsContainer) {
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  // Show specific slide
  function goToSlide(index) {
    slides[currentSlide].classList.remove("active");
    const dots = dotsContainer?.querySelectorAll(".dot");
    if (dots) dots[currentSlide].classList.remove("active");

    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    slides[currentSlide].classList.add("active");
    if (dots) dots[currentSlide].classList.add("active");
  }

  // Next slide
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  // Previous slide
  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  // Event listeners
  if (nextBtn)
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });

  if (prevBtn)
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });

  // Auto slide
  function startInterval() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  // Start auto sliding
  if (slides.length > 1) {
    startInterval();

    // Pause on hover
    slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
    slider.addEventListener("mouseleave", startInterval);
  }
}

/**
 * Initialize Gallery Slider (for place details page)
 */
function initGallerySlider(images) {
  const gallery = document.getElementById("gallery-slider");
  const dotsContainer = document.getElementById("gallery-dots");
  const prevBtn = document.querySelector(".gallery-btn.prev");
  const nextBtn = document.querySelector(".gallery-btn.next");

  if (!gallery || images.length === 0) return;

  let currentSlide = 0;

  // Create slides
  images.forEach((img, index) => {
    const slide = document.createElement("div");
    slide.classList.add("gallery-slide");
    if (index === 0) slide.classList.add("active");
    slide.innerHTML = `<img src="assets/images/${img}" alt="Gallery image ${
      index + 1
    }" onerror="this.src='assets/images/placeholder.jpg'">`;
    gallery.appendChild(slide);

    // Create dot
    if (dotsContainer) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    }
  });

  const slides = gallery.querySelectorAll(".gallery-slide");
  const dots = dotsContainer?.querySelectorAll(".dot");

  function goToSlide(index) {
    slides[currentSlide].classList.remove("active");
    if (dots) dots[currentSlide].classList.remove("active");

    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    slides[currentSlide].classList.add("active");
    if (dots) dots[currentSlide].classList.add("active");
  }

  if (nextBtn)
    nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));
  if (prevBtn)
    prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
}

/**
 * Initialize Gallery Grid (thumbnails)
 */
function initGalleryGrid(images) {
  const grid = document.getElementById("gallery-grid");
  if (!grid || images.length === 0) return;

  images.forEach((img, index) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");
    item.innerHTML = `<img src="assets/images/${img}" alt="Gallery image ${
      index + 1
    }" onerror="this.src='assets/images/placeholder.jpg'">`;
    grid.appendChild(item);
  });
}

// Export for use in other scripts
window.initGallerySlider = initGallerySlider;
window.initGalleryGrid = initGalleryGrid;
