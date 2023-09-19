const slides = window.document.querySelectorAll(".slide");
window.document.body.style.setProperty("--slides-css-counter-slide", `counter(slides-css-counter-slide) " of ${slides.length}"`);
