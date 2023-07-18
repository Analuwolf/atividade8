let numero = parseInt(prompt("digite seu saldo bancário"))
let compra = parseInt(prompt("digite o valor da compra que deseja realizar"))

if(compra <= numero){
   document.write(numero - compra)}
else {document.write("Saldo insuficiente")}

