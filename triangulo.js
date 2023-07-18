let lado = prompt("Digite o valor do lado do triangulo")
let lado2 = prompt("Digite o valor do outro lado")
let lado3 = prompt("Digite o valor do ultimo lado")

if(lado == lado2 && lado2 == lado3){
    document.write("Triângulo equilátero")
}
else if(lado != lado2 && lado != lado3 && lado2 != lado3){
    document.write("Triângulo Escaleno")
} 
else {
    document.write("Triângulo Isósceles")
}