const express = require ("express");
const { Router } = express;
let multer = require("multer");
const app = express();
const PORT = 8080;
let FRASE = `Hola clase, bien o que?`;
let personas = [];
let mascotas = []; //arrays

app.use(express.static("public")); //middleware ruta

app.use(express.json());                            //middleware body
app.use(express.urlencoded({extended:true}));

// app.use(multer)



let routerMascotas = new Router();
let routerPersonas = new Router();

function miMiddleware(req, res, next){
    req.name = "Mauro Valdez";
    req.user = {
            "nombre": "franco",
            "apellido": "clementi",
            "edad": "26"
        }

        next();
    } 


app.use(miMiddleware);

routerMascotas.get("/", (req, res, next)=>{
    console.log(req.user);
    res.json(mascotas);    
});
routerMascotas.post("/", (req, res, next)=>{
    mascotas.push(req.body);
    res.json(mascotas);    
});



routerPersonas.get("/", (req, res, next)=>{
     res.json(personas);    
});
routerPersonas.post("/", (req, res, next)=>{
    personas.push(req.body);
    res.json(personas);    
});

app.use("/mascotas", routerMascotas);
app.use("/personas", routerPersonas);


app.listen(PORT, ()=>{
    console.log(`veeee, estamos escuchando esta uri: http://localhost:${PORT}`);
});