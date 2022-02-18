const fs = require('fs');

const multiplicar = async ( base ) => {

    try {
        let salida = '';
        for (let i = 0; i < 11; i++) {
            salida += `${base} * ${i} = ${base*i}\n`;
        }
    
        fs.writeFileSync(`table-${base}.txt`, salida);
        return('file created!')
        
    } catch (err) {
        throw err
    }
}

module.exports = {
    multiplicar
}