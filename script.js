document.addEventListener("DOMContentLoaded", function () {
  // Restore checkbox states from localStorage
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    const checkedState = localStorage.getItem(checkbox.id);
    if (checkedState === "true") {
      checkbox.checked = true;
    }
  });

  // Handling checkboxes (Save checked state to localStorage)
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      localStorage.setItem(checkbox.id, checkbox.checked);
    });
  });
});

// Function to fade out the current page and show the new page
function fadeOutAndShowPage(hidePageId, showPageId) {
  const hidePage = document.getElementById(hidePageId);
  const showPage = document.getElementById(showPageId);

  // Apply fade-out effect on the current page
  hidePage.classList.add('fade-out');
  
  // Wait for the fade-out effect to finish (500ms, match the transition duration)
  setTimeout(function() {
    // Hide the current page and show the next page
    hidePage.classList.add('hidden');
    hidePage.classList.remove('fade-out');

    showPage.classList.remove('hidden');
    
    // Apply fade-in effect on the new page
    showPage.classList.add('fade-in');
  }, 500); // Match this time with the CSS transition time (0.5s)
}

// Navigation functions with fade effects
function openMenu() {
  fadeOutAndShowPage('start-page', 'menu-page');
}

function animeSection() {
  fadeOutAndShowPage('menu-page', 'anime-page');
}

function msaSection() {
  fadeOutAndShowPage('menu-page', 'msa-page');
}

function kdramaSection() {
  fadeOutAndShowPage('menu-page', 'kdrama-page');
}

function returnToHome() {
  fadeOutAndShowPage('menu-page', 'start-page');
}

function returnToMenu() {
  fadeOutAndShowPage('anime-page', 'menu-page');
  fadeOutAndShowPage('msa-page', 'menu-page');
  fadeOutAndShowPage('kdrama-page', 'menu-page');
}

// Close and minimize functions
function minimizePage() {
  window.blur();
}

function closePage() {
  window.close();
}
