const logo = document.querySelectorAll(".logo");
const titreSpans = document.querySelectorAll("h1 span");
const btns = document.querySelectorAll(".btn-first");
const search = document.querySelectorAll(".input_search");
const menu = document.querySelectorAll(".menu");
const image = document.querySelectorAll(".img_illus");
const media = document.querySelectorAll(".media");

window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(
    titreSpans,
    1,
    { top: -50, opacity: 0, ease: "power2.out" },
    0.3
  )
    .staggerFrom(menu, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.1)
    .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out" }, 0.3, "-=1")
    .from(logo, 0.4, { transform: "scale(0)", ease: "power2.out" }, "-=2")
    .from(search, 0.4, { transform: "scale(0)", ease: "power2.out" }, "-=2")
    .staggerFrom(media, 1, { right: -200, ease: "power2.out" }, 0.3, "-=1")
    .from(image, 0.4, { transform: "scale(0)", ease: "power2.out" }, "-=2");

  TL.play();
});
