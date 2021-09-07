// Código del cuadrado
console.group("Cuadrado");

function PerimetroCuadrado(lado) {
    
    return lado * 4
};

function AreaCuadrado(lado) {
    return lado * lado    
}

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function PerimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function AreaTriangulo(base, altura) {
    return (base * altura) / 2;    
};

console.groupEnd(); 

// Código del Círculo
console.group("Círculo");

const Pi = Math.PI;

function DiametroCirculo(radio) {
    return radio * 2;
}

function PerimetroCirculo(radio) {
    const DiametroCirculo = DiametroCirculo(radio);
    return (DiametroCirculo) * Pi;
}

function AreaCirculo(radio) {
    return (radio * radio) * Pi
}

console.groupEnd();

// Funciones formulario Cuadrado
function CalcularPerimetroCuadrado() {
    const InputArea = document.getElementById("txtAreaCuadrado")

    alert(PerimetroCuadrado(InputArea.value))    
    
}
function CalcularAreaCuadrado() {
    const InputArea = document.getElementById("txtAreaCuadrado")

    alert(AreaCuadrado(InputArea.value))
}