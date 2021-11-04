
const imageContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");
//Unsplash API
const count = 10;
const apiKey = "2N3FKrHhBNFgpvO1322fFUiyNSxM0Yzte2jjXsw3W8g";
const apiUrl = 'https://api.unsplash.com/photos/random/?client_id=' + apiKey + '&count=' + count;


let photosArray = []; //let and not const because the pic will change at every request

//Create Elements for links & phoros ,add to DOM
function displayPhotos (){
  //Run function for each object in PhotoArray
  photosArray.forEach((photo) => {
  //Create <a> to link to Unsplash 
  const item = document.createElement("a");
  item.setAttribute("href", photo.links.html);
  item.setAttribute("target", "_blank");
  //Create <img> for photo
  const img = document.createElement("img");
  img.setAttribute("src", photo.urls.regular);
  img.setAttribute("alt", photo.alt_description);
  img.setAttribute("alt", photo.alt_description);
  //Put img inside <a>, then put both inside img container Element
  item.appendChild(img);
  imageContainer.appendChild(item);

  });
}

//Get photos from Usplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    console.log(error);
  }
}
// On load
getPhotos();
