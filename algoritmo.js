
function calcularPromedio(){

let parcial1 = parseInt( document.getElementById("parcial1").value);
let parcial2 = parseInt(document.getElementById("parcial2").value);
let parcial3 = parseInt(document.getElementById("parcial3").value);
let examen = parseInt(document.getElementById("examen").value);
let trabajo = parseInt(document.getElementById("trabajo").value);
   
let porcentaje1 = ((parcial1 + parcial2 + parcial3)/3)*0.55;
let porcentaje2 = (examen * 0.30);
let porcentaje3 = (trabajo * 0.15);

let notaFinal = porcentaje1 + porcentaje2 + porcentaje3;
document.getElementById("notaFinal").innerHTML ="su nota es: " + notaFinal;
}