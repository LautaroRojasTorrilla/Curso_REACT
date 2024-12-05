
// TEMPLATE STRING

const nombre = 'Lautaro';
const apellido = 'Rojas Torrilla';

const nombreCompleto = `
${nombre}
${apellido}
${1+1}
`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Esta es un texto: ${getSaludo(nombre)}`);