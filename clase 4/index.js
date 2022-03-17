const { response } = require("express");
const express = require ("express");
const app = express();
const PORT = 8080;
let FRASE = `Hola clase, bien o que?`;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//EJERCICIO 3 

app.post("/api/palabras", (req, res, next)=>{
    let { palabra } = req.body;  
    let frase = FRASE.split(" ");
    frase.push(palabra);
    FRASE = frase.join(" ");
    res.json({
        "agregada": palabra,
        "pos": frase.length
    })
    // res.json({response:respuesta});
});


app.put("/api/palabras/:pos", (req, res, next)=>{
    let { palabra } = req.body;  
    let { pos } = req.params;   
    let pos_f = Number(pos) - 1;
    let frase = FRASE.split(" ");
    let anterior = frase[pos_f];
    frase.splice(pos_f, 1, palabra); //actualizamos el array en un campo
    frase.push(palabra);
    FRASE = frase.join(" ");
    res.json({
        "actualizada": palabra,
        anterior,
        "frase": FRASE
    })
    // res.json({response:respuesta});
});

app.delete("/api/palabras/:pos", (req, res, next)=>{
    let { palabra } = req.body;  
    let { pos } = req.params;   
    let pos_f = Number(pos) - 1;
    let frase = FRASE.split(" ");
    frase.splice(pos_f, 1); //actualizamos el array en un campo
    FRASE = frase.join(" ");
    res.json({
        "frase": FRASE
    })
    // res.json({response:respuesta});
});





//EJERCICIO 2
app.get("/api/sumar/:num1/:num2", (req, res, next)=>{
    let {num1, num2} = req.params;
    res.json({response:`El total de la suma entre ${num1} y ${num2} es ${(Number(num1) + Number(num2))}`});
});

app.get("/api/sumar", (req, res, next)=>{
     let {num1, num2} = req.query;
    res.json({response:`El total de la suma entre ${num1} y ${num2} es ${(Number(num1) + Number(num2))}`});
});

app.get("/api/operacion/:op", (req, res, next)=>{
    let {op} = req.params;
    let numbers = op.split("+");
    res.json({response:`El total de la suma entre ${numbers[0]} y ${numbers[1]} es ${(Number(numbers[0]) + Number(numbers[1]))}`});
});


// ------------------------------------------
app.post("/api", (req, res, next)=>{
    res.json({response:"Todo ok desde POST"});
});

app.delete("/api", (req, res, next)=>{
    res.json({response:"TODO OK DESDE DELETE"});
});

app.put("/api", (req, res, next)=>{
    res.json({response:"todo ok desde put"});
});




//EJERCICIO 1 

app.get("/api/frase", (req, res, next)=>{
    res.json({response:FRASE});
});

app.get("/api/letras/:num", (req, res, next)=>{
    let { num } = req.params;
    let respuesta = null;    
    if(Number(num)){
        let frase = FRASE.split("");
        let final_num = Number(num) - 1;
        if(final_num > frase.length){
             respuesta = "el parametro esta fuera del rango!";
        }else{
            respuesta = frase[final_num];
        }
    }else{
        respuesta = "el parametro no es un número!";
    }
    res.json({response:respuesta});
});

app.get("/api/palabras/:num", (req, res, next)=>{
    let { num } = req.params;
    let respuesta = null;    
    if(Number(num)){
        let frase = FRASE.split(" ");
        let final_num = Number(num) - 1;
        if(final_num > frase.length){
             respuesta = "el parametro esta fuera del rango!";
        }else{
            respuesta = frase[final_num];
        }
    }else{
        respuesta = "el parametro no es un número!";s
    }
    res.json({response:respuesta});
});


app.listen(PORT, ()=>{
    console.log(`veeee, estamos escuchando esta uri: http://localhost:${PORT}`);
});