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
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
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
  let offset = window.scrollY;
  headerEl.style.backgroundPositionY = offset * 0.8 + "px";
});

document.querySelector(".btn-more").addEventListener("click", () => {
  document.querySelector(".hidden-details").style.display = "block";
});

document.querySelector(".icon-back").addEventListener("click", () => {
  document.querySelector(".nav-header-list-sm").style.display = "none";
});

document.querySelector(".icon-menu").addEventListener("click", () => {
  document.querySelector(".nav-header-list-sm").style.display = "flex";
});

document.querySelectorAll(".nav-header-list-sm-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-header-list-sm").style.display = "none";
  });
});

document.querySelectorAll(".nav-header-list-sm-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".nav-footer-list-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector(".logo-footer").addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.querySelector(".logo-footer").getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

/* Scroll Reveal Effects*/

const cardsBenefitsOffsetList = document.querySelectorAll(".card-benefits");
const cardsPricesOffsetList = document.querySelectorAll(".card-prices");
const cardsContactOffsetList = document.querySelectorAll(".card-contact");
const h3List = document.querySelectorAll("h3");
const btnSheduleList = document.querySelectorAll(".btn-schedule");

const cardsOffsetListObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show-card", entry.isIntersecting);
    if (entry.isIntersecting) cardsOffsetListObserver.unobserve(entry.target);
  });
});

const h3Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show-h3", entry.isIntersecting);
    if (entry.isIntersecting) h3Observer.unobserve(entry.target);
  });
});

const btnScheduleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show-btn-schedule", entry.isIntersecting);
    if (entry.isIntersecting) btnScheduleObserver.unobserve(entry.target);
  });
});

cardsBenefitsOffsetList.forEach((card) => cardsOffsetListObserver.observe(card));
cardsPricesOffsetList.forEach((card) => cardsOffsetListObserver.observe(card));
cardsContactOffsetList.forEach((card) => cardsOffsetListObserver.observe(card));
h3List.forEach((h3) => h3Observer.observe(h3));
btnSheduleList.forEach((h3) => btnScheduleObserver.observe(h3));
/* Scroll Reveal Effects END*/
