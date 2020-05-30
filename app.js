// NAVIGATION
document
  .querySelector(".navigation__checkbox")
  .addEventListener("click", () => {
    document
      .querySelector(".header__logo-box")
      .classList.toggle("header__logo-box--position");

    document
      .querySelector("body")
      .classList.toggle("navigation__overflow-hidden");
  });
