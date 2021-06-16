
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

                

// imprimir la tabla del 5 en la consola
console.clear();
// const [, , arg3='base=5'] = process.argv;

// const [, base=5] = arg3.split('=');



console.log( argv );
console.log('base yargs: ', argv.base)
//const base=5;




crearArchivo( argv.b ,argv.c, argv.l )
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));
