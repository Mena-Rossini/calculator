# TECHNOHACKS PROJECT 2 - CALCULATOR :

## DESCRIPTION :
A simple calculator web application built with Basic  HTML, CSS, and JavaScript for performing arithmetic operations. It allows users to input expressions, calculate results, and store the history of operations.

## FEATURES :
* Basic arithmetic operations: addition, subtraction, multiplication, and division.
* **Responsive design** for various screen sizes.
* **Storage of calculation history**.
## SAMPLE CODE :
### index.html:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="icon" href="icon.jpg" />
    <link rel="stylesheet" href="styles.css" />
    <title>Calculator</title>
  </head>
  <body>
    <div class="container">
      <div class="calculator-container">
        <div class="calculator">
          <h1>CALCULATOR</h1>
          <input type="text" name="screen" id="screen" readonly />
          <table>
            <tr>
              <td><button onclick="appendValue('1')">1</button></td>
              <td><button onclick="appendValue('2')">2</button></td>
              <td><button onclick="appendValue('3')">3</button></td>
              <td><button onclick="appendValue('+')">+</button></td>
            </tr>
            <tr>
              <td><button onclick="appendValue('4')">4</button></td>
              <td><button onclick="appendValue('5')">5</button></td>
              <td><button onclick="appendValue('6')">6</button></td>
              <td><button onclick="appendValue('-')">-</button></td>
            </tr>
            <tr>
              <td><button onclick="appendValue('7')">7</button></td>
              <td><button onclick="appendValue('8')">8</button></td>
              <td><button onclick="appendValue('9')">9</button></td>
              <td><button onclick="appendValue('*')">X</button></td>
            </tr>
            <tr>
              <td><button onclick="appendValue('.')">.</button></td>
              <td><button onclick="appendValue('0')">0</button></td>
              <td><button onclick="appendValue('+')">+</button></td>
              <td><button onclick="appendValue('/')">/</button></td>
            </tr>
            <tr>
              <td>
                <button id="clrstorage" onclick="clearStorage()">
                  Clear Storage
                </button>
              </td>
              <td><button onclick="clearDisplay()">C</button></td>
              <td><button onclick="calculate()">=</button></td>
            </tr>
          </table>
        </div>
      </div>

      <div class="storage">
        <h2>Stored Values</h2>
        <div id="stored-values"></div>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
### styles.css :

```
body {
  background-color: #f5f5f5;
  margin: 0;
}

.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.calculator-container {
  margin-right: 20px;
}

.calculator {
  border: 4px solid #3498db;
  background-color: #ecf0f1;
  padding: 23px;
  border-radius: 53px;
  display: inline-block;
  text-align: center;
}

table {
  margin: auto;
}

input {
  border-radius: 21px;
  border: 5px solid black;
  font-size: 34px;
  height: 65px;
  width: 456px;
}

button {
  border-radius: 20px;
  font-size: 40px;
  background: #3498db;
  width: 102px;
  height: 80px;
  margin: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #2980b9;
}

.storage {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  width: 45%;
  box-sizing: border-box;
}

#stored-values {
  font-size: 18px;
  max-height: 200px;
  overflow-y: auto;
  text-decoration: dotted;
}

#clrstorage {
  border-radius: 15px;
  font-size: 1em;
  background: #e74c3c;
  color: white;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease;
}

#clrstorage:hover {
  background: #c0392b;
}
```

### script.js :
```
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
```
## WEBPAGE :
### Calculator Interface :
![2023-11-28 (5)](https://github.com/Mena-Rossini/calculator/assets/102855266/d73aeb14-8a92-4a65-a5c7-ec859ad6521a)
### Working :
![2023-11-28 (6)](https://github.com/Mena-Rossini/calculator/assets/102855266/b6420ea1-8d8d-41e5-93dd-f8c2f9172a35)

