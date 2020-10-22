// http://chuwiki.chuidiang.org/index.php?title=Expresiones_regulares_en_javascript
//https://uniwebsidad.com/libros/javascript/capitulo-7/validacion
//https://code.tutsplus.com/es/tutorials/8-regular-expressions-you-should-know--net-6149



var y=0;
var w=0;
var m=0;
var filter6=/^([a-zA-Z])*$/;
var filter7=/^([0-9])*$/;
var filter8=/^([a-zA-Z])/;
var filter9=/^([a-zA-Z0-9º/\s]*$)/;
var ver=new boolean(true);
var valicoches=false;
var cont=0;



function coches($z){

nom=$z;
if (nom=="1") {

document.getElementById("in11").style.visibility = "visible";
document.getElementById("numcoches").style.visibility = "visible";

} 

if (nom=="2"){
document.getElementById("in11").style.visibility = "hidden";
document.getElementById("numcoches").style.visibility = "hidden";
valicoches=true;
}




}

function numerocoches(){

 
tlfn=document.getElementById("in11").value;

if (tlfn>2000||tlfn<1) {

  alert("Numero incorrecto, introduzca un numero real");
  document.getElementById("in11").value="";
      document.getElementById("in11").focus();
  
}

}



function validar (){
  
  

  var v1=document.getElementById("in11").value;
    
if ((document.getElementById("in11").style.visibility =="visible")&&(v1.length==0)) {
  
  alert("Rellene un numero de coches");
   
        }



if ((document.getElementById("in11").style.visibility =="visible")&&(v1.length>0)) {
  valicoches=true;
}  

if (valicoches!=true) {

  
  alert("Selecciones si dispone de coches");
  cont++;
  alert(cont);

  
  }
 


if (valicoches==true){
  alert("Ha rellenado su formulario correctamete");

  window.location.reload();
  
  }
 







}




