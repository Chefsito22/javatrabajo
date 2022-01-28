// El estudiante debe generar una salida igual a la de la imagen

for (let i = 0 ; i <=9 ; i++) {
    if (i==0 || i==9) {
        console.log(`**********************`)
    }else{console.log(`*                    *`)}
}

// Ejercicio TzStriker consiste en tomar N numeros y rrecorrelos con un iterador, en este ejercicio deben imprimir segun la condicion.

let cantidad = 45

for(let i = 1; i <= cantidad ; i++) {
    if (i%15==0) {
        console.log(`TzStrike`)
    }else if (i%3==0) {
        console.log(`Tz`)
    }else if (i%5==0) {
        console.log(`Strike`)
    }else{
        console.log(i)
    }

}


//3. Dado el numero deben imprimir la tabla de multiplicar del 1 al 10

let tabla =5


for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla*i}`)
}
