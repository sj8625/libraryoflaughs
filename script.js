function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// ✅ Add the full showSection function here
function showSection(section) {
  // Hide the home page
  document.getElementById("homeSection").style.display = "none";

  // Define which sections exist
  const sections = ["jokesSection"];
  
  // Show the matching section, hide others (for future expansion)
  sections.forEach(id => {
    document.getElementById(id).style.display = id === section + "Section" ? "block" : "none";
  });
}

