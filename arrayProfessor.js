"use stritic"
const numeros = [4,3,81,13,20,17]

//percorrendo vetor com .map e modificando elementos
//callback(elemento, índice, array)
const adiciona100 = (elemento)=>{
    const soma = elemento + 100
    return soma
} 
const soma = numeros.map(adiciona100)
alert(soma)

//percorrendo vetor com .filter e filtrando conteúdo
//callback(elemento, índice, array)
const ePar = num => num%2 == 0
const numerosPares = numeros.filter(ePar)
alert(numerosPares)

//percorrendo vetor com .reduce e reduzindo a um valor
//callback(Acumulador, elemento, índice, array)
/*Devemos definir o valor inicial do acumulador:
reduce(função, 0)*/
const somaTotal = (a,b) => a+b 
const total = numeros.reduce(somaTotal, 0)
alert(total)

//total dos elementos ímpares e pares menores que 20
const eImpar = num => num % 2 == 1
const eMenor20 = num => num<20
const resultado = numeros.filter(eImpar).filter(eMenor20).reduce(somaTotal,0)

alert(resultado)