// NAVIGATION
document
  .querySelector(".navigation__checkbox")
  .addEventListener("click", () => {
    document
      .querySelector("body")
      .classList.toggle("navigation__overflow-hidden");

    // APPEAR LOGO IN FIXED POSITION 0.3s
    setTimeout(() => {
      document
        .querySelector(".header__logo-box")
        .classList.toggle("header__logo-box--position");
    }, 300);
  });

// GALLERY COUNTDOWN
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();
const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYear - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.textContent = d < 10 ? "0" + d : d;
  hours.textContent = h < 10 ? "0" + h : h;
  minutes.textContent = m < 10 ? "0" + m : m;
  seconds.textContent = s < 10 ? "0" + s : s;
}
setInterval(updateCountdown, 1000);

// PARALLax subscription img
function parallaxBackground(sectionClass, scrollValue) {
  const parallaxSection = document.querySelectorAll(`.${sectionClass}`);
  const scrollTop = window.scrollY;

  parallaxSection.forEach((cur) => {
    // START PARALLAX EFFECT IN CURRENT SECTION
    if (scrollTop + window.innerHeight / 0.9 > cur.offsetTop) {
      let scrollPosition = window.pageYOffset;
      cur.style.backgroundPosition = "50%" + scrollPosition * scrollValue + "%";
    }
  });
}

window.addEventListener("scroll", () => {
  parallaxBackground("section-subscribe", -0.045);
});
