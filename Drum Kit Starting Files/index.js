//crash button

// var wBtn = document.querySelector(".w");



// wBtn.addEventListener("click", function(){
//     var audio = new Audio("sounds/crash.mp3");
//     audio.play();
// });



//kick-bass button

// var aBtn = document.querySelector(".a");



// aBtn.addEventListener("click", function(){
//     var audio = new Audio("sounds/kick-bass.mp3");
//     audio.play();
// });


//snare button

// var sBtn = document.querySelector(".s");



// sBtn.addEventListener("click", function(){
//     var audio = new Audio("sounds/snare.mp3");
//     audio.play();
// });



//tom-1 button

// var dBtn = document.querySelector(".d");



// dBtn.addEventListener("click", function(){
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// });


//tom-2 button

// var jBtn = document.querySelector(".j");



// jBtn.addEventListener("click", function(){
//     var audio = new Audio("sounds/tom-2.mp3");
//     audio.play();
// });


//tom-3 button

// var kBtn = document.querySelector(".k");



// kBtn.addEventListener("click", function(){
//     var audio = new Audio("sounds/tom-3.mp3");
//     audio.play();
// });


//tom-4 button

// var lBtn = document.querySelector(".l");



// lBtn.addEventListener("click", function(){
//     var audio = new Audio("sounds/tom-4.mp3");
//     audio.play();
// });

const playDrum = param =>{
    let drum = document.getElementById(param);
    let clicked = document.getElementById(param + "1");
    clicked.classList.add("clicked");



    drum.play();

    setInterval(function (){
        clicked.classList.remove("clicked")},1000)

} 

window.addEventListener('keypress',(event) =>{
    window.addEventListener('keydown', function (e){
        document.querySelector('h3').innerHTML = `you pressed ${e.key}`;
    }, false)

    let k = event.keyCode;
    console.log(k);

    if (k === 119 || k === 87){
        playDrum('w');
    }else if (k === 97 || k === 65){
        playDrum('a');
    }else if (k === 115 || k === 83){
        playDrum('s');
    }else if (k === 68 || k === 100){
        playDrum('d');
    }else if (k === 106 || k === 74){
        playDrum('j');
    }else if (k === 75 || k === 107){
        playDrum('k');
    }else if (k === 108 || k === 76){
        playDrum('l');
    }
})