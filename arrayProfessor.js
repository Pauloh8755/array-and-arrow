"use stritic"
const numeros = [4,3,81,13,20,17]

//percorrendo vetor com .map e modificando elementos
//callback(elemento, índice, array)
const adiciona100 = (elemento)=>{
    const soma = elemento + 100
    return soma
} 
const soma = numeros.map(adiciona100)
console.log(soma)

//percorrendo vetor com .filter e filtrando conteúdo
//callback(elemento, índice, array)
const ePar = num => num%2 == 0
const numerosPares = numeros.filter(ePar)
console.log(numerosPares)

//percorrendo vetor com .reduce e reduzindo a um valor
//callback(Acumulador, elemento, índice, array)
/*Devemos definir o valor inicial do acumulador:
reduce(função, 0)*/
const somaTotal = (a,b) => a+b 
const total = numeros.reduce(somaTotal, 0)
console.log(total)

//total dos elementos ímpares e pares menores que 20
const eImpar = num => num % 2 == 1
const eMenor20 = num => num<20
const resultado = numeros.filter(eImpar).filter(eMenor20).reduce(somaTotal,0)
console.log(resultado)

//1 - Descontar 20% de cada elemento do array
const desconta20 = num=> num/100*20
const exercicio1 = numeros.map(desconta20)
console.log(exercicio1)

//2 - Somente com multiplos de 3
const multiplo3 =num=> num%3 == 0
const exercicio2 =numeros.filter(multiplo3)
console.log(exercicio2)
