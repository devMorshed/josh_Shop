// const banner_images = [
//   "assets/image/banner/img-1.avif",
//   "assets/image/banner/img-2.avif",
//   "assets/image/banner/img-3.avif",
//   "assets/image/banner/img-4.avif",
// ];

// let imgIndex = 0;
// const imageContainer = document.getElementById("carousel");

// setInterval(() => {
//   if (imgIndex === banner_images.length) {
//     imgIndex = 0;
//   }
//   const imageLink = banner_images[imgIndex];
//   imgIndex++;
//   imageContainer.setAttribute("src", imageLink);
// }, 3000);




const banner_images = [
  "assets/image/banner/img-1.avif",
  "assets/image/banner/img-2.avif",
  "assets/image/banner/img-3.avif",
  "assets/image/banner/img-4.avif",
];

let imgIndex = 0;
const sliderContainer = document.getElementById("slider");
const swiper = document.querySelector(".swiper");
const slides = document.querySelectorAll(".slide");

function slideImage() {
  // Set the next image src
  const nextImageLink = banner_images[(imgIndex + 1) % banner_images.length];
  slides[1].setAttribute("src", nextImageLink);

  // Slide the swiper container to the left
  swiper.style.transform = `translateX(-${sliderContainer.offsetWidth}px)`;

  // Wait for the transition to complete, then update the image src and reset the swiper position
  setTimeout(() => {
    const imageLink = banner_images[imgIndex];
    slides[0].setAttribute("src", imageLink);
    swiper.style.transition = ""; // Reset the transition
    swiper.style.transform = "translateX(0)";
    imgIndex = (imgIndex + 1) % banner_images.length; // Use modulo to loop back to the first image
  }, 500); // Wait for 500ms (0.5 seconds) for the transition to complete before updating the image src
}

// Call the slideImage function initially to display the first image
slideImage();

// Set an interval to call the slideImage function every 3 seconds
setInterval(slideImage, 3000);
