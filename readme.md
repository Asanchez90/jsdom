# Proyecto 2: Tienda dinámica

## Enunciado de proyecto

¿Recuerdas el proyecto anterior dónde has creado una Landing Page para una “supuesta” tienda? Pues ha llegado el momento de mejorar este proyecto utilizando JavaScript en el DOM 🤘

Busca un web de productos donde inspirarte, al igual que en proyecto anterior, la web [PcComponentes](https://www.pccomponentes.com/portatiles) es un buen lugar para ello. Toma como referencia el listado de productos:

![Capture.PNG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/59649ffa-04ec-4db4-8a17-cad226271439/Capture.png)

En este caso, para arrancar el proyecto puedes seguir los siguientes pasos:

- Crea tu carpeta de proyecto e inicializa un repositorio de Git en ella.
- Crea un archivo `index.html` y un archivo `index.css`.
- Carga el CSS en el HTML.
- Crea un archivo `main.js` que contendrá el JavaScript principal de tu proyecto utilizando JavaScript para el DOM.
- Introduce primero en tu archivo un objeto que simule todos los elementos de la tienda con un formato similar al siguiente. ***Los campos vendedor `seller` y precio `price` son obligatorios en cualquiera de los proyectos:***

```jsx
const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
  },
  // Añade aquí al menos 9 productos más para tener un total de 10 productos
  // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
];
```

- Como podrás observar, **tenemos un array de objetos** que recorreremos para pintar cada carta de elemento.
- Carga el archivo JS en tu HTML al final del `body` tal y como hacemos en los videos de JS DOM.
- Ya puedes empezar tu proyecto 🚀

Una vez tengas todo preparado, tendrás que hacer código de JavaScript que permita crear una página parecida pero con menor cantidad de objetos.

<aside>
💡 Ten en cuenta los criterios de aceptación ya que definirán los mínimos que debes cumplir en el proyecto una vez pases a añadir tu lógica de JavaScript.

</aside>

### Criterio de aceptación

Para verificar que tu proyecto cumple unos requisitos adecuados al conocimiento que debes haber conseguido, validaremos los siguientes puntos:

**Criterios JavaScript**

- [ ]  El HTML de la web se genera de forma dinámica mediante los `tag templates` que se habrá definido en JavaScript. Se permitirá tener de base dos secciones `.filter` y `.products` para introducir elementos dentro con JavaScript para el DOM.
- [✔️]  Se recorrerá la lista de productos y se creará una carta de producto para cada elemento de forma dinámica por medio de `for` o de `.forEach`.
- [ ]  Se definirán al menos dos filtros para los productos en la parte izquierda del documento:
    - [✔️]  El primer filtro será un elemento `[select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)` que muestra todos los **vendedores** (`seller`) distintos que hay en los productos del proyecto; y que al ser clickado, hará que el documento solamente muestro los elementos que tengan la propiedad `seller` con el mismo valor. Para esto, se definirán al menos 4 seller distintos en los productos del objeto **products**.
    - [ ]  El segundo filtro será un `input` de tipo `number` acompañado de un botón que contenga el texto “Buscar”. El usuario podrá introducir una cantidad de dinero en el filtro y pulsar buscar, esto hará que solo aparezcan en pantalla los elementos cuyo **precio** (`price`) sea menor que esta cantidad.
    - [ ]  Habrá un botón “Limpiar Filtros” que al ser pulsado, volverá a pintar en pantalla todos los productos, sin aplicar filtro ninguno.

**Criterios HTML y CSS**

- [ ]  El código HTML está correctamente estructurado. Hay dos elementos `section` o `article` principales que representan los filtros de búsqueda (a la izquierda en escritorio, arriba del contenido en móvil), y los elementos a vender en la tienda (a la derecha en escritorio, abajo de los filtros en móvil).
- [✔️]  Los elementos a vender en la tienda comparten la misma clase de CSS, que define una carta de producto y tiene algún efecto `:hover` cuando pasa el ratón sobre ellas.
- [✔️]  La web cuenta con media queries para escritorio y móvil. Así como una correcta estructura y posicionamiento de elementos por medio de `flex` o `grid`.
- [✔️]  Los productos tienen imágenes correctas que se ven en la carta de componente de cada uno


--------------------------------------------

ya tengo hecho el esquema de la pagina web de la tienda.

- Tengo que empezar a hacer el esqueleto del aside, nav superior y grilla (o con flex) para ir haciendo el esqueleto de la pagina.
    - En el aside podria ponerlo como una segunda nav (ya lo tengo del proyecto mecataller) o en el lateral
    - Hacerlo con los requisitos del proyecto.
- Luego, hago las cartas (reutilizar de otro proyecto).

- Tengo que descargarme las fotos de los productos, quitarle el fondo y subirlo a cloudinary y meterlas.



<!-- codigo by potatoes  -->
document.querySelector('#aaa').innerHTML = `
  <div id="products-container"> //aside
    <div id="filter">
      <div class="filter-1"></div>
      <div class="filter-2">
        <div>
          <h5>Buscar</h5>
          <input id="searchInput" type="text" placeholder="Apple,HP, Acer...">
          <div class="searchBtnCamera"><button id="button-search-pc">Buscar</button></div>
        </div>
        <div>
          <h5>Filtro por marca</h5>
          <label for="brand-list"></label>
          <select name="brand-list" id="brand-list">
          //aqui hacer un bucle for, que me vaya pintando todos mis seller
            <option value="All">Todas las marcas</option>
            <option value="Apple">Apple</option>
            <option value="HP">HP</option>
            <option value="ASUS">ASUS</option>
            <option value="MSI">MSI</option>
            <option value="Lenovo">Lenovo</option>
          </select>
        </div>
        <div>
          <h5>Busca por precio</h5>
          <input id="input-price" type="range" id="price-range">
          <button id="button-price">Buscar</button>
        </div>
        <button id="button-clean">Limpiar filtros</button>
      </div>
    </div>
    <div id="products-content">
      <div class="title">
        <h1>CATALOGO</h1>
        <h2>PORTATILES</h2>
        
      </div>
    </div>
    <div id="allProducts"></div>
  </div>
`;

document.querySelector('#general-header').innerHTML = `
<div id="general-header">
  <div class="logo">
    <a href="#"><img src="/logo-sin-fondo.png" alt="logo-sin-fondo" width="50px" height="50px"></a>
  </div>
  <nav class="navbar">
    <div class="menu-container">
      <label class="navbar-toggle" id="navbar-toggle" for="chkToggle">
        <img class="menu-movil" src="/toggle-navbar-sin-fondo.png" alt="menu-movil" width="40px" height="40px">
      </label>
      <input type="checkbox" id="chkToggle" />
      <ul class="main-nav" id="menu">
        <li><a href="#" class="nav-links">INICIO</a></li>
        <li><div class="separator"></div></li>
        <li><a href="#" class="nav-links">DISPOSITIVOS</a></li>
        <li><div class="separator"></div></li>
        <li><a href="#" class="nav-links"></a></li>
        <li><div class="separator"></div></li>
        <li><a href="#" class="nav-links">CONTACTA</a></li>
        <li><div class="separator"></div></li>
        <li><a href="#" class="nav-links">Log In</a></li>
      </ul>
    </div>
  </nav>
</div>
`;

// __________ SECTION main-container _____________

// __________Products & Filter__________

// -------------- Print Products --------------//
// const allProducts = document.getElementById('#products');

// const allMyProducts = () => {
//   const computers = portatiles.map((portatil) => {
//     return {
//         name: portatil.name,
//         so: portatil.so,
//         price: portatil.price,
//         seller: portatil.seller,
//         image: portatil.image,
//   }});

//   console.log(computers);
//   //ejecucion de la funcion
//   printPortatiles(computers);
// };

// allMyProducts()

// //declaracion de la funcion
// const printPortatiles = (computers) => {
//   allProducts.innerHTML = '';

//   for (let computers of portatiles) {
//     const article = document.createElement('article');

//     article.innerHTML = `
//     <h3>${computers.name}</h3>;
//     <img src=${computers.image} alt=${computers.name} />;
//     <h3>${computers.price}</h3>;
//     <p>${computers.seller}</p>;
//     `;

//     ProductsContainer.appendChild(article);
//   }
//   // console.log(computers.name);

// };
