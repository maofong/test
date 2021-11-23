



function calcularPerimetroCuadrado() {
   const input = document.getElementById("inputCuadrado");
   const value = input.value;
   const perimetro = calcularPerimetro(value);
   alert(perimetro);
};


function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
   const value = input.value;
   const area = calcularArea(value);
   alert(area);
};




function calcularPerimetro(num) {
    return num * 4;
};
function calcularArea(num) {
    return num * num;
};





