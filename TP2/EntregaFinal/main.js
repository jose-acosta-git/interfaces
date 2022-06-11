window.onload = function() { //cuando la ventana haya cargado por completo se ejecuta la funcion
    setTimeout(removeLoading, 1000);

    function removeLoading() {
        $("#onload").fadeOut();
        $("body").removeClass("hidden");
    }  
}

var botonFlecha = document.getElementById('botonFlecha');
var filtros = document.getElementById("seccionFiltros");

botonFlecha.addEventListener("click", desplegarMenu);

function desplegarMenu() {
    $(filtros).toggle();
}

