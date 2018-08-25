const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido '${ base }' no es un número.`.red);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido '${ limite }' no es un número.`.red);
            return;
        }

        let data = '';

        console.log('===================='.green);
        console.log(`==== Tabla de ${ base } ====`.green);
        console.log('===================='.green);

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i }\n`);
        }

        console.log(data.green);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido '${ base }' no es un número.`.red);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido '${ limite }' no es un número.`.red);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i }\n`);
        }

        fs.writeFile(`tablas/Tabla-${ base }-limite-${ limite }.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`Tabla-${ base }-limite-${ limite }.txt`.green);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}