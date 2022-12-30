let zapatos = [
    {id: 10, nombre: "TENIS SUPERSTAR UP", categoria: "Originals", precio: 2300, marca: "Adidas", talla: 25, color: "Blanco", stock: 3, genero: "Mujer", rutaImagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69ebe774a6f84cfbbcd4abdb009239f7_9366/Tenis_Superstar_Up_Blanco_FW0118_01_standard.jpg"},
    {id: 20, nombre: "TENIS DE SENDERISMO UNITY PIEL RAIN.RDY CORTE MEDIO", categoria: "Terrex", precio: 2500, marca: "Adidas", talla: 25, color: "Negro", stock: 1, genero: "Mujer", rutaImagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/df09e17c78ab42969710aec100ee6d7d_9366/Tenis_de_Senderismo_Unity_Piel_RAIN.RDY_Corte_Medio_Negro_GZ3325_01_standard.jpg"},
    {id: 30, nombre: "TENIS ADI2000", categoria: "Originals", precio: 2600, marca: "Adidas", talla: 23, color: "Blanco", stock: 2, genero: "Mujer", rutaImagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/829653afd51f43ee84e4ae980160ce3e_9366/Tenis_Adi2000_Naranja_GX9854_01_standard.jpg"},
    {id: 40, nombre: "XZ 0006 INSIDE OUT", categoria: "Originals", precio: 1700, marca: "Adidas", talla: 38, color: "Azul", stock: 4, genero: "Mujer", rutaImagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ed4d9dab5964552a67fac6a018280dd_9366/XZ_0006_INSIDE_OUT_Azul_GZ2710_01_standard.jpg"},
    {id: 50, nombre: "TENIS FORUM TRIPLE PLATFORM LOW PRIDE", categoria: "Originals", precio: 2930, marca: "Adidas", talla: 25, color: "Negro", stock: 3, genero: "Mujer", rutaImagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto/32589be96ac14a2483b4ae0800aeae9e_9366/Tenis_Forum_Triple_Platform_Low_Pride_Negro_GX6396_01_standard.jpg"},
    {id: 60, nombre: "TENIS FORUM BOLD", categoria: "Originals", precio: 1500, marca: "Adidas", talla: 25, color: "Rosa", stock: 5, genero: "Mujer", rutaImagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7eb8e4928789465b881bad6b01053ff2_9366/Tenis_Forum_Bold_Rosa_GY8161_01_standard.jpg"},
    {id: 70, nombre: "TENIS STAN SMITH", categoria: "Originals", precio: 1200, marca: "Adidas", talla: 25, color: "Amarillo", stock: 1, genero: "Mujer", rutaImagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b09aeeb3c7ff40569120adf900f40328_9366/Tenis_Stan_Smith_Amarillo_GX8553_01_standard.jpg"},
    {id: 80, nombre: "TENIS ULTRABOOST DNA XXII LIFESTYLE RUNNING SPORTSWEAR CAPSULE COLLECTION", categoria: "Sportswear", precio: 2800, marca: "Adidas", talla: 25, color: "Negro", stock: 2, genero: "Mujer", rutaImagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c489d8f2793143aeb63dae890023defb_9366/Tenis_Ultraboost_DNA_XXII_Lifestyle_Running_Sportswear_Capsule_Collection_Negro_GX6849_01_standard.jpg"},
    {id: 90, nombre: "TENIS NIZZA TREK", categoria: "Originals", precio: 2300, marca: "Adidas", talla: 24, color: "Negro", stock: 2, genero: "Mujer", rutaImagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/36122ffc21974b06aa42acc300479e68_9366/Tenis_Nizza_Trek_Negro_GZ8857_01_standard.jpg"},
    {id: 100, nombre: "TENIS NIZZA PLATFORM MID", categoria: "Originals", precio: 2200, marca: "Adidas", talla: 25, color: "Rojo", stock: 5, genero: "Mujer", rutaImagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/145ccb90f5b14e748a02aed900aaf827_9366/Tenis_Nizza_Platform_Mid_Rojo_GY9561_01_standard.jpg"},
    {id: 110, nombre: "TERREX VOYAGER 21 CANVAS W", categoria: "Terrex", precio: 1700, marca: "Adidas", talla: 24, color: "Negro", stock: 2, genero: "Mujer", rutaImagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cabf300499a54e9d84a3ad6000fe5cd5_9366/TERREX_VOYAGER_21_CANVAS_W_Gris_FZ3336_01_standard.jpg"},
    {id: 120, nombre: "TENIS EQ21 RUN", categoria: "Running", precio: 1900, marca: "Adidas", talla: 23, color: "Negro", stock: 2, genero: "Mujer", rutaImagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f7116a5953e3488cacc3ae97013089d4_9366/Tenis_EQ21_Run_Negro_GX7320_01_standard.jpg"},
    ]

let contenedor = document.getElementById("contenedor")
let carrito = []
let contenedorCarrito = document.getElementById('carrito')
let verCarrito = document.getElementById('verCarrito')

renderizarZapatos(zapatos)
renderizarCarrito()

let filtroOriginals = document.getElementById("originals")
let filtroTerrex = document.getElementById("terrex")
let filtroRunning = document.getElementById("running")
let filtroMujer = document.getElementById("mujer")
let filtroHombre = document.getElementById("hombre")
let todos = document.getElementById("todos")

filtroOriginals.addEventListener("click", renderizarZapatosFiltrados)
filtroTerrex.addEventListener("click", renderizarZapatosFiltrados)
filtroRunning.addEventListener("click", renderizarZapatosFiltrados)
filtroMujer.addEventListener("click", renderizarZapatosFiltrados)
filtroHombre.addEventListener("click", renderizarZapatosFiltrados)
todos.addEventListener("click", renderizarZapatosFiltrados)

function renderizarZapatosFiltrados(e) {
    //console.log(e.target.id + " " + e)
    contenedorCarrito.className = "ocultar"
    contenedor.className = "mostrar"
  if (e.target.id == "todos") {
    renderizarZapatos(zapatos)
  } else {
    renderizarZapatos(zapatos.filter((zapato => zapato.categoria.toLowerCase() == e.target.id) || (zapato => zapato.genero.toLowerCase() == e.target.id)))
    console.log(e.target.id)
  }
}

function renderizarZapatos(arrayDeZapatos) {
  contenedor.innerHTML = ""
  for (const zapato of arrayDeZapatos) {
    let tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta"
    tarjeta.innerHTML = `
      <img src=${zapato.rutaImagen}>
      <h5>${zapato.nombre}</h5>
      <h5>$${zapato.precio}</h5>
      <button class=boton id=${zapato.id}>Agregar al carrito</button>
    `
    contenedor.appendChild(tarjeta)
  }

  let botones = document.getElementsByClassName("boton")
  for (const boton of botones) {
    boton.addEventListener("click", agregarAlCarrito)
  }
}

function agregarAlCarrito(e) {
  console.log(e.target.id)
  let zapatoBuscado = zapatos.find(zapato => zapato.id == e.target.id)

  console.log(zapatoBuscado)
  // agregar el producto al array carrito
  carrito.push(zapatoBuscado)
  localStorage.setItem('carrito', JSON.stringify(carrito))
  renderizarCarrito()
}

function renderizarCarrito() {
contenedorCarrito.innerHTML = ''
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
    }
    carrito.forEach(producto => {
        let tarjeta = document.createElement('div')
        tarjeta.className = "tarjeta"
        tarjeta.innerHTML = `
        <img src=${producto.rutaImagen}>
        <p>${producto.nombre}</p>
        <p>$${producto.precio}</p>
        <button class=boton id=${producto.id}>Quitar del carrito</button>
      `
        contenedorCarrito.appendChild(tarjeta)
    })
}

verCarrito.onclick = () => {
    //console.log("Click, debería mostrar el carrito" + carrito)
    contenedorCarrito.className = "mostrar"
    contenedor.className = "ocultar"
}