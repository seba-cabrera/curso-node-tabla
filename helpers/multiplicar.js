const fs = require('fs');
const colors = require('colors');


 const crearArchivo = async (base, cantidad = 10, listar) => {

   try{

       
        let salida = '';
        let consola= '';

        for (let i = 1; i <= cantidad; i++){

            salida = salida + `${base} x ${i} = ${base*i}\n`;
            consola = consola + `${colors.green(base)} ${colors.red('x')} ${colors.green(i)} ${colors.gray('=')} = ${colors.black(base*i)}\n`;
        }
        
        


        if(listar){
            console.log('=========================='.green);
            console.log(`       Tabla del ${base}`.red);
            console.log('=========================='.green);
        
            console.log(consola);
            //console.log(colors.green('%s'), salida);
        }    
        
            
            fs.writeFileSync(`./archivos/tabla-${base}.txt`, salida);    
            
            return (`tabla-${base}.txt`);
       
   }catch(err){
        throw err;
   }

    
}

module.exports = {
    crearArchivo
}
