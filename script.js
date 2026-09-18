const greenSlider = document.getElementById('green');
const redSlider = document.getElementById('red');

const greenBox = document.getElementById('greenBox');
const redBox = document.getElementById('redBox');

const greenHex = document.getElementById('greenHex');
const redHex = document.getElementById('redHex');

function toHex(n) {
    const hex = parseInt(n).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

function updateGreen() {
    const value = greenSlider.value;
    const hex = `#00${toHex(value)}00`.toUpperCase();
    greenBox.style.backgroundColor = hex;
    greenHex.textContent = hex;
}

function updateRed() {
    const value = redSlider.value;
    const hex = `#${toHex(value)}0000`.toUpperCase();
    redBox.style.backgroundColor = hex;
    redHex.textContent = hex;
}

greenSlider.addEventListener('input', updateGreen);
redSlider.addEventListener('input', updateRed);

updateGreen();
updateRed();