const images = [
    "KYOMI.png",
    "LANGUAGE.png",
    "SECOND_LANGUAGE.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style = `background-image: url("img/${chosenImage}")`;