import contentLibrary from "./mantras.js";

// let piece = document.querySelector('.piece');
// let author = document.querySelector('.author')
// let origin = document.querySelector('.origin')

// let N = parseInt(Math.random() * contentLibrary.length);
// console.log(N);
// piece.innerText = contentLibrary[N].piece;
// author.innerText = contentLibrary[N].author;
// origin.innerText = contentLibrary[N].origin;

const getRandomMantra = () => contentLibrary[Math.floor(Math.random() * contentLibrary.length)];

const displayMantra = ({piece, author, origin}) => {
    console.log({piece, author, origin});
    document.querySelector('.piece').textContent = piece;
    document.querySelector('.author').textContent = author;
    document.querySelector('.origin').textContent = origin;
};

displayMantra(getRandomMantra())