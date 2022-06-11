"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    let formSearch = document.querySelectorAll('.search');

    formSearch.forEach(form => {
        form.addEventListener("submit", function(e) {
            console.log("entro");
            e.preventDefault();
            search(form.firstElementChild.value);
        });
    })

    function search(searching) {
        window.location.href = "searching.html?" + searching;
    }
}

