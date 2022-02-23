const contadorNumero = (text, timer = 1000) => {
    return new Promise((resolve, reject) => {
        const words = text.split("");
        let counter = 0;
        let sti = setInterval(() => {
            if(words[counter]) {
                console.log(words[counter]);
                counter++
            }
            else {
                clearInterval(sti);
                console.log('terminado')
            }
        },timer)
    })
}

contadorNumero('hola',1000);





