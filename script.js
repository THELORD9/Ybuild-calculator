const screen = document.querySelector(".screen");

function displaytoappend(input) {
    screen.innerHTML += input;
}

function clearscreen() {
    screen.innerHTML = "";
}

function calculate() {
    screen.innerHTML = eval(screen.innerHTML);
}