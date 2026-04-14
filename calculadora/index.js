//const readline = require('readline') so funciona no commonjs

import {createInterface } from 'readline'
import{soma, subtracao} from './operacoeMatematicas.js'

const leitor = createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Digite o primeiro número \n>' , (numero1) => {
     
     leitor.question('Digite a operação:\n+: Soma \n-: Subtração\n>', (operacao)=> {

          leitor.question('Digite o segundo número:\n>', (numero2) => {

               //tranformando o num 1 em number pq ele é string

               const num1 = Number(numero1)
               const num2 = Number(numero2)

               let resultado = null

               if(operacao == '+'){
                    resultado = soma(num1, num2)
               }else if(operacao == '-'){
                    resultado = subtracao(num1, num2)
               }else{
                    console.log('Operação inválida!')
               }


               if (resultado !=null){
                    console.log('O resultado da operacao é:', resultado)
               }
               leitor.close()
          })


     })
})