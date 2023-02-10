console.log('___Seja Bem-Vindo A Barbearia DEUS É FIEL___');

const readline = require('readline-sync');
let cortes = [
    {tipo: 'social', valor: 15.00}, 
    {tipo: 'degrade ', valor: 20.00} ,
    {tipo:'moicano', valor: 20.00},
    {tipo: 'militar' , valor: 15.00}
]

console.log('__________ TABELA DE CORTES____________');

cortes.forEach(function(corte){
    console.log(`O corte ${corte.tipo} está no valor de : ${corte.valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} `)

});

var corte = readline.question(`Qual seu corte de cabelo ? `)


