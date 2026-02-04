// Toggle project card collapsed/expanded
document.querySelectorAll(".project-card").forEach((card) => {
  card.querySelector(".card-header-wrapper").addEventListener("click", () => {
    card.classList.toggle("collapsed")
  })
})
