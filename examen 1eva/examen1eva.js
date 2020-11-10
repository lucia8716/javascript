

//https://www.um.es/docencia/barzana/DAWEB/Desarrollo-de-aplicaciones-web-teoria-formularios-ejemplo-1.html

var pro ={refpro:1,nombrecomun:'primperan',composicion:'Metoclopramida',laboratorio:'Sanofi',preciocompra:3.74,precioventa:3.87,unidades:9};
var pro2 ={refpro:2,nombrecomun:'ibuprofeno',composicion:'ibuprofeno',laboratorio:'Piffer',preciocompra:5.74,precioventa:6.87,unidades:3};
var pro3 ={refpro:3,nombrecomun:'fosrenol',composicion:'lantano',laboratorio:'shire',preciocompra:6.74,precioventa:9.87,unidades:45};
var pro4 ={refpro:4,nombrecomun:'finasterina',composicion:'finasterida',laboratorio:'Piffer',preciocompra:13.74,precioventa:23.87,unidades:14};
var productos =[pro,pro2,pro3,pro4];
var referencia=[];
var contfuncioncompras=0;


function iracompras(){

    document.getElementById("f1").style.visibility = "hidden";
    document.getElementById("f2").style.visibility = "visible";
}



function compras (){
var x1=document.getElementById("i1").value;
if(x1>0&&x1<999999999999){
if (contfuncioncompras==0) {
    referencia.push(x1);
    contfuncioncompras++;
    document.getElementById("i1").value="";
       
} else {
var cont=0;
var comprobar=false;
    for ( i = 0; i < referencia.length; i++) {
        if (x1==referencia[i]) {
            i=referencia.length;
        alert("Nº Referencia se encuentra en bbdd");
        comprobar=true;
        } 
        }

        if(comprobar==false){

            alert("Nº Referencia no se encuentra en bbdd");
            referencia.push(x1);
        }
       





    }

}else{
    document.getElementById("i1").value="";
    document.getElementById("i1").focus();
    alert("incorrecto");
}
}




function visualizar (){

for ( i = 0; i < productos.length; i++) {
    
    document.write(productos[i].refpro+" "+productos[i].nombrecomun+" "+productos[i].composicion+" "+productos[i].laboratorio+" "+productos[i].preciocompra+" "+productos[i].precioventa+" "+productos[i].unidades+"</br>");
    
}


}