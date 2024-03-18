let firstValue = Number(prompt("Digite o primeiro valor:"))

let secondValue = Number(prompt("Digite o segundo valor:"))

const sum = firstValue + secondValue
const sub = firstValue - secondValue
const mult = firstValue * secondValue
const div = firstValue / secondValue
const rest = firstValue % secondValue

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${rest}`)

if (sum % 2 === 0) {
  alert(`A soma desses números é Par: ${sum}`)
} else {
  alert(`A soma desses números é Ímpar: ${sum}`)
}
  
if (firstValue != secondValue) {
  alert("Os números inseridos são DIFERENTES")
} else{
  alert("Os números inseridos são IGUAIS")
}