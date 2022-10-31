//instanciar o crear objetos literales para renderizar
const productos = [
  {
    id: 1,
    nombre: `mini\nbox`,
    precio: 2500,
    imagen: `minibox`,
  },
  {
    id: 2,
    nombre: `mini\nblack`,
    precio: 3500,
    imagen: `miniblack`,
  },
  {
    id: 3,
    nombre: `black\nbox`,
    precio: 5500,
    imagen: `blackbox`,
  },
  {
    id: 4,
    nombre: `classic\nbox`,
    precio: 4300,
    imagen: `classicbox`,
  },
  {
    id: 5,
    nombre: `bubble\nballoon`,
    precio: 1200,
    imagen: `bubbleballoon`,
  },
  {
    id: 6,
    nombre: `bouquet\nroses`,
    precio: 5900,
    imagen: `bouquetroses`,
  },
  {
    id: 7,
    nombre: `bouquet\nastromelias`,
    precio: 4000,
    imagen: `bouquetastromelias`,
  },
  {
    id: 8,
    nombre: `candy\nbox`,
    precio: 4500,
    imagen: `candybox`,
  },
  {
    id: 9,
    nombre: `drynk\nbox`,
    precio: 5900,
    imagen: `drynkbox1`,
  },
];

//OTRA FORMA DE CREAR OBJETOS

// //fabrica de objetos
// class Producto {
//   constructor(id, nombre, precio, imagen) {
//     this.id = id;
//     this.nombre = nombre.toUpperCase();
//     this.precio = parseFloat(precio);
//     this.imagen = `./images/${imagen}.jpg`;
//   }
// }

// //instanciar o crear carga de objetos manual para la fabrica
// const producto1 = new Producto(1, `minibox`, 2500, `minibox`);
// const producto2 = new Producto(2, `miniblack`, 3500, `miniblack`);
// const producto3 = new Producto(3, `blackbox`, 5500, `blackbox`);
// const producto4 = new Producto(4, `classicbox`, 4300, `classicbox`);
// const producto5 = new Producto(5, `bubbleballoon`, 1200, `bubbleballoon`);
// const producto6 = new Producto(6, `bouquet\nroses`, 5900, `bouquetroses`);
// const producto7 = new Producto(
//   7,
//   `bouquet\nastromelias`,
//   4000,
//   `bouquetastromelias`
// );
// const producto8 = new Producto(8, `CANDYBOX`, 0000, `candybox`);
// const producto9 = new Producto(9, `DRYNKBOX`, 0000, `drynkbox1`);

// //crear array de objetos cargados y pasados por fabrica
// const productos = [
//   producto1,
//   producto2,
//   producto3,
//   producto4,
//   producto5,
//   producto6,
//   producto7,
//   producto8,
//   producto9,
// ];
