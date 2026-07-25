function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// ✅ Add the full showSection function here
function showSection(section) {
  // Hide the home page
  document.getElementById("homeSection").style.display = "none";

  //Add all sections you want to toggle
  const sections = [
    "jokesSection",
    "pirateJokesSection",
    "animalJokesSection",
  ];

  //Show the matching section, hide others
  sections.forEach(id => {
    document.getElementById(id).style.display = 
      id == section + "Section" ? "block" : "none";
  });
}

function showHome() {
  // Hide all <section> elements
  document.querySelectorAll("section").forEach(sec => {
    sec.style.display = "none";
  });

  // Hide jokesSection too
  document.getElementById("jokesSection").style.display = "none";
  
  // Show the home page
  document.getElementById("homeSection").style.display = "flex";
  
  // Reset dropdown
  const dropdown = document.getElementById("jokeDropdown");
  if (dropdown) dropdown.value = "default";

  // Close the menu after clicking Home
  const menu = document.getElementById("menu");
  if (menu) menu.style.display = "none";
}
