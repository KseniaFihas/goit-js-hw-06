const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const ulList = document.querySelector(".gallery");


const listImages = images.map((image) =>
  `<li><img class="screen" src="${image.url}" width="300" height ="200" alt="${image.alt}"></li>`).join("");


ulList.insertAdjacentHTML('beforeend', listImages);
  
const screen = document.querySelectorAll(".screen");




ulList.style.display = "flex";
ulList.style.gap = "20px";
ulList.style.listStyle = "none";





