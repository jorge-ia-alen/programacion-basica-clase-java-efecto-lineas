var d = document.getElementById("canvas-items");
var ellienzo = d.getContext("2d");
var lineas = 50;
var l = 0;
var yi, xf;
var colora = "rgb(81, 255, 0)";

for(l=0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colora, 0, yi, xf, 500);
    dibujarLinea(colora, 500, yi, xf, 0);
    console.log("linea" + 1);
}

dibujarLinea(colora, 499,1,0,1);
dibujarLinea(colora, 499,1,499,499);
dibujarLinea(colora, 1,1,0,499);
dibujarLinea(colora, 1,499,499,499);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    ellienzo.beginPath();
    ellienzo.strokeStyle = color;
    ellienzo.moveTo(xinicial, yinicial);
    ellienzo.lineTo(xfinal, yfinal);
    ellienzo.stroke();
    ellienzo.closePath();
}

