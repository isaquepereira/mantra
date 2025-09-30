import contentLibrary from "./mantras.js";

let lastMantraIndex = -1;

function getRandomMantra() {
    let index;
    do {
        index = Math.floor(Math.random() * contentLibrary.length);
    } while (index === lastMantraIndex);
    lastMantraIndex = index;
    console.log("Selected mantra index:", index);
    return contentLibrary[index];
}

function renderMantra({piece, author, origin}) {
    // console.log({piece, author, origin});
    document.querySelector('.piece').textContent = piece;
    document.querySelector('.author').textContent = author;
    document.querySelector('.origin').textContent = origin;
};

renderMantra(getRandomMantra());


// Refresh Button
const btnRefresh = document.getElementById("btnRefresh");
btnRefresh.addEventListener("click", () => {
    renderMantra(getRandomMantra());
});