const gallery = document.getElementById('gallery');

// Sample image URLs
const imageUrls = [
  'https://example.com/wallpaper1.jpg',
  'https://example.com/wallpaper2.jpg',
  'https://example.com/wallpaper3.jpg',
  'https://example.com/wallpaper4.jpg',
  'https://example.com/wallpaper5.jpg',
];

// Function to create wallpaper elements
function createWallpaperElement(imageUrl) {
  const wallpaperElement = document.createElement('div');
  wallpaperElement.classList.add('wallpaper');

  const imageElement = document.createElement('img');
  imageElement.src = imageUrl;

  wallpaperElement.appendChild(imageElement);
  gallery.appendChild(wallpaperElement);
}

// Populate the gallery with wallpaper elements
imageUrls.forEach((url) => {
  createWallpaperElement(url);
});