let fs = require ("fs");
let os = require ("os");
//const { json } = require("stream/consumers");

class ManejadorArchivos{
    contructor(url_archivo){
        this.archivo = url_archivo;
    }

async create(data, url){
    try {
        //let insertData = new Date();
        return await fs.promises.writeFile(`${url}`, `${data}`);
    } catch{
        console.log(error);
    }
}


async read(){
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
            let miArchivo = await fs.promises.readFile(`${this.archivo}`);
            let miObj = JSON.parse(miArchivo);
            miObj.author = "Esteban Chavalier";
            miArchivo = JSON.stringify(miObj, null, 2);
            let res = await this.create(miArchivo, "./package.coder.json");
            return res;
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
