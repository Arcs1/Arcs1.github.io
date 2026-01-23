// ---------- Toggle project card collapsed/expanded ----------
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("collapsed")
  })
})
