const navHeaderEl = document.querySelector(".nav-header");

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navHeaderEl.classList.add("bg-scroll");
  }

  if (scrollY < 50) {
    navHeaderEl.classList.remove("bg-scroll");
  }
});

document.querySelectorAll(".nav-header-list-lg-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    const navHeight = navHeaderEl.getBoundingClientRect().height;
    document.querySelector(id).scrollIntoView({ behavior: "smooth", top: -navHeight });
  });
});

document.querySelector(".logo-header").addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.querySelector(".logo-header").getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".btn-schedule").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".section-contact").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector(".btn-details").addEventListener("click", () => {
  document.querySelector(".section-benefits").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".btn-order").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".section-contact").scrollIntoView({ behavior: "smooth" });
  });
});

const headerEl = document.querySelector(".parallax");
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  headerEl.style.backgroundPositionY = offset * 0.8 + "px";
});

document.querySelector(".btn-more").addEventListener("click", () => {
  document.querySelector(".hidden-details").style.display = "block";
});
