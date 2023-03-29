let pago;
//alert("ingrese nombre en español")
pago = prompt("ingre nombre en español");

switch(pago)
{
 case"casa":
  console.log("home");
  break;
  case "mesa":
  console.log("table:",pago);
  break;
  case "perro":
    document.write("dog:",pago);
   break
   case"gato":
   console.log("can:",pago);
   default:
    console.log("opcio no disponible");
    break;


}
