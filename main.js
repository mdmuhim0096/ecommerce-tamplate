let manue = document.getElementById("hambarger");
let navbar = document.getElementById("navbar");
manue.addEventListener("click", ()=>{
    navbar.style.right = "0px";
});

let close = document.getElementById("close");
close.addEventListener("click", ()=>{
    navbar.style.right = "-310px";
})

/*==== HEADER NAVBAR ====*/



/*=====SINGLE PRODUCT SECTION======*/

let child1 = document.getElementById("child_img_1");
let child2 = document.getElementById("child_img_2");
let child3 = document.getElementById("child_img_3");
let child4 = document.getElementById("child_img_4");
let mainImg = document.getElementById("mainImage");

let imageArry = ["img/tshirt.png","img/t-1.png","img/t-2.png","img/T-Shirt-.png"];
function productOne(){
    mainImg.src = imageArry[0];
}
function productTwo(){
    mainImg.src = imageArry[1];
}
function productThree(){
    mainImg.src = imageArry[2];
}
function productFour(){
    mainImg.src = imageArry[3];
}

/*======= SINGLE PRODUCT PAGE LINK =======*/
const product_1 = () =>{
    window.location.href = "signle.html";
}
const product_2 = () =>{
    window.location.href = "signle.html";
}
const product_3 = () =>{
    window.location.href = "signle.html";
}
const product_4 = () =>{
    window.location.href = "signle.html";
}
const product_5 = () =>{
    window.location.href = "signle.html";
}
const product_6 = () =>{
    window.location.href = "signle.html";
}
const product_7 = () =>{
    window.location.href = "signle.html";
}
const product_8 = () =>{
    window.location.href = "signle.html";
}
const product_9 = () =>{
    window.location.href = "signle.html";
}
const product_10 = () =>{
    window.location.href = "signle.html";
}
const product_11 = () =>{
    window.location.href = "signle.html";
}
const product_12 = () =>{
    window.location.href = "signle.html";
}
const product_13 = () =>{
    window.location.href = "signle.html";
}
const product_14 = () =>{
    window.location.href = "signle.html";
}
const product_15 = () =>{
    window.location.href = "signle.html";
}
const product_16 = () =>{
    window.location.href = "signle.html";
}

function addToCart(){
    let select = document.getElementById("input_counter");
    let val = select.value;
    console.log(val);
}
