function block1() { //EXERCICIS 1.1: ARROW FUNCTIONS

    //================================ [1] Ex.1 ================================

    const add = (a, b) => a + b;

    console.log("a =", a = 5);
    console.log("b =", b = 7);
    console.log("[1] Ex.1: a + b =", add(a, b));

    //================================ [1] Ex.2 ================================

    const randomNumber = () => (Math.ceil(Math.random() * 100));

    console.log("[1] Ex.2: Número random entre 0 i 100 =", randomNumber());

    //================================ [1] Ex.3 ================================

    class Person {
        constructor(name) {
            this.name = name;
        }
        greet = () => "Hola " + this.name + "!";
    }

    const person1 = new Person("Dani");
    console.log("[1] Ex.3:", person1.greet());

    //================================ [1] Ex.4 ================================

    let arrayNums = [4, 7, 7, 2, 1, 5, 7, 7];
    console.log("[1] Ex.4: Array de números", arrayNums);

    const printNumbers = (array) => {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }

    printNumbers(arrayNums);

    //================================ [1] Ex.5 ================================

    console.log("[1] Ex.5 part 1:", person1.greet());

    const timeoutGreet = setTimeout(() => {
        console.log("[1] Ex.5 part 2: Adéu " + person1.name + " :)");
    }, 3000);
}

function block2() { //EXERCICIS 1.2: OPERADOR TERNARI

    //================================ [2] Ex.1 ================================

    const potConduir = (edad) => {
        return (edad >= 18) ? "Pots conduir" : "No pots conduir";
    }

    console.log("[2] Ex.1: Edad 17 →", potConduir(17));
    console.log("Edad 18 →", potConduir(18));
    console.log("Edad 21 →", potConduir(21));

    //================================ [2] Ex.2 ================================

    const numsComparar = (num1, num2) => {
        return (num1 > num2) ? "El num1 és més gran que num2." : "El num2 és més gran que num1.";
    }

    console.log("[2] Ex.2: Num1 = 17 i Num2 = 4 →", numsComparar(17, 4));
    console.log("Num1 = 7 i Num2 = 14 →", numsComparar(7, 14));

    //================================ [2] Ex.3 ================================

    const numPosNeg = (num) => {
        return (num < 0) ? "és negatiu." : (num === 0) ? "és 0." : "és positiu.";
    }

    console.log("[2] Ex.3 part 1: Núm 0", numPosNeg(0));
    console.log("Núm -9", numPosNeg(-9));
    console.log("Núm 18", numPosNeg(18));

    const trobarMaxim = (a, b, c) => {
        return (a > b && a > c) ? "A és més gran que B i C." : (b > a && b > c) ? "B és més gran que A i C." : "C és més gran que A i B.";
    }

    console.log("[2] Ex.3 part 2: A = 1, B = 2, C = 3 →", trobarMaxim(1, 2, 3));
    console.log("A = 3, B = 2, C = 1 →", trobarMaxim(3, 2, 1));
    console.log("A = 1, B = 3, C = 2 →", trobarMaxim(1, 3, 2));

    //================================ [2] Ex.4 ================================

    let arrayNums2 = [1, 14, 32, 41, 55, 68, 7, 83];
    console.log("[2] Ex.4: Array de números", arrayNums2);

    const parOImpar = (array) => {
        for (let i = 0; i < array.length; i++) {
            console.log((array[i] % 2 == 0) ? array[i] + " és parell." : array[i] + " és imparell.");
        }
    }
    parOImpar(arrayNums2);
}

function block3() { //EXERCICIS 1.3: CALLBACKS

    //================================ [3] Ex.1 ================================

    const procesar = (num, callback) => {
        callback(num);
    }

    procesar(9, (num) => {
        console.log(`[3] Ex.1: El nombre processat és el ${num}.`);
    });

    //================================ [3] Ex.2 ================================

    const suma = (num1, num2, callback) => {
        const resultado = num1 + num2;
        callback(resultado);
    }

    suma(2, 4, (resultado) => {
        console.log(`[3] Ex.2: La suma de 2 i 4 és ${resultado}.`);
    });

    //================================ [3] Ex.3 ================================

    const esperarISaludar = (nom, callback1) => {
        setTimeout(() => {
            callback1(nom);
        }, 2000);
    };

    const callback1 = (nom) => {
        console.log(`[3] Ex.3: Hellooo`, nom);
    }

    esperarISaludar("Dani", callback1);

    //================================ [3] Ex.4 ================================

    const arrayRandom = ["naranja", "300", "verde", "músico", "Estopa", "birra"];
    console.log(`[3] Ex.4: Array random:`, arrayRandom);

    const processarElements = (array, callback2) => {
        for (let i = 0; i < array.length; i++) {
            callback2(array[i]);
        }
    }

    const callback2 = (nom) => {
        console.log(nom);
    }

    processarElements(arrayRandom, callback2);

    //================================ [3] Ex.5 ================================

    const cadena = "supercalifragilisticoespialidoso";
    console.log(`[3] Ex.5: Cadena escollida → ${cadena}`)

    const processarCadena = (cadena, callback3) => {
        callback3(cadena.toUpperCase());
    }

    processarCadena(cadena, (cadena) => {
        console.log(`Cadena de minúscules a majúscules → ${cadena}`);
    })
}

function block4() { //EXERCICIS 1.4: REST & SPREAD OPERATORS

    //================================ [4] Ex.1 ================================

    const array1 = [1, 2, 3, 4, 5];
    const array2 = [6, 7, 8, 9, 10];
    console.log(`[4] Ex.1: array1 →`, array1, ` i array2 →`, array2);

    const array3 = () => {
        return [...array1, ...array2]
    }
    console.log("array3 (array1 + array2) →", array3());

    //================================ [4] Ex.2 ================================

    const suma = (...array) => {

        let resultat = 0;

        for (let i = 0; i < array.length; i++) {
            resultat += array[i];
            console.log(`+ ${array[i]} = ${resultat}`);
        }
        console.log(`La suma del array1 és ${resultat}.`);

        return resultat;
    }

    console.log("[4] Ex.2: array1 →", array1);

    suma(...array1);

    //================================ [4] Ex.3 ================================

    const objecte1 = [10, 9, 8, 7, 6, 5];

    const objecte2 = (objecte) => {
        return [15452, ...objecte, 488, 951, 154];
    }

    console.log(`[4] Ex.3: objecte1 →`, objecte1);
    console.log(`objecte2 →`, objecte2(objecte1));

    //================================ [4] Ex.4 ================================

    const arrayFrutasYVerduras = [`plátano`, `naranja`, `acelgas`, `espinacas`, `lechuga`, `berenjena`];
    console.log(`[4] Ex.4: arrayFrutasYVerduras →`, arrayFrutasYVerduras);

    const separar = (array) => {
        const [first, second, ...rest] = array;

        console.log("variable first:", first);
        console.log("variable second:", second);
        console.log("array amb la resta dels elements:", rest);

        return [first, second, rest];
    }

    separar(arrayFrutasYVerduras);

    //================================ [4] Ex.5 ================================

    const resta = (a, b, c) => {
        return a - b - c;
    }

    const arrayNums = [1, 2, 3];
    console.log(`[4] Ex.5: arrayNums →`, arrayNums);

    console.log(`Funció resta (a-b-c) =`, resta(...arrayNums));

    //================================ [4] Ex.6 ================================

    const createPerson = (name, age, city, country) => {
        return { name, age, city, country };
    }
    const createProfession = (job, industry) => {
        return { job, industry };
    }

    const person1 = createPerson("Dani", 32, "Barcelona", "Spain");
    const person2 = createPerson("Gemma", 34, "Copenhague", "Denmark")
    const profession1 = createProfession("Font-End Developer Junior", "IT");
    const profession2 = createProfession("Dining Room Manager", "Hospitality");

    console.log("[4] Ex.6: person1", person1);
    console.log("person2", person2);
    console.log("profession1", profession1);
    console.log("profession2", profession2);

    const fusion = (person, profession) => {
        return { ...person, ...profession }
    }

    console.log("Fusió person1 i profession1:");
    console.table(fusion(person1, profession1));
    console.log("Fusió person2 i profession2:");
    console.table(fusion(person2, profession2));
}

function block5() { //EXERCICIS 1.5: ARRAY TRANSFORMATIONS

    //================================ [5] Ex.1 ================================

    const array1 = [1, 2, 3, 4];
    console.log("array1 →", array1);

    const arrayQuadrat = array => array.map(num => num * num);

    console.log("[5] Ex.1: array al quadrat →", arrayQuadrat(array1));

    //================================ [5] Ex.2 ================================

    const arrayParell = array => array.filter(num => num % 2 == 0);

    console.log("[5] Ex.2: números parells del array →", arrayParell(array1));

    //================================ [5] Ex.3 ================================

    const array2 = [1, 10, 8, 11];
    console.log("array2 →", array2);

    const arrayMajorA10 = array => array.find(num => num > 10);

    console.log("[5] Ex.3: el primer número major a 10 →", arrayMajorA10(array2));

    //================================ [5] Ex.4 ================================

    const array3 = [13, 7, 8, 21];
    console.log("array3 →", array3);

    const arraySuma = array => array.reduce((acc, num) => acc + num, 0);
    console.log("[5] Ex.4: suma →", arraySuma(array3));

    //================================ [5] Ex.5 ================================

    const array4 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
    console.log("array4 →", array4);

    /*const filtraMultiplicaISuma = (array) => {
        const numsMajorsOIgualsDe10 = array.filter(num => num >= 10);
        const multiplicarPer2 = numsMajorsOIgualsDe10.map(num => num * 2);
        const suma = arraySuma(multiplicarPer2);
        return suma;
    };*/

    const filtraMultiplicaISuma = array =>
        array.filter(num => num >= 10)
            .map(num => num * 2)
            .reduce((acc, num) => acc + num, 0);

    console.log("[5] Ex.5: Suma dels nombres filtrats i multiplicats per 2:", filtraMultiplicaISuma(array4));

    //================================ [5] Ex.6 ================================

    const array5 = [11, 12, 13, 14];
    console.log("array5 →", array5);

    const totsMajorsQue10 = array5.every(num => num > 10);
    console.log("[5] Ex.6 part 1: Tots els números de l'array5 són majors que 10?", totsMajorsQue10);

    const algunsMajorsQue10 = array5.some(num => num > 10);
    console.log("part 2: Hi ha algun número de l'array5 que sigui major que 10?", algunsMajorsQue10);
}

