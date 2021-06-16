const argv = require('yargs')
                .options({
                    'b': {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'es la base de la tabla de multiplicar'
                    },
                    'l':{
                        alias: 'listar',
                        type: 'boolean',                        
                        default: false,
                        describe: 'Muestra la tabla en consola'

                    },
                    'c': {
                        alias: 'cantidad',
                        type: 'number',
                        default: 10,
                        describe: 'Es la cantidad de resultados que deseas obtener'

                    }
            })
                .check((argv,options) => {
                    if(isNaN( argv.b )){
                        throw 'la base tiene que ser un numero' 
                    }
                    if(isNaN( argv.c )){
                        throw 'la cantidad tiene que ser un nro' 
                    }

                    return true;
                })
                .argv;
module.exports = argv;