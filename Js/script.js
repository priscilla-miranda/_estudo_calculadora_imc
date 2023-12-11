function imc(){

let usuario = window.prompt("Digite seu nome: ");
let peso = Number(window.prompt("Digite seu peso:").replace(",","."));
let altura = Number(window.prompt("Digite sua altura:").replace(",","."));

dados = ("<h3>Nome:</h3>" + usuario + "<br>"  + "<h3>Peso:</h3>" + peso + "kg" + "<br>" + "<h3>Altura:</h3>" + altura + "cm" + "<br>");

document.write("<h1>Resultado:</h1>" + dados + "<br>");

let imc = Number(peso/(altura*altura));
 document.write("<h1>Seu IMC:<h1>" + imc + "<br>");

 if(imc < 18.5){
    document.write("<h3> Classificação de IMC: <h3>" + "Magro");
 } else if (imc < 25){
    document.write("<h3>Classificação de IMC:<h3>" + "Normal");
 } else if (imc < 30){
    document.write("<h3>Classificação de IMC:<h3>" + "Sobrepeso");
 } else if (imc < 35){
    document.write("<h3>Classificação de IMC:<h3>" + "Obesidade grau I");
 } else if (imc < 40){
    document.write("<h3>Classificação de IMC:<h3>" + "Obesidade grau II");
 } else if(imc > 40){
    document.write("<h3>Classificação de IMC:<h3>" + "Obesidade grau III");
 }
}
