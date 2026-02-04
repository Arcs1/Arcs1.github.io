// Toggle project card collapsed/expanded
document.querySelectorAll(".project-card").forEach((card) => {
  const header = card.querySelector(".card-header-wrapper")

  header.addEventListener("click", () => {
    const isCollapsed = card.classList.toggle("collapsed")
    header.setAttribute("aria-expanded", String(!isCollapsed))

    if (isCollapsed) {
      card.querySelector(".card-content-wrapper").setAttribute("inert", "")
    } else {
      card.querySelector(".card-content-wrapper").removeAttribute("inert")
    }
  })
})
