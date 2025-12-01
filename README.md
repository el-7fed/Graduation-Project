# 🏛️ Go Egypt Tour - جولة مصر

A front-end static website promoting Egyptian domestic tourism, showcasing cultural, historical, religious, and entertainment destinations across Egypt.

## 📋 Project Overview

**Go Egypt Tour** is an interactive tourism platform providing structured information about tourist locations across Egypt. The website creates an engaging digital experience that blends documented information with storytelling and visual content.

### 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox & Grid
- **Vanilla JavaScript (ES6+)** - Dynamic interactions
- **JSON** - Data storage

## 📁 Project Structure

```
/Go-Egypt
│
├── index.html                # Homepage
├── places.html               # Explore all places
├── place-details.html        # Dynamic template for place details
├── trips.html                # Trip packs
├── about.html                # About the project
├── contact.html              # Contact page
│
├── assets/
│   ├── images/               # All images (add your images here)
│   ├── icons/                # Icon files
│   └── data/
│       └── places.json       # All places data
│
├── css/
│   ├── style.css             # Global styling
│   ├── home.css              # Homepage & other pages styling
│   ├── places.css            # Places page styling
│   └── responsive.css        # Media queries
│
├── js/
│   ├── main.js               # Global scripts
│   ├── search.js             # Filtering/search
│   ├── renderPlaces.js       # Renders cards from JSON
│   ├── placeDetails.js       # Loads selected place details
│   └── ui.js                 # UI interactions (navbar, sliders)
│
└── README.md                 # This file
```

## 🎨 Design Guidelines

### Color Palette (Egyptian Identity)

| Color      | Hex Code  | Usage                          |
| ---------- | --------- | ------------------------------ |
| Gold       | `#C8A951` | Primary accent, heritage tones |
| Black      | `#111111` | Pharaonic contrast, text       |
| White      | `#FFFFFF` | Background, clarity            |
| Red        | `#C0392B` | Accents, highlights            |
| Beige/Sand | `#EFE8D8` | Desert tone, backgrounds       |

### Typography

- **Headings**: Poppins / Cairo Bold
- **Body**: Cairo Regular

## 📖 Pages Description

### 1. Homepage (`index.html`)

- Hero section with image slideshow
- Featured destinations (top 6 places)
- Category navigation
- Features/Why Choose Us section
- Footer with links

### 2. Places Page (`places.html`)

- Search bar with live search
- Category and location filters
- Grid of place cards
- Dynamic rendering from JSON

### 3. Place Details (`place-details.html`)

- Image gallery with slider
- Full description and heritage story
- Opening hours and ticket prices
- Map placeholder
- Nearby activities
- User reviews

### 4. Trip Packs (`trips.html`)

- 2-Hour Tour
- Half-Day Tour
- Full Day Tour
- Weekend Trip Plan

### 5. About Page (`about.html`)

- Mission & Vision
- Project objectives
- Concept description
- Team members

### 6. Contact Page (`contact.html`)

- Contact form
- Contact information
- Map placeholder

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Add your images** to the `assets/images/` folder
3. **Update `places.json`** with your actual content (replace `[PLACEHOLDER]` texts)
4. **Open `index.html`** in a browser to view the website

### Required Images

Add these images to `assets/images/`:

- `hero1.jpg`, `hero2.jpg`, `hero3.jpg` - Hero slider images
- `placeholder.jpg` - Fallback image
- `map-placeholder.jpg` - Map placeholder
- Place images as referenced in `places.json`
- Team member photos
- Trip pack images

## 📱 Responsive Breakpoints

| Breakpoint | Target Devices |
| ---------- | -------------- |
| ≤ 480px    | Mobile phones  |
| ≤ 768px    | Tablets        |
| ≤ 1024px   | Laptops        |
| > 1024px   | Desktop        |

## 🔧 Customization

### Adding New Places

Edit `assets/data/places.json` and add a new object:

```json
{
  "id": 9,
  "name": "Place Name",
  "category": "Historical|Cultural|Religious|Entertainment|Nature",
  "location": "City Name",
  "description": "Short description...",
  "longDescription": "Full detailed description...",
  "images": ["image1.jpg", "image2.jpg"],
  "ticketPrice": "100 EGP",
  "openingHours": "9 AM - 5 PM",
  "heritageStory": "Historical background...",
  "nearbyActivities": ["Activity 1", "Activity 2"],
  "reviews": [
    {
      "name": "User Name",
      "rating": 4.5,
      "comment": "Review text..."
    }
  ]
}
```

### Changing Colors

Edit CSS variables in `css/style.css`:

```css
:root {
  --color-gold: #c8a951;
  --color-black: #111111;
  /* ... other colors */
}
```

## 🌐 Deployment

### GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch: `main` and folder: `/ (root)`
4. Save and access via provided URL

### Other Hosting

Simply upload all files to any static web hosting service.

## ✅ Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Search and filter functionality
- [ ] Place details load from JSON
- [ ] Responsive design on mobile
- [ ] Images load (or show placeholders)
- [ ] Forms display success messages

## 📝 License

This project is created for educational purposes as a graduation project.

## 👥 Team

[PLACEHOLDER: Add team member names and roles]

---

**© 2025 Go Egypt Tour. All rights reserved.**
