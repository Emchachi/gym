// Menu fade animation
const nav = document.querySelector(".navbar");

const handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".navbar").querySelectorAll(".nav-link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
  const interval = setInterval(nextSlide, 3000);
};
slider();

/* slider */

// Scroll to
const section3 = document.querySelector("#section--3");
const btnScrollTo = document.querySelector(".btn--scroll-to");

btnScrollTo.addEventListener("click", function (e) {
  section3.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".nav-list").addEventListener("click", function (e) {
  // e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Reveal section
const section1 = document.querySelector(".section-text");
const textReveal = document.querySelector(".gym-about");

const objOptions = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(loadText, objOptions);
sectionObserver.observe(section1);

function loadText(entries) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    textReveal.classList.remove("hidden");
  } else {
    textReveal.classList.add("hidden");
  }
}

const membershipSection = document.querySelector(".gym-membership");
const membershipRevealMonth = document.querySelector(".pricing-plan--monthly");

const objObserve = {
  root: null,
  threshold: 0.15,
  rootMargin: "-10px",
};

const membershipObserver = new IntersectionObserver(membershipLoad, objObserve);
membershipObserver.observe(membershipSection);

function membershipLoad(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    membershipRevealMonth.classList.remove("reveal");
  } else {
    membershipRevealMonth.classList.add("reveal");
  }
}

const membershipRevealYear = document.querySelector(".pricing-plan--year");

const membershipObserver2 = new IntersectionObserver(
  membershipLoad2,
  objObserve
);
membershipObserver2.observe(membershipSection);

function membershipLoad2(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    membershipRevealYear.classList.remove("reveal-2");
  } else {
    membershipRevealYear.classList.add("reveal-2");
  }
}

// MODAL
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hid");
  overlay.classList.remove("hid");
};

const closeModal = function () {
  modal.classList.add("hid");
  overlay.classList.add("hid");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hid")) {
    closeModal();
  }
});

// Mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const hideEl = document.querySelector(".hero-container");
const hideEl1 = document.querySelector(".hero-container-inner");

btnNavEl.addEventListener("click", function (e) {
  headerEl.classList.toggle("nav-open");

  if (headerEl.classList.contains("nav-open")) {
    hideEl.classList.add("hid");
  } else {
    hideEl.classList.remove("hid");
  }
});
