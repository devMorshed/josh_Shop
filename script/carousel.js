const banner_images = [
  "assets/image/banner/img-1.avif",
  "assets/image/banner/img-2.avif",
  "assets/image/banner/img-3.avif",
  "assets/image/banner/img-4.avif",
];

let imgIndex = 0;
const imageContainer = document.getElementById("carousel");

setInterval(() => {
  if (imgIndex === banner_images.length) {
    imgIndex = 0;
  }
  const imageLink = banner_images[imgIndex];
  imgIndex++;
  imageContainer.setAttribute("src", imageLink);
}, 3000);
