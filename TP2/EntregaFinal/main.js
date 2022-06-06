window.onload = function() { //cuando la ventana haya cargado por completo se ejecuta la funcion
    setTimeout(removeLoading, 750);

    function removeLoading() {
        $("#onload").fadeOut();
        $("body").removeClass("hidden");
    }  
} 

