const slider = document.getElementById("s-range");
const rColor = document.getElementById("r-range");
const gColor = document.getElementById("g-range");
const bColor = document.getElementById("b-range");
const scaler = document.getElementById("scaler");
const scaleCounter = document.getElementById("scaleCounter");
const shape = document.getElementById("shape");

shape.style.backgroundColor = `rgb(${rColor.value}, ${gColor.value}, ${bColor.value})`;
shape.style.width = `${scaler.value}rem`;
shape.style.aspectRatio = "1/1";

slider.addEventListener("input", () => {
    const radiusValue = slider.value;
    shape.style.borderRadius = radiusValue + "px";
})

const updateColor = () => {
    const rValue = rColor.value;
    const gValue = gColor.value;
    const bValue = bColor.value;
    shape.style.backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`; // Update background color
};

// Event listeners for color inputs
rColor.addEventListener("input", updateColor);
gColor.addEventListener("input", updateColor);
bColor.addEventListener("input", updateColor);

const updateScale = () => {
    const scaleValue = scaler.value;
    shape.style.width = `${scaleValue}rem`;
    shape.style.aspectRatio = "1/1";
    scaleCounter.innerText = `Scale Counter: ${scaleValue}`;
}

scaler.addEventListener("input", updateScale);

