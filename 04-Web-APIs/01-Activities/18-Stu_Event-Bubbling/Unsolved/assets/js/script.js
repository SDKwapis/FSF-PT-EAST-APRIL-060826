// TODO: Which element is the following line of code selecting?
// The child of the wrapper div with the class of carouselbox
const carousel = document.querySelector('.carouselbox');
// TODO: Which element is the following line of code selecting?
// the next button
const next = carousel.querySelector('.next');
const prev = carousel.querySelector('.prev');
let index = 0;
let currentImage;

const images = [
  'https://picsum.photos/id/10/300/200',
  'https://picsum.photos/id/20/300/201',
  'https://picsum.photos/id/30/300/202',
  'https://picsum.photos/id/47/300/203',
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = `url('${currentImage}')`;
}

// TODO: Describe the functionality of the following event listener.
// it makes the carouselbox (the image) clickable. When you clck it it
// takes you to the url associated with the image that is showing
carousel.addEventListener('click', function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// it makes the next button clickable
next.addEventListener('click', function (event) {
  // TODO: What is the purpose of the following line of code?
  // it allows only this event listener to trigger when clicked instead of all of them
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// it makes the previous button clickable
prev.addEventListener('click', function (event) {
  // TODO: What would happen if we didn't add the following line of code?
  // when the prev button is clicked it would trigger all event listeners above it to trigger
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
