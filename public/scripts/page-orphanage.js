const options = {
  dragging: false,
  toutchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// get map location

const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

// create map

const map = L.map("mapid", options).setView([lat, lng], 15);

//create aon add tilelayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker

L.marker([lat, lng], { icon }).addTo(map);

// image gallery

function selectImage(event) {
  const button = event.currentTarget;

  // remover todas as classes ativas
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  // selecionar image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar o container de image

  imageContainer.src = image.src;

  // add a classe .active para este butão
  button.classList.add("active");
}
