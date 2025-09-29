import contentLibrary from "./mantras.js";

// let piece = document.querySelector('.piece');
// let author = document.querySelector('.author')
// let origin = document.querySelector('.origin')

// let N = parseInt(Math.random() * contentLibrary.length);
// console.log(N);
// piece.innerText = contentLibrary[N].piece;
// author.innerText = contentLibrary[N].author;
// origin.innerText = contentLibrary[N].origin;

function getRandomMantra() {
    const mantra = contentLibrary[Math.floor(Math.random() * contentLibrary.length)];
    console.log('Selected mantra:', mantra);
    let indexM = contentLibrary.indexOf(mantra)
    console.log(indexM);
    return mantra;
}

function displayMantra({piece, author, origin}) {
    // console.log({piece, author, origin});
    document.querySelector('.piece').textContent = piece;
    document.querySelector('.author').textContent = author;
    document.querySelector('.origin').textContent = origin;
};

displayMantra(getRandomMantra())

const btnRefresh = document.getElementById("btnRefresh");
console.log(btnRefresh);

btnRefresh.addEventListener("click", () => {
    const newMantra = getRandomMantra();
    displayMantra(newMantra);
});