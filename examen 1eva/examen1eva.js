

//https://www.um.es/docencia/barzana/DAWEB/Desarrollo-de-aplicaciones-web-teoria-formularios-ejemplo-1.html

var pro ={refpro:1,nombrecomun:'primperan',composicion:'Metoclopramida',laboratorio:'Sanofi',preciocompra:3.74,precioventa:3.87,unidades:9};
var pro2 ={refpro:2,nombrecomun:'ibuprofeno',composicion:'ibuprofeno',laboratorio:'Piffer',preciocompra:5.74,precioventa:6.87,unidades:3};
var pro3 ={refpro:3,nombrecomun:'fosrenol',composicion:'lantano',laboratorio:'shire',preciocompra:6.74,precioventa:9.87,unidades:45};
var pro4 ={refpro:4,nombrecomun:'finasterina',composicion:'finasterida',laboratorio:'Piffer',preciocompra:13.74,precioventa:23.87,unidades:14};
var productos =[pro,pro2,pro3,pro4];
var referencia=[1,2,3,4];
var contfuncioncompras=0;
var filtronum=/^[0-9]+(\.[0-9]{1,2})*$/;
var filtrolet=/^(?!.* (?: |$))[a-z ]+$/;
var filnumenteros=/^([0-9])*$/;

function iracompras(){

    document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f2").style.visibility = "visible";
    document.getElementById("i1").value="";
    document.getElementById("i1").focus();
}

function iraltanueva(){
    document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f2").style.visibility = "hidden";
    document.getElementById("f3").style.visibility = "visible";
}
function compras (){
var x1=document.getElementById("i1").value;
var verx1=filnumenteros.test(x1);


if (verx1==true) {
    
} else {
    document.getElementById("i1").value="";
    document.getElementById("i1").focus();
    alert("Nº Referencia no valido");
    
}


if(x1>0&&x1<999999999999&&verx1==true){
var comprobar=false;
    for ( i = 0; i < referencia.length; i++) {
        if (x1==referencia[i]) {
            
        alert("Nº Referencia se encuentra en bbdd");
        comprobar=true;
        document.getElementById("i9").value=productos[i].refpro;
        document.getElementById("i10").value=productos[i].nombrecomun;
        document.getElementById("i11").value=productos[i].composicion;
        document.getElementById("i12").value=productos[i].laboratorio;
        document.getElementById("i13").value=productos[i].preciocompra;
        document.getElementById("i14").value=productos[i].precioventa;
        document.getElementById("i15").value=productos[i].unidades;        
        i=referencia.length;
        document.getElementById("f1").style.visibility = "hidden";
        document.getElementById("f2").style.visibility = "hidden";
        document.getElementById("f3").style.visibility = "hidden";
        document.getElementById("f4").style.visibility = "visible";


        } 
        }

        if(comprobar==false){

            alert("Nº Referencia no se encuentra en bbdd");
            referencia.push(x1);
            iraltanueva();
            document.getElementById("i2").value=document.getElementById("i1").value;
        }

}else{document.getElementById("i1").value="";
document.getElementById("i1").focus();
alert("Nº Referencia no valido");}
}

function altanueva(){
    
    x2=document.getElementById("i2").value;
    x3=document.getElementById("i3").value;
    x4=document.getElementById("i4").value;
    x5=document.getElementById("i5").value;
    x6=document.getElementById("i6").value;
    x7=document.getElementById("i7").value;
    x8=document.getElementById("i8").value;

    
    x3=x3.toLowerCase();
    verx3=filtrolet.test(x3);
    x4=x4.toLowerCase();
    verx4=filtrolet.test(x4);
    x5=x5.toLowerCase();
    verx5=filtrolet.test(x5);
    verx6=filtronum.test(x6);
    verx7=filtronum.test(x7);
    verx8=filnumenteros.test(x8);
    
    if (verx3==true) {
        
    } else {
        document.getElementById("i3").value="";
     }

     if (verx4==true) {
        
    } else {
        document.getElementById("i4").value="";
     }

     if (verx5==true) {
        
    } else {
        document.getElementById("i5").value="";
     }
     
     if (verx6==true) {
        
    } else {
        document.getElementById("i6").value="";
     }

     if (verx7==true) {
        
    } else {
        document.getElementById("i7").value="";
     }

     if (verx8==true) {
        
    } else {
        document.getElementById("i8").value="";
     }


     x7=parseFloat(x7).toFixed(2);
     x6=parseFloat(x6).toFixed(2);

if (document.getElementById("i7").value<=document.getElementById("i6").value) {
    alert("El precio de venta no puede ser menor o igual al precio de compra")
    document.getElementById("i7").value="";
}

if (document.getElementById("i8").value<=0) {
    alert("Las unidades de compra tienen que ser superiores a 0")
    document.getElementById("i8").value="";
}


if ((x8.length==0||document.getElementById("i8").value<=0)||(x7.length==0||document.getElementById("i7").value<=0)||(x6.length==0||document.getElementById("i6").value<=0)||(x5.length==0||verx5==false)||(x4.length==0||verx4==false)||(x3.length==0||verx3==false)) {

alert("Faltan campos por rellenar correctamente");

} else {

var pro4 ={refpro:x2,nombrecomun:x3,composicion:x4,laboratorio:x5,preciocompra:x6,precioventa:x7,unidades:x8};

productos.push(pro4);

alert("Compra del medicamento realizada correctamente");
document.getElementById("i2").value="";
document.getElementById("i3").value="";
document.getElementById("i4").value="";
document.getElementById("i5").value="";
document.getElementById("i6").value="";
document.getElementById("i7").value="";
document.getElementById("i8").value="";
document.getElementById("i1").value="";
document.getElementById("i1").focus();
document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f2").style.visibility = "visible";
    document.getElementById("f3").style.visibility = "hidden";

}

}


function salir(){
    document.getElementById("f1").style.visibility = "visible";
    document.getElementById("f2").style.visibility = "hidden";
    document.getElementById("f3").style.visibility = "hidden";


}


function compraryaregistrado(){
var x1=document.getElementById("i9").value;  
var x16=document.getElementById("i16").value;
varvalx16=filnumenteros.test(x16);



if ((x16.length==0||varvalx16==false||x16<1)) {

    document.getElementById("i16").value="";
document.getElementById("i16").focus();

alert("Introduzca un numero valido")
    
} else {

    for (i = 0; i < referencia.length; i++) {
    
        if (x1==productos[i].refpro) {
                        
            productos[i].unidades=Number(productos[i].unidades)+Number(x1);
            i=referencia.length;
        }
    }

alert("Compra realizada con existo");

document.getElementById("i9").value="";
document.getElementById("i10").value="";
document.getElementById("i11").value="";
document.getElementById("i12").value="";
document.getElementById("i13").value="";
document.getElementById("i14").value="";
document.getElementById("i15").value="";
document.getElementById("i16").value="";
document.getElementById("i1").value="";
document.getElementById("i1").focus();

document.getElementById("f1").style.visibility = "hidden";
document.getElementById("f2").style.visibility = "visible";
document.getElementById("f3").style.visibility = "hidden";
document.getElementById("f4").style.visibility = "hidden";



   
    
}

}



function visualizar (){

for ( i = 0; i < productos.length; i++) {
    
    document.write(productos[i].refpro+" "+productos[i].nombrecomun+" "+productos[i].composicion+" "+productos[i].laboratorio+" "+productos[i].preciocompra+" "+productos[i].precioventa+" "+productos[i].unidades+"</br>");
    
}


}