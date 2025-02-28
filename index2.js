function diferenciaArrays(arr1, arr2) {
    // Filtrar elementos que están en arr1 pero no en arr2
    let ax = arr1.filter(elemento => !arr2.includes(elemento));

    // Filtrar elementos que están en arr2 pero no en arr1
    let bx = arr2.filter(elemento => !arr1.includes(elemento));

    // Retornar los nuevos arrays
    return { ax, bx };
}

// Definir los arrays originales
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = [22, 44, 11, 7, 44, 1, 99];

// Llamar a la función
const { ax, bx } = diferenciaArrays(a, b);

// Mostrar los resultados en consola
console.log("Elementos en 'a' pero no en 'b':", ax);
console.log("Elementos en 'b' pero no en 'a':", bx);
