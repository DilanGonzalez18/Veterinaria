var Fecha = {

    //Dia:parseInt(prompt("ingrese numero")),
    //Mes:parseInt(prompt("inrese mes")),
    Navidad:null,
    num:null,
    eleggir:null,

Numeroalatorio:function(){
    
    let num= parseInt(prompt("ingrese un numero"))
    let elegir=parseInt(Math.random()*10)+1;
    document.write(Fecha.eleggir);
    if(Fecha.num==Fecha.eleggir){
       alert("acento al numero");    
    }else{
        alert("suigue intentando");
    }

}

}
Fecha.calcularaño();

