// main.js

// TODO
var image = document.getElementById("volume-image");
var number = document.getElementById("volume-number");
var slider = document.getElementById("volume-slider");
var audio = document.getElementById("horn-sound");

var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn");
var partyHorn = document.getElementById("radio-party-horn");

var selection = document.getElementById("audio-selection");
var hornImage = document.getElementById("sound-image");

var honk = document.getElementById("honk-btn");

honk.addEventListener("click", function(event) {
    audio.play();
    event.preventDefault();
});

selection.oninput = function() {
    if (airHorn.checked) {
        hornImage.src = "./assets/media/images/air-horn.svg";
        audio.src = "./assets/media/audio/air-horn.mp3"
    } else if (carHorn.checked) {
        hornImage.src = "./assets/media/images/car.svg";
        audio.src = "./assets/media/audio/car-horn.mp3"
    } else {
        hornImage.src = "./assets/media/images/party-horn.svg";
        audio.src = "./assets/media/audio/party-horn.mp3"
    }
}

slider.oninput = function() {
    number.value = slider.value;
    audio.volume = slider.value / 100;

    if (slider.value == 0) {
        image.src = "./assets/media/icons/volume-level-0.svg";
    } else if (slider.value >= 1 && slider.value <= 33) {
        image.src = "./assets/media/icons/volume-level-1.svg";
    } else if (slider.value >= 34 && slider.value <= 66) {
        image.src = "./assets/media/icons/volume-level-2.svg";
    } else {
        image.src = "./assets/media/icons/volume-level-3.svg";
    }

    if (audio.volume == 0) {
        honk.disabled = true;
    } else {
        honk.disabled = false;
    }
}

number.oninput = function() {
    slider.value = number.value;
    audio.volume = slider.value / 100;

    if (number.value == 0) {
        image.src = "./assets/media/icons/volume-level-0.svg";
    } else if (number.value >= 1 && slider.value <= 33) {
        image.src = "./assets/media/icons/volume-level-1.svg";
    } else if (number.value >= 34 && slider.value <= 66) {
        image.src = "./assets/media/icons/volume-level-2.svg";
    } else {
        image.src = "./assets/media/icons/volume-level-3.svg";
    }

    if (audio.volume == 0) {
        honk.disabled = true;
    } else {
        honk.disabled = false;
    }
}