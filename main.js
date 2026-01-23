// Toggle project card collapsed/expanded
document.querySelectorAll(".card-header").forEach((header) => {
  header.addEventListener("click", () => {
    header.closest(".project-card").classList.toggle("collapsed")
  })
})
