const contenedorAccesorios = document.querySelector(".contenedor-divs-accesorio");

const mostrarAccesorios = () => {

    accesorios.forEach((accesorio) => {

        const div = document.createElement("div");
        div.classList.add("div-accesorio");
        div.innerHTML = `<h4>${accesorio.nombre}</h4> <img src="${accesorio.imagen}">`;
        contenedorAccesorios.appendChild(div);
    });

    body.append(contenedorAccesorios);

}

const init = () => {
    mostrarAccesorios();
}

init();