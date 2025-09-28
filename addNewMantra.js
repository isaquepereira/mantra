import contentLibrary from "./mantras.js";

let piece = document.getElementById('piece').value;
let author = document.getElementById('author').value;
let origin = document.getElementById('origin').value;
let saveBtn = document.getElementById('save-btn');

let newMantra = {
    piece: piece,
    author: author,
    origin: origin
};

saveBtn.addEventListener('click',saveMantra);

function saveMantra() {
    console.log(contentLibrary);
    contentLibrary.push(newMantra);
    console.log(contentLibrary);
};