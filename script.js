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

// Function to open the Menu Page (Page 2)
function openMenu() {
  document.getElementById('start-page').classList.add('hidden');
  document.getElementById('menu-page').classList.remove('hidden');
}

// Navigates to the Anime Section (Recommendations Page)
function animeSection() {
  document.getElementById('menu-page').classList.add('hidden');
  document.getElementById('recommendations-page').classList.remove('hidden');
}

// Navigates to the MSA Section
function msaSection() {
  document.getElementById('menu-page').classList.add('hidden');
  document.getElementById('msa-page').classList.remove('hidden');
}

// Function to return to the home page
function returnToHome() {
  document.getElementById('menu-page').classList.add('hidden');
  document.getElementById('start-page').classList.remove('hidden');
}

// Function to return to the menu page from recommendations or MSA
function returnToMenu() {
  document.getElementById('recommendations-page').classList.add('hidden');
  document.getElementById('msa-page').classList.add('hidden');
  document.getElementById('menu-page').classList.remove('hidden');
}

// Close and minimize functions
function minimizePage() {
  window.blur();
}

function closePage() {
  window.close();
}
