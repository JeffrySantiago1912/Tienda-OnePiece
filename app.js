
//Contiene los personajes
let personajes = {

    data: [

        {
            nombreProducto: "Monkey D' Luffy",
            categoria: "Luffy",
            precio: "65",
            imagenSrc: "estilos/images/Luffy1.jpg",
        },

        {
            nombreProducto: "D' Luffy Pro",
            categoria: "Luffy",
            precio: "85",
            imagenSrc: "estilos/images/Luffy2.jpg",
        },

        {
            nombreProducto: "Luffy Action",
            categoria: "Luffy",
            precio: "125",
            imagenSrc: "estilos/images/luff3.jpg",
        },

        {
            nombreProducto: "Zoro",
            categoria: "Zoro",
            precio: "60",
            imagenSrc: "estilos/images/zoro1.jpg",
        },

        {
            nombreProducto: "Zoro Action",
            categoria: "Zoro",
            precio: "96",
            imagenSrc: "estilos/images/zoro2.jpg",
        },

        {
            nombreProducto: "Sanji Pro",
            categoria: "Sanji",
            precio: "65",
            imagenSrc: "estilos/images/sanji1.jpg",
        },

        {
            nombreProducto: "Sanji Classic",
            categoria: "Sanji",
            precio: "75",
            imagenSrc: "estilos/images/sanji2.jpg",
        },

        {
            nombreProducto: "Ace Profesional",
            categoria: "Ace",
            precio: "100",
            imagenSrc: "estilos/images/ace1.jpg",
        },

        {
            nombreProducto: "Ace Classic",
            categoria: "Ace",
            precio: "115",
            imagenSrc: "estilos/images/ace2.jpg",
        },

        {
            nombreProducto: "Nico Robin",
            categoria: "NicoRobin",
            precio: "83",
            imagenSrc: "estilos/images/nicoRobin1.jpg",
        },

        {
            nombreProducto: "Nami",
            categoria: "Nami",
            precio: "76",
            imagenSrc: "estilos/images/nami1.png",
        },

        {
            nombreProducto: "God Usopp",
            categoria: "Usopp",
            precio: "95",
            imagenSrc: "estilos/images/usopp1.jpg",
        },

        {
            nombreProducto: "Chopper",
            categoria: "Chopper",
            precio: "95",
            imagenSrc: "estilos/images/chooper1.jpg",
        },

        {
            nombreProducto: "Gol D' Roger",
            categoria: "Roger",
            precio: "200",
            imagenSrc: "estilos/images/rogerr.webp",
        },

    ],
};

//Recorrer datos
for(let i of personajes.data){

    //Crear tarjeta
    let tarjeta = document.createElement("div");


    //Agregando cateoria a la tarjeta - la tarjeta debe tener una categoría y debe permanecer oculta inicialmente
    tarjeta.classList.add("tarjeta", i.categoria, "hide");


    //Imagen contenedora
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");


    ///Elemento que muestra la imagen de los "datos"
    let imagenTag = document.createElement("img");
    imagenTag.setAttribute("src", i.imagenSrc);
    

    //Insentar imagen en el contenedor
    imgContainer.appendChild(imagenTag);


    //insentar el contenedor en la tarjeta
    tarjeta.appendChild(imgContainer);


    //Contenedor General
    let container = document.createElement("div");
    container.classList.add("container");



     //Nombre del personaje - Vinculacion con nombrePersonaje
    let nombre = document.createElement("h4");
    nombre.classList.add("product-name");
    nombre.innerText = i.nombreProducto.toLocaleUpperCase();
    container.appendChild(nombre);


    //Precio
    let precioValor = document.createElement("h3");
    precioValor.innerText = "$" + i.precio;
    container.appendChild(precioValor);


    //Insentar el nombre a la tarjeta
    tarjeta.appendChild(container); 


    //Recuperando div del HTML
    document.getElementById("products").appendChild(tarjeta);
}


//Funcion - Tarjeta por categoria
function filtrarProductos(value) {

    let buttons = document.querySelectorAll(".button-value");

    buttons.forEach(button =>{
      
        //Verificar si el valor es igual al texto interno
        if(value.toLocaleUpperCase() == button.innerText.toLocaleUpperCase()){
            button.classList.add("active");
        }
        
        else {
            button.classList.remove("active");
        }

    });

    
    //Seleccionar todas las tarjetas
    let elements = document.querySelectorAll(".tarjeta");


    //Recorrer todas las tarjetas
    elements.forEach((element) => {

        
        //Mostrar tarjetas cuando de click en "all"
        if(value == "all") {
            element.classList.remove("hide");
        }

        else {

            //Verificar si el elemento contiene una clase de categoria
            if(element.classList.contains(value)){

                //Mostrar en base a la categoria
                element.classList.remove("hide");  
            }

            else {
              //Ocultar otros elementos
              element.classList.add("hide");
            }
        }

    });

}


//Buscar por el boton
document.getElementById("search").addEventListener("click", () => {

    //Inicializacion
    let buscarInput = document.getElementById("search-input").value;
    
    let elementoo = document.querySelectorAll(".product-name");

    let tarjetas = document.querySelectorAll(".tarjeta");


    //Recorrer todos los elementos
    elementoo.forEach((element, index) => {

        //Comprobar si el texto incluye el valor de busqueda
        if(element.innerText.includes(buscarInput.toLocaleUpperCase())){
            
            //Mostrar la tarjeta
            tarjetas[index].classList.remove("hide");
        }

        else {
            //Ocultar las que no fue seleccionada   
            tarjetas[index].classList.add("hide");
        }
    })
});

//Mostrar inicialmente todos los productos
window.onload = () => {
  
    filtrarProductos("all");
}