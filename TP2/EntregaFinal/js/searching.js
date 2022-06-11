"use strict";

const games = [
    {
        "name": "Super Mario Bros",
        "image": "images/super mario.jpg"
    },
    {
        "name": "Sonic",
        "image": "images/sonic.jpg"
    },
    {
        "name": "Damas",
        "image": "images/damas.jpg"
    },
    {
        "name": "Dominó",
        "image": "images/domino.jpg"
    },
    {
        "name": "Pacman",
        "image": "images/pacman.jpg"
    },
    {
        "name": "Undertale",
        "image": "images/undertale.jpg"
    },
    {
        "name": "Final Fantasy III",
        "image": "images/finalfantasy.png"
    },
    {
        "name": "Bomberman",
        "image": "images/Bomberman.jpg"
    },
    {
        "name": "Kirby",
        "image": "images/kirby.jpg"
    },
    {
        "name": "Pro Evolution Soccer 2006",
        "image": "images/pes6.jpg"
    },
    {
        "name": "The Leyend of Zelda",
        "image": "images/zelda.jpg"
    },
    {
        "name": "Poker",
        "image": "images/poker.jpg"
    },
    {
        "name": "Crash Bandicoot",
        "image": "images/crash bandicoot.jpg"
    },
    {
        "name": "Pokémon Esmeralda",
        "image": "images/pokemon esmeralda.jpg"
    },
    {
        "name": "Tetris",
        "image": "images/tetris.jpg"
    },
    {
        "name": "Truco",
        "image": "images/truco.jpg"
    },
    {
        "name": "Megaman II",
        "image": "images/megaman.png"
    },
    {
        "name": "Super Smash Bros",
        "image": "images/supersmash.jpg"
    },
    {
        "name": "Solitario",
        "image": "images/solitario.jpg"
    },
    {
        "name": "Ajedrez",
        "image": "images/ajedrez.png"
    },
    {
        "name": "Monopoly",
        "image": "images/monopoly.jpg"
    },
    {
        "name": "Mahjong",
        "image": "images/mahjong.png"
    },
    {
        "name": "Uno",
        "image": "images/uno.jpg"
    },
    {
        "name": "Parchis",
        "image": "images/parchis.png"
    },
    {
        "name": "Bingo",
        "image": "images/Bingo.jpg"
    },
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