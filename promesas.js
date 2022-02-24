let fs = require ("fs");
let os = require ("os");
//const { json } = require("stream/consumers");

class ManejadorArchivos{
    contructor(url_archivo){
        this.archivo = url_archivo;
    }

    read(){
        try{
            // asincronico con callback
            //return fs.readFile(`${this.archivo}`, //'utf-8', (err, contenido)=>{
            //    if(err){
            //        throw new Error(err);
            //    }
            //    this.consolePrint(contenido);
                //console.log(contenido);
            //});
        
            // asincronico con promesas
            return fs.promises.readFile(`${this.archivo}`, 'utf-8', (err, contenido)=>{
                if(err){
                    throw new Error(err);
                }
                this.consolePrint(contenido);
                //console.log(contenido);
            });
        } catch (error){
            console.log(error);
        }
    }
    consolePrint(data = ''){
        let obj = JSON.parse(data);
        console.log(size);
        const info = {
            obj,
            string: data,
            size: fs.statSync(this.archivo).size 
        }
        console.log("-------------------------");
        console .log(info);
        
    }
}

let controlador = new ManejadorArchivos('./package.json');
let res = controlador.read();
console.log(res);
