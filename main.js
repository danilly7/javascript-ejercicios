function block1() { //EXERCICIS 1.1: ARROW FUNCTIONS

    //================================ (1) Ex.1 ================================

    const add = (a, b) => a + b;

    console.log("a =", a = 5);
    console.log("b =", b = 7);
    console.log("(1) Ex.1: a + b =", add(a, b));

    //================================ (1) Ex.2 ================================

    const randomNumber = () => (Math.ceil(Math.random() * 100));

    console.log("(1) Ex.2: Número random entre 0 i 100 =", randomNumber());

    //================================ (1) Ex.3 ================================

    class Person {
        constructor(name) {
            this.name = name;
        }
        greet = () => "Hola " + this.name + "!";
    }

    const person1 = new Person("Dani");
    console.log("(1) Ex.3:", person1.greet());

    //================================ (1) Ex.4 ================================

    let arrayNums = [4, 7, 7, 2, 1, 5, 7, 7];
    console.log("(1) Ex.4: Array de números", arrayNums);

    const printNumbers = (array) => {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }

    printNumbers(arrayNums);

    //================================ (1) Ex.5 ================================

    console.log("(1) Ex.5 part 1:", person1.greet());

    const timeoutGreet = setTimeout(() => {
        console.log("(1) Ex.5 part 2: Adéu " + person1.name + " :)");
    }, 3000);

}

function block2() { //EXERCICIS 1.2: OPERADOR TERNARI

    //================================ (2) Ex.1 ================================

    const potConduir = (edad) => {
        return (edad >= 18) ? "Pots conduir" : "No pots conduir";
    }

    console.log("(2) Ex.1: Edad 17 -", potConduir(17));
    console.log("(2) Ex.1: Edad 18 -", potConduir(18));
    console.log("(2) Ex.1: Edad 21 -", potConduir(21));

    //================================ (2) Ex.2 ================================

    const numsComparar = (num1, num2) => {
        return (num1 > num2) ? "El num1 és més gran que num2." : "El num2 és més gran que num1.";
    }

    console.log("(2) Ex.2: Num1 = 17 i Num2 = 4 →", numsComparar(17, 4));
    console.log("(2) Ex.2: Num1 = 7 i Num2 = 14 →", numsComparar(7, 14));

    //================================ (2) Ex.3 ================================

    const numPosNeg = (num) => {
        return (num < 0) ? "és negatiu." : (num === 0) ? "és 0." : "és positiu.";
    }

    console.log("(2) Ex.3 part 1: Núm 0", numPosNeg(0));
    console.log("(2) Ex.3 part 1: Núm -9", numPosNeg(-9));
    console.log("(2) Ex.3 part 1: Núm 18", numPosNeg(18));

    const trobarMaxim = (a, b, c) => {
        return (a > b && a > c) ? "A és més gran que B i C." : (b > a && b > c) ? "B és més gran que A i C." : "C és més gran que A i B.";
    }

    console.log("(2) Ex.3 part 2: A = 1, B = 2, C = 3 →", trobarMaxim(1, 2, 3));
    console.log("(2) Ex.3 part 2: A = 3, B = 2, C = 1 →", trobarMaxim(3, 2, 1));
    console.log("(2) Ex.3 part 2: A = 1, B = 3, C = 2 →", trobarMaxim(1, 3, 2));

    //================================ (2) Ex.4 ================================

    let arrayNums2 = [1, 14, 32, 41, 55, 68, 7, 83];
    console.log("(2) Ex.4: Array de números", arrayNums2);

    const parOImpar = (array) => {
        for (let i = 0; i < array.length; i++) {
            console.log((array[i] % 2 == 0) ? array[i] + " és parell." : array[i] + " és imparell.");
        }
    }
    parOImpar(arrayNums2);
}

function block3(){ //EXERCICIS 1.3: CALLBACKS

}