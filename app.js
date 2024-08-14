// Contenido de app.js 
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// EURO > DOLLAR
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// DOLLAR > YEN
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInYen = fromDollarToEuro(valueInDollar) * 156.5;
    // Retornamos el valor en yenes
    return valueInYen;
}


// DOLLAR > EURO
const fromDollarToEuro = function(valueInDollar){
    let valueInEuro = valueInDollar / 1.07
    return valueInEuro
}


// YEN > EURO
const fromYenToEuro = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    return valueInEuro * 0.87;
}

// YEN > POUND
const fromYenToPound = function(valueInYen) {
    let valueInEuro = fromYenToEuro(valueInYen);
    return valueInEuro * 0.87;
}

// Exporta la función para usarla en otros archivos
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};
