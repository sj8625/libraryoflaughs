function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
  // Hide all other sections first (in case you add more later)
  const sections = ["jokesSection"];
  sections.forEach(id => {
    document.getElementById(id).style.display = (id === section + "Section") ? "block" : "none";
  });
}
