// Toggle project card collapsed/expanded
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    // Expand when collapsed: click anywhere
    if (card.classList.contains("collapsed")) {
      card.classList.remove("collapsed")
      return
    }

    // Collapse when expanded: click header
    if (e.target.closest(".card-header-wrapper")) {
      card.classList.add("collapsed")
    }
  })
})
