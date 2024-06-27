const arrowNext = document.querySelector(".slider__arrow-next");
const arrowPrev = document.querySelector(".slider__arrow-prev");
const sliderTrack = document.querySelector(".slider__track");

let next = 0;

const showSlideForward = (size) => {
  next += size;
  sliderTrack.style.transform = `translateX(-${next}px)`;
};

const showSlideBack = (size) => {
  next -= size;
  sliderTrack.style.transform = `translateX(-${next}px)`;
};

arrowNext.addEventListener("click", (e) => {
  let sizeBox =
    e.target.parentNode.parentNode.firstElementChild.childNodes[1].offsetWidth;
  if (next < sizeBox * 4) {
    showSlideForward(sizeBox);
  }
});

arrowPrev.addEventListener("click", (e) => {
  let sizeBox =
    e.target.parentNode.parentNode.firstElementChild.childNodes[1].offsetWidth;
  if (next > 0) {
    showSlideBack(sizeBox);
  }
});
