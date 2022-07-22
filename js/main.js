const contenedorProductos = document.querySelector(".productos");
const contenedorModeloUno = document.querySelector(".imagenesModeloUno");
const contenedorModeloDos = document.querySelector(".imagenesModeloDos");


const mostrarModelos = () => {
    
    contenedorModeloUno.innerHTML = `<img src="${kayaks[0].imagen}"> <img src="${kayaks[0].imagen2}"> <img src="${kayaks[0].imagen3}"> <img src="${kayaks[0].imagen4}"></img> <img src="${kayaks[0].imagen5}"> <img src="${kayaks[0].imagen6}" class="imgConInfo">`;

    contenedorModeloDos.innerHTML = `<img src="${kayaks[1].imagen}"> <img src="${kayaks[1].imagen2}"> <img src="${kayaks[1].imagen3}"> <img src="${kayaks[1].imagen4}"></img> <img src="${kayaks[1].imagen5}"> <img src="${kayaks[1].imagen6}" class="imgConInfo">`;
}


function init(){
    mostrarModelos();
}

init();