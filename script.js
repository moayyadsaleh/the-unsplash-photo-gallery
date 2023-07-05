const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = "UazL5E93HXJnTN_p8ZRpdEJYknp7na2TTY5-nx4lgmc";
const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded
function imageLoaded() {
  // Code to handle image load completion
}

// Create elements for links and photos, add to the DOM
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    // Create image for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    // Put image inside anchor element, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);

    // Event Listener, check when each is finished loading
    img.addEventListener("load", imageLoaded);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
}

// Check to see if scrolling near bottom of page, load more photos
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
    getPhotos();
  }
});

// On Load
getPhotos();