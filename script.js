let indiceImagen = 0;

function moverCarrusel(direccion) {
    const carrusel = document.querySelector('.carrusel-imagenes');
    const totalImagenes = document.querySelectorAll('.imagen-carrusel').length;

    indiceImagen += direccion;

    // Asegúrate de que el índice esté dentro del rango
    if (indiceImagen < 0) {
        indiceImagen = totalImagenes - 1;
    } else if (indiceImagen >= totalImagenes) {
        indiceImagen = 0;
    }

    // Mueve el carrusel
    carrusel.style.transform = `translateX(-${indiceImagen * 100}%)`; // Cambiado a % para que funcione mejor

    // Actualiza los puntos
    actualizarPuntos();
}

function irALaImagen(indice) {
    indiceImagen = indice;
    const carrusel = document.querySelector('.carrusel-imagenes');
    carrusel.style.transform = `translateX(-${indiceImagen * 100}%)`; // Cambiado a %
    actualizarPuntos();
}

function actualizarPuntos() {
    const puntos = document.querySelectorAll('.punto');
    puntos.forEach((punto, index) => {
        if (index === indiceImagen) {
            punto.classList.add('activo');
        } else {
            punto.classList.remove('activo');
        }
    });
}

let indiceImagenMovil = 0;

function moverCarruselMovil(direccion) {
    const carruselMovil = document.querySelector('.carrusel-imagenes-movil');
    const totalImagenesMovil = document.querySelectorAll('.imagen-carrusel-movil').length;

    indiceImagenMovil += direccion;

    // Asegúrate de que el índice esté dentro del rango
    if (indiceImagenMovil < 0) {
        indiceImagenMovil = totalImagenesMovil - 1;
    } else if (indiceImagenMovil >= totalImagenesMovil) {
        indiceImagenMovil = 0;
    }

    // Mueve el carrusel
    carruselMovil.style.transform = `translateX(-${indiceImagenMovil * 100}%)`;

    // Actualiza los puntos
    actualizarPuntosMovil();
}

function irALaImagenMovil(indice) {
    indiceImagenMovil = indice;
    const carruselMovil = document.querySelector('.carrusel-imagenes-movil');
    carruselMovil.style.transform = `translateX(-${indiceImagenMovil * 100}%)`;
    actualizarPuntosMovil();
}

function actualizarPuntosMovil() {
    const puntosMovil = document.querySelectorAll('.punto-movil');
    puntosMovil.forEach((punto, index) => {
        if (index === indiceImagenMovil) {
            punto.classList.add('activo');
        } else {
            punto.classList.remove('activo');
        }
    });
}


