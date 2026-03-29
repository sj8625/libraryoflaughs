function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// ✅ Add the full showSection function here
function showSection(section) {
  // Hide the home page
  document.getElementById("homeSection").style.display = "none";

  // Only one section now
  const sections = ["jokesSection"];

  // Show jokesSection when section === "jokes"
  sections.forEach(id => {
    document.getElementById(id).style.display =
      id === section + "Section" ? "block" : "none";
  });
}

/* ⭐⭐ PASTE THIS DIRECTLY BELOW ⭐⭐ */
document.getElementById("jokeDropdown").addEventListener("change", function() {
  const value = this.value;
  const display = document.getElementById("jokeDisplay");

  if (value === "pirate") {
    display.innerHTML = `
      <h2>Pirate Jokes</h2>
      <p>What do you call a pirate on drugs? Crack Sparrow.</p>
      <p>What's a pirate's favorite part of the US Government? The FB-Aye.</p>
      <p>What's a pirate's favorite letter? You'd think it's R, but it be the C.</p>
    `;
  }

  else if (value === "animal") {
    display.innerHTML = `
      <h2>Animal Jokes</h2>
      <p>Why did the cow cross the road? To get to the udder side.</p>
    `;
  }

   else {
    display.innerHTML = "";
  }
});

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
