const contain = document.querySelector(".container");

contain.addEventListener("mouseover", () => {
  contain.style.backgroundColor = "red";
});

contain.addEventListener("mouseleave", () => {
  contain.style.backgroundColor = "transparent";
});
