"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    let formSearch = document.querySelector('#search');
    let inputSearcch = document.querySelector('#input-search');

    formSearch.addEventListener("submit", function(e) {
        e.preventDefault();
        search(inputSearcch.value);
    });

    function search(searching) {
        window.location.href = "searching.html?" + searching;
    }
}

