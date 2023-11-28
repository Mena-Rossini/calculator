function appendValue(value) {
  document.getElementById("screen").value += value;
}

function calculate() {
  try {
    const expression = document.getElementById("screen").value;
    const result = eval(expression);
    document.getElementById("screen").value = result;

    // Store the full operation and result in the storage
    const storedValuesDiv = document.getElementById("stored-values");
    const operationItem = document.createElement("div");
    operationItem.textContent = `${expression} = ${result}`;
    storedValuesDiv.appendChild(operationItem);
  } catch (error) {
    clearDisplay();
    alert("Invalid expression");
  }
}

function clearDisplay() {
  document.getElementById("screen").value = "";
}

function clearStorage() {
  document.getElementById("stored-values").innerHTML = "";
}
