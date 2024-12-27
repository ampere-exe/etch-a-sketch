const canvas = document.querySelector(".canvas");
const input = document.querySelector("input");
const enter = document.querySelector(".enter");
let canvasDimension = 16;

enter.addEventListener("click", () => {
  let canvasDimension = parseInt(input.value, 10); // Parse input value as a number
  if (isNaN(canvasDimension) || canvasDimension <= 0) {
    console.error("Please enter a valid positive number!");
    return;
  }
  console.log(canvasDimension);
  canvas.innerHTML = ""; // Clear the canvas before creating a new one
  createCanvas(canvasDimension); // Pass the dimension to the function
});

const red = document.querySelector(".red");
const blue = document.querySelector(".blue");

function createCanvas(canvasDimension = 16) {
  for (let i = 0; i < canvasDimension; i++) {
    // Use 'let' to properly declare 'i'
    const row = document.createElement("div");
    row.classList.add("row");
    canvas.appendChild(row);

    for (let x = 0; x < canvasDimension; x++) {
      const square = document.createElement("div");
      square.classList.add("square");

      // Inverse relationship resulting in the square value
      // to decrease as canvas gets bigger
      let dimensionValue = 64 / canvasDimension;
      square.style.width = `${dimensionValue}vmin`;
      square.style.height = `${dimensionValue}vmin`;

      let colorBlue = false;
      let colorRed = true;

      red.addEventListener("click", () => {
        colorRed = true;
        colorBlue = false;
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#c62828";
          });
      });

      blue.addEventListener("click", () => {
        colorBlue = true;
        colorRed = false;
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#1565c0";
          });
      });


      row.appendChild(square);
    }
  }
}
