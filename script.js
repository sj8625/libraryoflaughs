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
