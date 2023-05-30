import './style.css';
import { PORTATILES } from './productos';

// const PORTATILES = [
//   {
//     name: 'MacBook Air chip M2',
//     so: 'ios',
//     price: 1199,
//     stars: 5,
//     reviews: 2950,
//     seller: 'Apple',
//     image: './public/mac-m2.png',
//   },
//   {
//     name: 'MacBook Pro 14" chip M2 Pro or M2 Max chip',
//     so: 'ios',
//     price: 1999,
//     stars: 4,
//     reviews: 3435,
//     seller: 'Apple',
//     image: './public/macpro.png',
//   },
//   {
//     name: 'Acer Aspire 3 A315-43-R4VC AMD Ryzen 5 5500U/8GB/512GB SSD/15.6"',
//     so: 'w11',
//     price: 499,
//     stars: 4,
//     reviews: 250,
//     seller: 'ACER',
//     image: './public/acer-aspire-3.png',
//   },
//   {
//     name: 'HP Victus 16-d1033ns Intel Core i7-12700H/16GB/512GB SSD/RTX 3060/16.1"',
//     so: 'w11',
//     price: 1099.99,
//     stars: 4,
//     reviews: 2526,
//     seller: 'HP',
//     image: './public/hp-victus-16-d1033ns-intel-core-i7-12700.png',
//   },
//   {
//     name: 'ASUS Chromebook CX1400CNA-EK0225 Intel Celeron N3350/8GB/32GB eMMC/14"',
//     so: 'w11',
//     price: 289,
//     stars: 4,
//     reviews: 125,
//     seller: 'ASUS',
//     image: './public/asus-chromebook-cx1400.png',
//   },
//   {
//     name: 'Acer Predator Helios 300 PH315-54 Intel Core i7-11800H/32GB/1TB SSD/RTX 3060/15.6"',
//     so: 'w11',
//     price: 1299.99,
//     stars: 4,
//     reviews: 250,
//     seller: 'Acer',
//     image: './public/acer-predator-helios-300-intel-core-i7-11800.png',
//   },
//   {
//     name: 'MSI Katana 15 B12VFK-095XES Intel Core i7-12650H/16GB/512GB SSD/RTX 4060/15.6"',
//     so: 'w11',
//     price: 1369.99,
//     stars: 4,
//     reviews: 200,
//     seller: 'MSI',
//     image: './public/msi-katana-intel-core-i7-12650.png',
//   },
//   {
//     name: 'MSI Crosshair 17 C12VF-264XES Intel Core i7-12650H/32GB/1TB SSD/RTX 4060/17.3"',
//     so: 'w11',
//     price: 1699.01,
//     stars: 4,
//     reviews: 125,
//     seller: 'MSI',
//     image: './public/msi-crosshair-17-i7-12650.png',
//   },
//   {
//     name: 'HP Omen 16-b1022ns Intel Core i7-12700H/32GB/1TB SSD/RTX 3060/16.1"',
//     price: 1399,
//     so: 'w11',
//     stars: 4,
//     reviews: 435,
//     seller: 'HP',
//     image: './public/hp-omen-16-i7-12700.png',
//   },
//   {
//     name: 'Lenovo Legion 5 15IAH7H Intel Core i7-12700H/16GB/512GB SSD/RTX3060/15.6"',
//     price: 1569.01,
//     so: 'w11',
//     stars: 4,
//     reviews: 667,
//     seller: 'LENOVO',
//     image: './public/Lenovo-legion-5-15iah7h-i7-12700.png',
//   },
// ];

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
// POSIBLEMENTE ME LO CARGE POR MOTIVOS DE QUE SE ME PISA EN EL SELECT Y ME DA PRIORIDAD AL SEGUNDO QUE PONGO Y NO AL PRIMERO 
// ESTUDIAR
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

// FILTRO SELECT

const filterPORTATILES = (PORTATILES, select) => {
  // console.log(PORTATILES, select);

  if (select === 'All') {
    // pintarProductos(PORTATILES);
    return pintarProductos(PORTATILES);
  }
  const filterPORTATILES = PORTATILES.filter(
    (productos) => productos.seller === select
  );

  const priceFilter = document.querySelector('#priceFilter');

  select === 'All' ? pintarProductos(PORTATILES) : (priceFilter.value = '');
  pintarProductos(filterPORTATILES);
};

const selectSearch = document.querySelector('#sellerFilter');
selectSearch.addEventListener('change', (ev) =>
  filterPORTATILES(PORTATILES, ev.target.value)
);

// filtro precio ----> input escrito 
// calcular el rango de precio minimo y precio maximo


const filtroPortatilesPorPrecio = (PORTATILES, maxPrice) => {
  const filterPORTATILES = PORTATILES.filter(
    (productos) =>  productos.price <= maxPrice 
  );

  //Esto es para que cuando hagamos el filtro por precio, el selector de marca se ponga de vuelta a 'todas'//
  const selectSearch = document.querySelector("#sellerFilter");
  selectSearch.value = selectSearch.options[0].value;

  // console.log(filterPORTATILES);


  pintarProductos(filterPORTATILES);
};


const filterByPriceBtn = document.querySelector("#priceBtn");
filterByPriceBtn.addEventListener("click", () => {
  const priceFilter = document.querySelector("#priceFilter");
  const maxPrice = priceFilter.value;

  if (maxPrice === ""|| maxPrice <= 289 || maxPrice > 5000) {
    const errorText = document.querySelector("#errorText");
    errorText.textContent = alert ("Debes insertar una cantidad");
   
    return; 



  // } else {
  //   (maxPrice < 6000) 
  //     const errorText = document.querySelector("#errorText");
  //   errorText.textContent = alert ("Debes insertar una cantidad menor");
    
  //   return
  }

  filtroPortatilesPorPrecio(PORTATILES, maxPrice);
});







const cleanFiltersBtn = document.querySelector("#cleanFiltersBtn");
cleanFiltersBtn.addEventListener("click", () => {
  resetFilters();
});

const resetFilters = () => {
  const selectSearch = document.querySelector("#sellerFilter");
  selectSearch.value = selectSearch.options[0].value;

  const priceFilter = document.querySelector("#priceFilter");
  priceFilter.value = "";
  
  const filterPORTATILES = document.querySelector("#nameFilter");
  filterPORTATILES.value = "";

  pintarProductos(PORTATILES);
};



// const onButtonClicked = () => {
//  
//   console.log('Button clicked!');
// };

// const buttonElement = document.querySelector('#cleanFiltersBtn');
// buttonElement.addEventListener('click', onButtonClicked);
