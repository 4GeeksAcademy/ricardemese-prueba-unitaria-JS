// Importar la función sum del archivo app.js
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 yen", function() {
    // Importo la función desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(1);

    // Si 1 euro son 1.07 dólares y 1 euro son 156.5 yenes,
    // entonces 1 dólar debería ser (1 / 1.07) * 156.5 yenes
    const expected = (1 / 1.07) * 156.5;

    // Hago mi comparación (la prueba)
    expect(yen).toBeCloseTo(expected, 2); // Ajuste a dos decimales
});

test("15650 yen should be 870 pound", function() {
    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(15650);

    const expected = (15650 / 156.5) * 0.87;

    expect(pound).toBeCloseTo(expected, 2);
});
