const canvas = document.querySelector(".canvas");

let canvasDimension = 16;

function createCanvas() {
  for (let i = 0; i < canvasDimension; i++) {
    // Use 'let' to properly declare 'i'
    const row = document.createElement("div");
    row.classList.add("row");
    canvas.appendChild(row);
    for (let x = 0; x < canvasDimension; x++) {
      const square = document.createElement("div");
      square.classList.add("square");
      //square.textContent = "s";
      row.appendChild(square);

      // Inverse relationship resulting in the square value 
      // to decrease as canvas gets bigger
      let dimensionValue = 64 / canvasDimension;
      square.style.width = `${dimensionValue}vmin`;
      square.style.height = `${dimensionValue}vmin`;
      // Hover effect
      square.addEventListener("mouseover", () => {
        console.log("Hello!");
        square.style.backgroundColor = "blue";
      });
    }
  }
}

createCanvas();
