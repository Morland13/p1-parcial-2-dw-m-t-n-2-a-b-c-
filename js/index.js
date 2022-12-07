const tiendaContent = document.getElementById("tiendaContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
{

  id: 1,
  nombre: "ANKH",
  precio: 66000,
  categoria: "Mesa",
  descripcion: "¿Qué mejor plan para una tarde de lluvia que un juego de mesa? Con el Ankh: Dioses de Egipto vas a crear divertidos recuerdos y pasar momentos inolvidables junto a tus amigos y amigas. Con este pasatiempo entretenido las risas están aseguradas.",
  img: 'img/mesa/ankh.png',
  cantidad: 1,


},
{

    id: 2,
    nombre: "DESCENT",
    precio: 68000,
    categoria: "Mesa",
    descripcion: "El enemigo más antiguo del reino ha regresado y está todo listo para el próximo enfrentamiento entre Terrinoth y las fuerzas de la oscuridad en Descent: Leyendas de las tinieblas, ¡el juego de exploración de mazmorras definitivo para 1 a 4 jugadores!",
    img: 'img/mesa/descent.png',
    cantidad: 1,
  
},
{

    id: 3,
    nombre: "EL SEÑOR DE LOS ANILLOS",
    precio: 75000,
    categoria: "Mesa",
    descripcion: "La aventura aguarda únicamente a quienes poseen el coraje para buscarla. ¡Reúne a tus amigos, prepara tu morral y parte en pos de la fortuna con Viajes por la Tierra Media!",
    img: 'img/mesa/lotr.png',
    cantidad: 1,
  
},
{

    id: 4,
    nombre: "THIS WAR OF MINE",
    precio: 48000,
    categoria: "Mesa",
    descripcion: "Gestiona tu refugio, fabrica objetos necesarios para vuestra existencia y defensa, explora la enorme ciudad y arriesga la vida saliendo en busca de recursos con tus amigos.",
    img: 'img/mesa/war.png',
    cantidad: 1,
  
},
{

    id: 5,
    nombre: "H.D.P.",
    precio: 12000,
    categoria: "Cartas",
    descripcion: "Hasta Donde Puedas! Un juego políticamente incorrecto! El Juego ideal para tu niño interior (si tu niño interior es un HDP) Respondé la pregunta de la carta negra con una de tus cartas blancas!",
    img: 'img/cartas/hdp.png',
    cantidad: 1,
  
},
{

    id: 6,
    nombre: "DIGALO CON MEMES",
    precio: 16000,
    categoria: "Cartas",
    descripcion: "Combiná memes con frases y reíte toda la noche! Dígalo con memes incluye 240 cartas de situación y 80 cartas de imagen.",
    img: 'img/cartas/memes.png',
    cantidad: 1,
  
  
},
{

    id: 7,
    nombre: "CON ESO NO SE JODE",
    precio: 3000,
    categoria: "Cartas",
    descripcion: "Con eso nose Jode es un juego de humor negro, donde los jugadores podrán explorar los sectores mas retorcidos de sus mentes.",
    img: 'img/cartas/negro.png',
    cantidad: 1,
  
  
},
{

    id: 8,
    nombre: "GENERALA",
    precio: 2000,
    categoria: "Dados",
    descripcion: "¿Qué mejor plan para una tarde de lluvia que un juego de mesa? Con el Generala Real vas a crear divertidos recuerdos y pasar momentos inolvidables junto a tus amigos y amigas. Con este pasatiempo entretenido las risas están aseguradas.",
    img: 'img/dados/generala.png',
    cantidad: 1,
  
  
},
{

    id: 9,
    nombre: "RAPIGRAMA",
    precio: 3000,
    categoria: "Dados",
    descripcion: "Rapigrama es un juego en el que tenés que formar palabras cruzadas antes de que finalice tu tiempo. Con una concentración adecuada, vas a poder sumar puntos y ser un genio en el armado de palabras.",
    img: 'img/dados/rapigrama.png',
    cantidad: 1,


},
];


let carrito = [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "contenido";
    content.innerHTML = `
    <h3>${product.nombre}</h3>
    <p class"precio">$${product.precio}</p>
    <p class"categoria>${product.categoria}</p>
    <p class="descripcion">${product.descripcion}</p>
    <img src="${product.img}">
    `;

    tiendaContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "Comprar";
    comprar.className = "button";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id );
        if (repeat){
            carrito.map((item) => {
                if (item.id === product.id){
                    item.cantidad++;
                }
            });
        } else {
        
        carrito.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            categoria: product.categoria,
            descripcion: product.descripcion,
            img: product.img,
            cantidad: product.cantidad,
        });
        }
    });
});
    const todoCarrito = () => {
    
       modalContainer.innerHTML = "";
       modalContainer.style.display = "flex";
       const modalHeader = document.createElement("div");
       modalHeader.className = "modal-header";
       modalHeader.innerHTML = `
        <h2 class "modal-header-title">CARRITO 🛒</h2>
       `;
       modalContainer.append(modalHeader);

       const modalbutton = document.createElement("h2");
       modalbutton.innerText = "x";
       modalbutton.className = "modal-header-button";

       modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none" ;
       });

       modalHeader.append(modalbutton);
       
       carrito.forEach((product) => {

       let carritoContent = document.createElement("div");
       carritoContent.className = "modal-content";
       carritoContent.innerHTML = `
           <img src="${product.img}">
           <h3>${product.nombre}</h3>
           <p>$${product.precio}</p>
           <p>Cantidad: ${product.cantidad}</p>
           <p>Total: ${product.cantidad * product.precio}</p>
       `;

       modalContainer.append(carritoContent);

       let eliminar = document.createElement("span");
       eliminar.innerText = "🗑";
       eliminar.className = "eliminar-producto";
       carritoContent.append(eliminar);

       eliminar.addEventListener("click", eliminarItem);
     });
     

     const total = carrito.reduce((acc, elemento) => acc + elemento.precio * elemento.cantidad, 0 );
     
     const totalComprado = document.createElement("div");
     totalComprado.className = "total-content";
     totalComprado.innerHTML = `Suma Total: $${total}`;
     modalContainer.append(totalComprado);
  
    };
    
    verCarrito.addEventListener("click", todoCarrito);

    const eliminarItem = () => {
        const foundId = carrito.find((element) => element.id);

        carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;    
        });

        todoCarrito();
    };



    