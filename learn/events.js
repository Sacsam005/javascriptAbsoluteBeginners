document.querySelector(".container").addEventListener("click", (e) => {
  console.log("You have clicked");

  variable = e.target;
  variable = e.target.classList;
  variable = e.offsetX;

  variable = Array.from(e.target.classList);

  for (v of variable) {
    console.log(v);
  }

  console.log(variable);
});
