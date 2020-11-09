// create map

const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

//create aon add tilelayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// //create and add marker
// L.marker([-27.222633, -49.6455874], { icon }).addTo(map).bindPopup(popup);

let marker;

//create and add marker

map.on("click", function (event) {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remover icone

  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// photos upload

function addPhotoField() {
  //   pegar container da foto #images

  const container = document.querySelector("#images");

  //    pegar o container para duplicar .new-upload

  const fieldsContainer = document.querySelectorAll(".new-upload");

  // realizar o clone da oultima ibagem added

  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //   verificar se o campo esta vazio s-> nao add ao container

  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //   limpar o  campo antes de add no container

  input.value = "";

  // adicionar o clone ao container de #images

  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    //limpar o valor do campo

    span.parentNode.children[0].value = "";

    return;
  }

  //deletar o  campo inteiro
  span.parentNode.remove();
}

// Y/N select
function toggleSelect(event) {
  //   remove active

  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");

    //  pode escrever .forEach(button => button.classList.remove('active'))
  });

  //    add .active on butão

  const button = event.currentTarget;
  button.classList.add("active");

  //   atualizar o input hidden com o valor selecionado

  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

// function validate(event) {
//   // validar lat e lng
//   const NeedLatLng = true;

//   if (NeedLatLng = true) {
//     event.preventDefault();
//     alert("Selecione um ponto do mapa");
//   }
// }
