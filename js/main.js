const contenedorProductos = document.querySelector(".productos");
const url = "./productos.json";
const contenedorModeloUno = document.querySelector(".imagenesModeloUno");
const contenedorModeloDos = document.querySelector(".imagenesModeloDos");
// const imgInfo = document.querySelector(".imagenInfo");
// const imgInfo2 = document.querySelector(".imagenInfo2");



const mostrarProductos = ()=>{

    // fetch(url)
    // .then((res)=>res.json())
    // .then((productos)=>{

        kayaks.forEach((kayak)=>{

            const div = document.createElement("div");
            div.classList.add("divProductos")
            div.innerHTML = `
            <img src="${kayak.imagen}" style="height:200px">
            <h4 class="modelo">${kayak.modelo}</h4>
            <h4 class="precio">$${kayak.precio}</h4>`

            contenedorProductos.appendChild(div);
        })
    // })
}

const mostrarModelos = () => {

    contenedorModeloUno.innerHTML = `<img src="${kayaks[0].imagen}"> <img src="${kayaks[0].imagen2}"> <img src="${kayaks[0].imagen3}"> <img src="${kayaks[0].imagen4}"></img> <img src="${kayaks[0].imagen5}"> <img src="${kayaks[0].imagen6}">`;

    contenedorModeloDos.innerHTML = `<img src="${kayaks[1].imagen}"> <img src="${kayaks[1].imagen2}"> <img src="${kayaks[1].imagen3}"> <img src="${kayaks[1].imagen4}"></img> <img src="${kayaks[1].imagen5}"> <img src="${kayaks[1].imagen6}">`;
}

// const mostrarModal1 = () => {

//     $('#ventanaInfoModelo1').modal();
// }

// const clickImagenes = () => {

//     imgInfo.addEventListener("click", () => {

//         mostrarModal1();
//     })
// }

function init(){
    // mostrarProductos()
    mostrarModelos();
    // clickImagenes();

}

init();