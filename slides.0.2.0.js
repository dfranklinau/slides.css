/*!
 * slides.css v0.2.0
 *
 * Copyright (c) 2023, Daniel Franklin
 * Licensed under ISC
 */
const slides = window.document.querySelectorAll(".slide");
window.document.body.style.setProperty("--slides-css-counter-slide", `counter(slides-css-counter-slide) " of ${slides.length}"`);
