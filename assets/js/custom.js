function updateLogoBasedOnTheme() {
  const logo = document.querySelector(".VPNavBar .logo");

  if (!logo) return;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  console.log(prefersDark);

  const currentTheme =
    document.documentElement.getAttribute("data-theme") ||
    (prefersDark ? "dark" : "light");

  if (currentTheme === "dark") {
    logo.src = "/assets/logo/dark-logo.svg";
  } else {
    logo.src = "/assets/logo/logo.svg";
  }
}

// Listen for theme changes
const observer = new MutationObserver(() => updateLogoBasedOnTheme());
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["data-theme"],
});

// Initial update
updateLogoBasedOnTheme();

// Select all images with the 'popup-trigger' class
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".popup-trigger");

  // Create a modal container
  const modal = document.createElement("div");
  modal.classList.add("image-modal");
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <img class="modal-image" />
  `;
  document.body.appendChild(modal);

  const modalImage = modal.querySelector(".modal-image");
  const overlay = modal.querySelector(".modal-overlay");

  // Show modal on image click
  images.forEach((image) => {
    image.addEventListener("click", () => {
      modalImage.src = image.src;
      modal.classList.add("active");
    });
  });

  // Close modal when overlay is clicked
  overlay.addEventListener("click", () => {
    modal.classList.remove("active");
  });
});


