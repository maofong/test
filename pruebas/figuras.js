console.group("cuadrados");
    const ladoCuadrado = 5;
    console.log("los lados del cuadrado miden " + ladoCuadrado +"cm");

    const perimetroCuadrado = ladoCuadrado * 4;
    console.log("el perimetro del cuadrado es " + perimetroCuadrado +"cm");

    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log("el area del cuadrado es " + areaCuadrado +"cm2");
console.groupEnd();

console.group("triangulos");
    const ladoTriangulo1 = 6;
    const ladoTriangulo2 = 6;
    const ladoTriangulo3 = 4;

    const areaTriangulo = ladoTriangulo1+ladoTriangulo2+ladoTriangulo3;

    console.log("los lados del triangulo miden "+ 
        ladoTriangulo1+ " "+
        ladoTriangulo2+ " "+
        ladoTriangulo3+ "siendo su area " +
        areaTriangulo
        );
console.groupEnd();