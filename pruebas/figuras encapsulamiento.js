console.group("cuadrados");
   function perimetroCuadrado(lado) {
       return lado *4;
   };


   function areaCuadrado(lado) {
    return lado * lado;
};



console.groupEnd();

console.group("triangulos");


    function perimetroTriangulo(lado1,lado2,lado3) {
        return lado1+lado2+lado3;
    }
  

    function areaTriangulo(alto,largo) {
        return (alto*largo)/2;
    }
  

console.groupEnd();