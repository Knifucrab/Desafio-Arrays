
// Desafio 1 - Meses 

const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const listHtml = document.getElementById('listHtml');

function displayMonths() {
    const rows = []
    for (let i = 0; i < months.length; i++) {
        const li = `
        <li>
            ${months[i]}
        </li>
        `
        rows.push(li)
    }
    listHtml.innerHTML = rows.join('')
}

// Desafio 2 - Ciudades

const cities = [];
const ulCities = document.getElementById('ulCities')
const ulSecondCity = document.getElementById('ulSecondCity')

function enterCities() {
    let citiesEntered = prompt('Ingrese una ciudad')
    while (citiesEntered != null && citiesEntered != 0) {
        cities.push(citiesEntered)
        citiesEntered = prompt('Ingrese una ciudad')
    }
    console.log('La cantidad de ciudades ingresadas en el array es: ', cities.length); // Mostrar la cantidad de ciudades ingresadas en el array
    cities.push('Paris')    // Añadir al final del array París

    const firstSecondThirdArray =          // Mostrar en el documento la primera, segunda y ultima ciudad del array
        `
     <h5>Primera, tercera y ultima posicion del array</h5>
    <li class="list-group-item">
    ${cities[0]}
</li>
<li class="list-group-item">
    ${cities[2]}
</li>
<li class="list-group-item">
    ${cities[cities.length - 1]}
</li>
    `
    ulCities.innerHTML = firstSecondThirdArray


    const secondCity = `
    <h5>Segunda posicion del array</h5>
   <li class="list-group-item">
   ${cities[1]}
</li>
   `
    ulSecondCity.innerHTML = secondCity


    cities[1] = 'Barcelona' // Cambiar la segunda posicion de array por Barcelona
    console.log(cities);
}


// Desafio 3 - Dos dados

//  3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let apariciones = []

function dicesThrow() {
    for (let i = 0; i < 50; i++) {

        let firstDice = Math.floor(Math.random() * 6) + 1;
        let secondDice = Math.floor(Math.random() * 6) + 1;
        let throwResult = firstDice + secondDice
        apariciones.push(throwResult)
        console.log(apariciones);
    }
}

// Funciones

// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.



// 1)

function evaluateParity() {
    let numberEntered = parseInt(prompt(''));
     if (numberEntered % 2 == 0){
        alert('El numero ingresado es par')
     } else {
        alert('El numero ingresado no es par')   
     }
}

// 2)

function detectString() {
    let stringEntered = prompt('Ingrese un texto')
    if (stringEntered == stringEntered.toUpperCase()){ 
        alert('El texto ingresado esta escrito en mayusculas')
    } else (stringEntered == stringEntered.toLowerCase()); {
        alert('El texto ingresado esta escrito en minisculas')
    } 
    }

    // Cuando ingreso algo en mayuscula me salen ambas alertas :(

    // 3) Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.  La fórmula del perímetro  es p = 2*(a +b)
    
    function calculatePerimeter() {
        let a = prompt('Ingresar primer lado')
        let b = prompt('Ingresar segundo lado')
        let p = 2*(a+b)
        console.log('El valor del perimetro es: ', p);
    }

    // 4) Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

    let ulMultiplicationTable = document.getElementById('ulMultiplicationTable')
    
    function multiplicationTable() {
        let numberEntered = prompt('Ingrese un numero para ver su tabla de multiplicacion')
        let li = 
        `
     <h5>Tabla de multiplicar</h5>
    <li class="list-group-item">
    ${numberEntered}
</li>
<li class="list-group-item">
    ${numberEntered*2}
</li>
<li class="list-group-item">
    ${numberEntered*3}
</li>
<li class="list-group-item">
    ${numberEntered*4}
</li>
<li class="list-group-item">
    ${numberEntered*5}
</li>
<li class="list-group-item">
    ${numberEntered*6}
</li>
<li class="list-group-item">
    ${numberEntered*7}
</li>
<li class="list-group-item">
    ${numberEntered*8}
</li>
<li class="list-group-item">
    ${numberEntered*9}
</li>
<li class="list-group-item">
    ${numberEntered*10}
</li>

    `
    ulMultiplicationTable.innerHTML = li
    }
