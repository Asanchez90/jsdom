import './style.css';
// import { PORTATILES } from './productos';

const PORTATILES = [
  {
    name: 'MacBook Air chip M2',
    so: 'ios',
    price: 1199,
    stars: 5,
    reviews: 2950,
    seller: 'Apple',
    image: './public/mac-m2.png',
  },
  {
    name: 'MacBook Pro 14" chip M2 Pro or M2 Max chip',
    so: 'ios',
    price: 1.999,
    stars: 4,
    reviews: 3435,
    seller: 'Apple',
    image: './public/macpro.png',
  },
  {
    name: 'Acer Aspire 3 A315-43-R4VC AMD Ryzen 5 5500U/8GB/512GB SSD/15.6"',
    so: 'w11',
    price: 499,
    stars: 4,
    reviews: 250,
    seller: 'Acer',
    image: './public/acer-aspire-3.png',
  },
  {
    name: 'HP Victus 16-d1033ns Intel Core i7-12700H/16GB/512GB SSD/RTX 3060/16.1"',
    so: 'w11',
    price: 1099.99,
    stars: 4,
    reviews: 2526,
    seller: 'HP',
    image: './public/hp-victus-16-d1033ns-intel-core-i7-12700.png',
  },
  {
    name: 'ASUS Chromebook CX1400CNA-EK0225 Intel Celeron N3350/8GB/32GB eMMC/14"',
    so: 'w11',
    price: 289,
    stars: 4,
    reviews: 125,
    seller: 'Asus',
    image: './public/asus-chromebook-cx1400.png',
  },
  {
    name: 'Acer Predator Helios 300 PH315-54 Intel Core i7-11800H/32GB/1TB SSD/RTX 3060/15.6"',
    so: 'w11',
    price: 1299.99,
    stars: 4,
    reviews: 250,
    seller: 'Acer',
    image: './public/acer-predator-helios-300-intel-core-i7-11800.png',
  },
  {
    name: 'MSI Katana 15 B12VFK-095XES Intel Core i7-12650H/16GB/512GB SSD/RTX 4060/15.6"',
    so: 'w11',
    price: 1369.99,
    stars: 4,
    reviews: 200,
    seller: 'Msi',
    image: './public/msi-katana-intel-core-i7-12650.png',
  },
  {
    name: 'MSI Crosshair 17 C12VF-264XES Intel Core i7-12650H/32GB/1TB SSD/RTX 4060/17.3"',
    so: 'w11',
    price: 1699.01,
    stars: 4,
    reviews: 125,
    seller: 'msi',
    image: './public/msi-crosshair-17-i7-12650.png',
  },
  {
    name: 'HP Omen 16-b1022ns Intel Core i7-12700H/32GB/1TB SSD/RTX 3060/16.1"',
    price: 1399,
    so: 'w11',
    stars: 4,
    reviews: 435,
    seller: 'HP',
    image: './public/hp-omen-16-i7-12700.png',
  },
  {
    name: 'Lenovo Legion 5 15IAH7H Intel Core i7-12700H/16GB/512GB SSD/RTX3060/15.6"',
    price: 1569.01,
    so: 'w11',
    stars: 4,
    reviews: 667,
    seller: 'Lenovo',
    image: './public/Lenovo-legion-5-15iah7h-i7-12700.png',
  },
];

// declararion de la funcion ---->  envio parametros

const pintarProductos = (productos) => {
  console.log(PORTATILES);
  const productos$$ = document.querySelector('#productos');
  productos$$.innerHTML = '';

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    // aqui pongo las variables y creo el elemento que quiero
    const div$$ = document.createElement('div');

    const divimg$$ = document.createElement('div');
    const img$$ = document.createElement('img');
    const name$$ = document.createElement('h4');
    const so$$ = document.createElement('p');
    const price$$ = document.createElement('h5');
    const stars$$ = document.createElement('p');
    const reviews$$ = document.createElement('p');

    // aqui pongo lo que quiero que me salga en el elemento "p,h4,img...."
    img$$.src = producto.image;
    img$$.classList.add('image-productos');
    div$$.classList.add('producto');
    // div$$.title = producto.name //cuando pongo el mouse por encima del producto, me sale el nombre del producto
    divimg$$.classList.add('img-wrapper');
    name$$.textContent = producto.name;
    price$$.textContent = producto.price + ' €';
    so$$.textContent = 'Sistema operativo ' + producto.so;
    reviews$$.textContent = producto.reviews + ' reviews ⭐️';

    // aqui le digo donde quiero que me lo ponga y y entre "()" pongo mi variable del elemento

    divimg$$.appendChild(img$$);
    div$$.appendChild(divimg$$);
    div$$.appendChild(name$$);
    div$$.appendChild(price$$);
    div$$.appendChild(so$$);
    div$$.appendChild(reviews$$);
    productos$$.appendChild(div$$);
  }
};

// ejecucion de la funcion ---> recojo parametros
pintarProductos(PORTATILES);

// filtros  ----> input escrito
const filtroNombre = (e) => {
  const productosFiltradosNombre = PORTATILES.filter((producto) =>
    producto.name
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );

  console.log(productosFiltradosNombre);
  pintarProductos(productosFiltradosNombre);
};

const nameFilter$$ = document.querySelector('#nameFilter');

nameFilter$$.addEventListener('input', filtroNombre);

// filtro precio ----> input escrito
//REVISAR FILTRO PORQUE NO ME CUADRA

// const filterProductos = (PORTATILES, select) => {
//   console.log(producto, select);

//   if (select === 'All') {
//     pintarProductos(PORTATILES);
//     return;
//   }
//   const producto = producto.filter(
//     (producto) => producto.seller === select
//   );

//   console.log(filterProductos);
//   const priceFilter$$ = document.querySelector('#priceFilter');
  
//   select === 'All' ? pintarProductos(PORTATILES) : (priceFilter$$.value = '');
//   pintarProductos(PORTATILES); 
// };

// const selectSearch = document.querySelector('.sellerFilter');
// selectSearch.addEventListener('change', (ev) =>
// pintarProductos(PORTATILES, ev.target.value)
// );


// //aqui está el fallo
// const filterProductsByPrice = (productos, maxPrice) => {
//   const productosFiltradosNombre = productos.filter(
//     (productos) => productos.price <= maxPrice
//   );
// };

// boton filtrar productos por marca ----> es el boton...
// const filterByPriceBtn = document.querySelector('#priceBtn');
// filterByPriceBtn.addEventListener('click', () => {
//   const priceFilter$$ = document.querySelector('#priceFilter');
//   const maxPrice = priceFilter$$.value;

//   filterSneakersByPrice(sneakers, maxPrice);
// });

// resetear filtros con el boton de "limpiar filtros"

// //REVISAR GILIPOLLAS
// const buttonclear$$ = document.querySelector('#cleanFiltersBtn');
// const imputPriceFilter$$ = document.querySelector ('#priceBtn')

// // revisar aqui en adelante, proyecto canvas
// buttonclear$$.addEventListener ('click', () => {
//   nameFilter$$.value = nameFilter$$
// })

// const cleanFiltersBtn$$ = document.querySelector('#cleanFiltersBtn');
// cleanFiltersBtn$$.addEventListener('click', () => {
//   resetFilters();
//   console.log('click 191');
// });
// console.log('click 193');

// const resetFilters = () => {
//   const selectSearch = document.querySelector('#sellerFilter');
//   selectSearch.value = selectSearch.options[0].value;
//   console.log('click 198');
//   const priceFilter = document.querySelector('#priceFilter');
//   priceFilter.value = '';

//   pintarProductos(PORTATILES);
// };
// console.log("click 204")
