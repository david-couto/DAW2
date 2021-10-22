var fecha_actual = new Date();
var dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
var meses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
console.log("Hoy es dia "+fecha_actual.getDate()+" , "+dias[fecha_actual.getDay()]+" , de "+meses[fecha_actual.getMonth()]+" de "+fecha_actual.getFullYear()+" y son las "+fecha_actual.getHours()+":"+fecha_actual.getMinutes()+":"+fecha_actual.getSeconds());

//Ejercicio 2

/*var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
console.log(today);
*/

// Ejercico 2
var date2 = new Date(2020,9,3,16,5);
console.log(date2);
console.log(date2.getDate()+" de "+meses[date2.getMonth()]+" de "+date2.getFullYear()+" , "+fecha_actual.getHours()+":"+fecha_actual.getMinutes()+":"+fecha_actual.getSeconds());

//Ejercicio3 
fecha_actual_local=fecha_actual.toLocaleString();
console.log(fecha_actual_local);
date2_local=date2.toLocaleString();
console.log(date2_local);

//Ejercicio 4
var inicio= Date.now();
 prompt("Introduce tu nombre ");
var tiempo = (Date.now()-inicio)/1000;
alert("Has tardado "+tiempo+" segundos en escribir tu nombre")

//Ejercicio 5

var anio = prompt("Introduce un año ");
var mes = prompt("Introduce un mes(numero)");
// De esta manera , inicializando con 0 nos da el ultimo dia del mes anterior, y como los meses empiezan por cero
// pues ese sera el mes que hemos ingresado, y podremos ver cuantos dias tiene de manera sencilla
var fecha_3 = new Date(anio,(parseInt(mes)),0);
var cadena=meses[fecha_3.getMonth()]+" -- "+fecha_3.getFullYear()+": ";
var num_dias=fecha_3.getDate();
console.log(fecha_3);
for(let i=1; i<= num_dias;i++){
    fecha_3.setDate(i);
    cadena+=i+"("+dias[fecha_3.getDay()]+"), ";
}
console.log(cadena);