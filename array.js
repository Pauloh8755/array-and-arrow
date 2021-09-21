"use strict"

const numeros = [4,3,81,13,20,17]

const soma =vetor=>{
    const somaVetor = new Array
    for(let i = 0; i < vetor.length; i++){
        somaVetor[i] = vetor[i] + 100     
    }
    alert(somaVetor)
}

const numerosPares =vetor=>{
    const pares = new Array
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0){
            pares[i] = numeros[i] + 100   
        } 
    }
    alert(pares)
}

const somaTotal =numeros=>{
    var total = 0
    for(let i = 0; i < numeros.length; i++){     
            total = total + numeros[i] 
    }
    alert(total)
}
soma(numeros)
numerosPares(numeros)
somaTotal(numeros)