// Função para atualizar o visor da calculadora
function updateScreen(value) {
  document.getElementById("calculator-screen-input").value = value;
}

// Função para realizar o cálculo
function calculate() {
  var expression = document.getElementById("calculator-screen-input").value;
  var result = eval(expression); // Use eval com cuidado, pois pode representar riscos de segurança
  updateScreen(result);
}

// Função para limpar o visor
function clearScreen() {
  updateScreen("");
}

// Adicionando eventos aos botões da calculadora
document.getElementById("calculate-button").addEventListener("click", calculate);
document.getElementById("clear-button").addEventListener("click", clearScreen);

// Adicionando eventos aos botões de número e operador
var numberButtons = document.getElementsByClassName("number");
for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", function() {
    var currentScreenValue = document.getElementById("calculator-screen-input").value;
    var buttonValue = this.value;
    updateScreen(currentScreenValue + buttonValue);
  });
}

var operatorButtons = document.getElementsByClassName("operator");
for (var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", function() {
    var currentScreenValue = document.getElementById("calculator-screen-input").value;
    var buttonValue = this.value;
    updateScreen(currentScreenValue + " " + buttonValue + " ");
  });
}

// Função para mostrar a página selecionada e atualizar o menu
function MostrarPagina(pagina) {
  // Esconde todas as páginas
  var pages = document.getElementsByClassName("page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }

  // Mostra a página selecionada
  document.getElementById(pagina).style.display = "block";

  // Atualiza a classe "active" no menu
  var menuItems = document.getElementsByTagName("a");
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("active");
  }

  var selectedMenuItem = document.querySelector('a[href="#"][onclick="MostrarPagina(\'' + pagina + '\')"]');
  if (selectedMenuItem) {
    selectedMenuItem.classList.add("active");
  }
}
function calculateIMC(event) {
  event.preventDefault(); // Impede o envio do formulário

  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  // Verifica se os campos estão preenchidos
  if (height && weight) {
    var heightMeters = height / 100; // Converte altura para metros
    var bmi = weight / (heightMeters * heightMeters); // Calcula o IMC

    // Exibe o resultado na tela
    document.getElementById("result").textContent = "Seu IMC é: " + bmi.toFixed(2);
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// Adiciona o evento de submit ao formulário
var form = document.getElementById("imcForm");
form.addEventListener("submit", calculateIMC);