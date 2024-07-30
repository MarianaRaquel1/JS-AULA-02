let nome = prompt("Qual o seu nome?")
let altura_cm = Number(prompt("informe sua altura em cm"))
let peso = Number(prompt("informe seu peso"))
let altura_m = Number(altura_cm/100)
let IMC = Number(peso/(altura_m*altura_m))

if (IMC < 16){
    console.log(`${nome} seu IMC é de ${IMC}, você está com baixo peso muito grave.`);
}

else if (IMC < 16.99){
    console.log(`${nome} seu IMC é de ${IMC}, você está com baixo peso grave.`);
}

else if (IMC < 18.49){
    console.log(`${nome} seu IMC é de ${IMC}, você está com baixo peso.`);
}

else if (IMC < 24.99){
    console.log(`${nome} seu IMC é de ${IMC}, você está com peso normal.`);
}

else if (IMC < 29.99){
    console.log(`${nome} seu IMC é de ${IMC}, você está com sobrepeso.`);
}

else if (IMC < 34.99){
    console.log(`${nome} seu IMC é de ${IMC}, você está com Obesidade grau I.`);
}

else if (IMC < 39.99){
    console.log(`${nome} seu IMC é de ${IMC}, você está com Obesidade grau II`);
}

else if (IMC >= 40){
    console.log(`${nome} seu IMC é de ${IMC}, você está com Obesidade grau III`);
}

else {
 console.log("Valores inválidos");
}

