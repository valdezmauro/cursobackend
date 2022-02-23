let fs = require ("fs");
let os = require ("os");
//const { json } = require("stream/consumers");

class ManejadorArchivos{
    contructor(url_archivo){
        this.archivo = url_archivo;
    }

    read(){
        try{
            return fs.readFileSync(`${this.archivo}`, 'utf-8');
        } catch (error){
            console.log(error);
        }
    }
}

let controlador = new ManejadorArchivos("./fyh.txt");
let res = controlador.read();
console.log(res);
