//array vacio para carrito
let carrito = [];

//tomar html/contenedor para cards
let cards = document.getElementById("cards");

//tomar html/boton finalizar compra
let btnFC = document.getElementById("btnFC");

//renderizar o distribuir los objetos o productos
function renderizarProductos() {
  for (const producto of productos) {
    cards.innerHTML += `
      <div class="card container-fluid col-sd-3">
        <img src=./images/${producto.imagen}.jpg class="card-img-top" alt=${producto.imagen}>
        <div class="card-body">
          <h3 class="card-text">${producto.nombre.toUpperCase()}</h3>
          <p class="card-text">$ ${producto.precio}</p>
          <button id='btn${producto.id}' class="btn btn-ligth">Comprar</button>
        </div>
      </div>
    `;
  }

  //evento para cada boton compra
  productos.forEach((producto) => {
    document
      .getElementById(`btn${producto.id}`)
      .addEventListener("click", function () {
        agregarCarrito(producto);
      });
  });
}
renderizarProductos();

//OTRA FORMA DE RENDERIZAR EN CARDS
// for (const e of productos) {
//   let carta = document.createElement("div"); //crear elemento html
//   carta.className = "card container-fluid col-sd-3";
//   carta.innerHTML = `
//       <img src="${e.imagen}" class="card-img-top" alt="imagen de producto ${e.nombre}">
//       <div class="card-body">
//         <h5 class="card-title">${e.nombre}</h5>
//         <p class="card-text">Precio: $ ${e.precio}</p>
//         <button id="btn${e.id}" class="btn btn-ligth">Comprar</button>
//         </div>
//         `;
//   cards.append(carta); //insertar elementos creados en contenedor tomado del html y mostrar
// }

//cargar carrito
function agregarCarrito(productoComprar) {
  carrito.push(productoComprar);

  //guardar en json y luego al localstorage
  const jsonStorage = (clave, valor) => { localStorage.setItem(clave, valor)};
  jsonStorage (`listaProductos`, JSON.stringify(productoComprar));
  console.log(jsonStorage)
  //traer del storage y luego al json
  const storageJson= JSON.parse(localStorage.getItem(`listaProductos`));
  console.log(storageJson);
  
  // //otra forma de aplicar json y storage
  // //enviar objeto al JSON  
  // const objetoAJSON = JSON.stringify(productoComprar);
  // // console.log(objetoAJSON);
  // //enviar objetoAJSON al localStorage  
  // localStorage.setItem(`productoComprar`, objetoAJSON);
  
  // //traer del localStorage al JSON
  // const traerDelLStorage = localStorage.getItem(`productoComprar`);
  // //traer del JSON al objeto
  // const jsonAObjeto = JSON.parse(traerDelLStorage);
  // console.log(jsonAObjeto);

  //Sweet alert
  Swal.fire({
    imageUrl: `./images/${productoComprar.imagen}.jpg`,
    imageWidth: 250,
    imageHeight: 250,
    imageAlt: productoComprar.nombre,
    title: productoComprar.nombre.toUpperCase(),
    text: "se agregó al carrito",
    width: 400,
    showConfirmButton: false,
    timer: 1750,
    background: `#e0c2c0`,
    color: `#57394a`,
    showClass: {
      popup: "animate__animated animate__jackInTheBox",
    },
    hideClass: {
      popup: "animate__animated animate__zoomOutDown",
    },
  });
  document.getElementById("tBody").innerHTML += `
    <tr>
        <td>${productoComprar.nombre.toUpperCase()}</td>
        <td>${productoComprar.precio}</td>
        <td><button id='btn${
          productoComprar.id
        }' class="btn btn-ligth"><i class="fa-solid fa-trash-can"></i></button></td>
    </tr>
  `;
  let totalCarrito = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0);
    document.getElementById("totalPagar").innerText = `Total a pagar c/IVA incluido: $ ${totalCarrito * 1.21}`;

  // //evento para cada boton trash sacar del carrito
  // productos.forEach((productoComprar) => {
  //   document
  //     .getElementById(`btn${productoComprar.id}`)
  //     .addEventListener("click", function () {
  //       sacarCarrito(productoComprar);
  //     });
  // });
}

btnFC.onclick = () => {
  carrito = [];
  document.getElementById("tBody").innerHTML = "";
  document.getElementById("totalPagar").innerText = "";
  localStorage.clear();
  sessionStorage.clear();
  console.clear();
  //Sweet alert
  Swal.fire({
    imageUrl: `./images/logo.jpg`,
    imageWidth: 250,
    imageHeight: 250,
    imageAlt: btnFC.nombre,
    title: `GRACIAS POR TU COMPRA!!!`,
    text: `Siempre a tu disposición`,
    width: 400,
    showConfirmButton: false,
    timer: 3000,
    background: `#e0c2c0`,
    color: `#57394a`,
    showClass: {
      popup: "animate__animated animate__flip",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutTopRight",
    },
  });
};
