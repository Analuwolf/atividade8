let salario = parseFloat(prompt("Digite o salário do colaborador"))

if (salario <= 280.0){
   percentual = 0.2
}
else if (salario > 280.0 && salario <= 700.0){
    percentual = 0.15
}
else if (salario > 700.0 && salario <= 1500.0){
    percentual = 0.1
}
else if (salario > 1500.0){
    percentual = 0.05
}

var percentual  // O percentual vc define de acordo com o salario

let aumento = salario * percentual

let newSalario = salario + aumento

document.write("Salário antigo: " + salario + "<br>")
document.write("Percentual de aumento: " + (percentual * 100) + "%<br>")
document.write("Valor incrementado: " + aumento + "<br>")
document.write("Novo salario: " + newSalario + "<br>")
