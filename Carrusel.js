const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".carruseles");

//btnLeft.addEventListener("click",e => moveToLeft())
btnRight.addEventListener("click",e => moveToRight())

setInterval(() => {
    moveToRight()
},3000);

let operation=0,
    counter=0,
    widthImg=100/sliderContainer.length;

function moveToRight(){
    if(counter>=sliderContainer.length-1){
        counter=0;
        operation=0;
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = `none`;
        return
    }
    counter++;
    operation=operation+widthImg;
    slider.style.transform = `translate(-${operation}%)`;
    slider.style.transition = `all 0.5s`;
    }

function moveToLeft(){
    counter--;
    if(counter<0){
        counter=sliderContainer.length-1;
        operation=100;
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = `none`;
        return
    }
    operation=operation-widthImg;
    slider.style.transform = `translate(-${operation}%)`;
    slider.style.transition = `all 0.5s`;
}

