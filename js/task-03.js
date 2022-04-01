const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryEl = document.querySelector(".gallery");
const createListItemEl = images.map((image) => {
  const listEl = document.createElement("li");
  const imgEl = document.createElement("img");
  imgEl.src = image.url;
  imgEl.alt = image.alt;
  imgEl.classList = "gallery__item__img";
  listEl.classList = "gallery__item";
  listEl.append(imgEl);
  return listEl;
});
galleryEl.append(...createListItemEl);
console.log(galleryEl);
