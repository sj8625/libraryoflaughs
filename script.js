function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function showSection(section) {
  // hide home
  document.getElementById("homeSection").style.display = "none";

  // only jokesSection for now
  const sections = ["jokesSection"];

  sections.forEach(id => {
    document.getElementById(id).style.display =
      id === section + "Section" ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("jokeDropdown");
  const display = document.getElementById("jokeDisplay");

  dropdown.addEventListener("change", function () {
    const value = this.value;

    if (value === "pirate") {
      display.innerHTML = `
        <h2>Pirate Jokes</h2>
        <p>What do you call a pirate on drugs? Crack Sparrow.</p>
        <p>What's a pirate's favorite part of the US Government? The FB-Aye.</p>
        <p>What's a pirate's favorite letter? You'd think it's R, but it be the C.</p>
      `;
    } else if (value === "animal") {
      display.innerHTML = `
        <h2>Animal Jokes</h2>
        <p>Why did the cow cross the road? To get to the udder side.</p>
      `;
    } else {
      display.innerHTML = "";
    }
  });
});
