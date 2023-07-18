let Numero = parseFloat(prompt ("digite um número"))
let numero2 = parseFloat(prompt ("digite outro número"))
let sinal = prompt("digite a operação desejada")

if (sinal == "+"){
    document.write(Numero + numero2)
}
else if (sinal == "-"){
    document.write(Numero - numero2)
}
else if (sinal == "/"){
    document.write(Numero / numero2)
}
else if (sinal == "*"){
    document.write(Numero * numero2)
}
else{
    document.write("sinal inválido")
}