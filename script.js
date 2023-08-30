const container = document.getElementById("container");
const button = document.querySelector('.btn');
let currentColor = "#3498db";
button.addEventListener("click",() => {
    container.innerHTML = "";
    let result = prompt('Enter the number of squares per each side of the grid!');
    if (result!== null && result > 0 && result <= 100) {
        container.style.setProperty('--grid-result', result);
        for (let k = 0; k < result; k++) {
            for (let c = 0; c < result ; c++) {
                let cell = document.createElement("div");
                // cell.innerText = (c + 1);
                container.appendChild(cell).className = "grid-item";
            };            
        };
    } else {
        return alert('Please enter a number between 0 and 100');
    }

});

container.addEventListener("click", function (event) {
    if (event.target.classList.contains("grid-item")) {
      currentColor = getRandomColor();
      event.target.style.backgroundColor = currentColor;
    }
  });

  // Generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

