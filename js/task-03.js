const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
    width: '480',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    width: '480',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    width: '480',
  },
];

const gallery = document.querySelector('.gallery');

const createGallery = images => {
  const galleryItems = images.map(
    image =>
      `<li class="item"><img class="picture" src="${image.url}" alt="${image.alt}" width="${image.width}"></li>`,
  );
  gallery.insertAdjacentHTML('afterbegin', galleryItems.join(''));
};

createGallery(images);
console.log(gallery)



