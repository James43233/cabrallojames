$(function() {
    $(".ProductImg, .ZoomGallery").xzoom({
        zoomWidth: 400, // Corrected property name
        tint: "#333",
        Xoffset: 15, // Corrected property name
    });
});
let decrease = document.querySelector('.decrease');
let increase = document.querySelector('.increase');
let input = document.querySelector('.value');
let listProductHTML = document.querySelector('.ListProducts');

let listProducts = [];


const maxStock = 55; 

increase.addEventListener('click', () => {
    let value = parseInt(input.value);
    if (value < maxStock) {
        value++;
        input.value = value;
    }
});

decrease.addEventListener('click', () => {
    let value = parseInt(input.value);
    if (value > 0) {
        value--;
        input.value = value;
    }
});
