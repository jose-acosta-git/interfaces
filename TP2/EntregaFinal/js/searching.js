"use strict";

const games = [
    {
        "name": "Super Mario Bros",
        "image": "../images/super mario.jpg"
    },
    {
        "name": "Sonic",
        "image": "../images/sonic.jpg"
    }
];

document.addEventListener("DOMContentLoaded", init);

function init() {

    let section = document.querySelector('#games-section');
    let titulo = document.querySelector('#titulo-busqueda');

    let search = window.location.search.substring(1).toLowerCase();

    titulo.innerHTML = `"${search}"`;
    
    games.forEach(game => {
        if (game.name.toLowerCase().search(search) > -1)
            addGame(section, game);
    })

    function addGame(section, game) {
        section.innerHTML += `
        <a href='game.html'>
            <div class='card'>
                <img src='${game.image}' alt='${game.name.toLowerCase()}'>
                <h4>${game.name}</h4>
            </div>
        </a>
        `;
    }

}