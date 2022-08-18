const imagecontainer = document.getElementById('imagecontainer');
const loader = document.getElementById('loader');
let photoarray = [];


const count = 10;
const apikey = 'R_xjvhPwbFMb8leNgSM_K9jyd9eWCT-auKygcy5GuxY';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;


function displayPhotos(){
  photoarray.forEach((photo)=>{
   const item=document.createElement('a');
   item.setAttribute('href',photo.links.html);
   item.setAttribute('target','_blank');
   const img = document.createElement('img');
   img.setAttribute('src',photo.urls.regular);
   img.setAttribute('alt',photo.alt_description);
   img.setAttribute('title',photo.alt_description);

   item.appendChild(img);
   imagecontainer.appendChild(item);

  });
}
async function getphotos() {
  try {
    const response = await fetch(apiUrl);
    photoarray= await response.json();
    displayPhotos();
  }
  catch (error) {

  }
}
getphotos();

window.addEventListener('scroll',()=>{
  if(window.innerHeight+window.scrollY >= document.body.offsetHeight-1000 ){
    getphotos();
  }
});
