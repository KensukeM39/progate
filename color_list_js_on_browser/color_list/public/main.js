const testElement = document.getElementById("test");
testElement.innerHTML = "Good!";

const ulElement = document.getElementById("colors");

const colors = ["blue", "orange", "green"];
let ulText = "";
for (let i = 0; i < colors.length; ++i) {
  const color = colors[i];
  let backColor;
  if (i % 2 === 0) {
    backColor = "#EEE";
  } else {
    backColor = "#FFF";
  }
  ulText += `<li style="color: ${color}; background-color: ${backColor}">${color}</li>`;
}

ulElement.innerHTML = ulText;
