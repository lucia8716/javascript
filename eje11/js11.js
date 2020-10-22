// http://chuwiki.chuidiang.org/index.php?title=Expresiones_regulares_en_javascript
//https://uniwebsidad.com/libros/javascript/capitulo-7/validacion
//https://code.tutsplus.com/es/tutorials/8-regular-expressions-you-should-know--net-6149


var nom;
var ape;
var ndni;
var letradni;
var calle;
var cp;
var tlfn;
var y=0;
var w=0;
var m=0;
var filter6=/^([a-zA-Z])*$/;
var filter7=/^([0-9])*$/;
var filter8=/^([a-zA-Z])/;
var filter9=/^([a-zA-Z0-9º/\s]*$)/;
var ver=new boolean(true);
var verapellido=new boolean(true);
var verapellido2=new boolean(true);
var vernumdni=new boolean(true);
var verletdni=new boolean(true);
var vercalle=new boolean(true);
var vercp=new boolean(true);
var versec=new boolean(true);
var valiestacivil=new boolean("false");
var valiestahijos=new boolean("false");
var valiestalabora=new boolean("false");
var valivacaciones=new boolean("false");
var validomicilio=new boolean("false");
var valicoches=new boolean("false");
var valinombre=new boolean("false");
var valiap1=new boolean("false");
var valiap2=new boolean("false");
var validni=new boolean("false");
var validniletra=new boolean("false");
var validireccion=new boolean("false");
var valicp=new boolean("false");
var valitelefono=new boolean("false");
var valifecha=new boolean("false");
var valnumhijos=new boolean("false");
var valnumcoches=new boolean("false");
var valisector=new boolean("false");



function mario(){

nom=document.getElementById("in2").value;

                       
                       ver=filter6.test(nom);
                        
                        if(ver==true&&nom.length>1){
                          nom=nom.toLowerCase();
                          
                          valinombre=true;
                                
                        }
                        else{
                                alert("Debes introducir un nombre válido");
                                
                                document.getElementById("in2").value="";
                                document.getElementById("in2").focus();
                                
                           
                        }

}


function mario2(){

  ape=document.getElementById("in3").value;
  verapellido=filter6.test(ape);
  if(verapellido==true&&ape.length>1){
    ape=ape.toLowerCase();
    valiap1=true;
                          
                          
                                
                        }
                        else{
                                alert("Debes introducir un apellido válido");
                                
                                document.getElementById("in3").value="";
                                document.getElementById("in3").focus();
                                
                           
                        }

}


function mario3(){

ape=document.getElementById("in12").value;
verapellido2=filter6.test(ape);
if(verapellido2==true&&ape.length>1){
  ape=ape.toLowerCase();
  valiap2=true;
                        
                              
                      }
                      else{
                              alert("Debes introducir un apellido válido");
                              
                              document.getElementById("in12").value="";
                              document.getElementById("in12").focus();
                              
                         
                      }

}

function compnumdni()
{
ndni=document.getElementById("in4").value;

vernumdni=filter7.test(ndni);
  if(vernumdni==true&&ndni.length<9){
    validni=true;
    
                          
                         
                                
                        }
                        else{
                                alert("Debes introducir un numero con formato válido");
                                
                                document.getElementById("in4").value="";
                                document.getElementById("in4").focus();
}

}



function completradni() {


letradni=document.getElementById("in5").value;
verletdni=filter8.test(letradni);

if(verletdni==true&&letradni.length==1){
  validniletra=true;
                        
  
        
}
else{
        alert("Debes introducir un letra con formato válido");
        
        document.getElementById("in5").value="";
        document.getElementById("in5").focus();
}

}

function compcalle(){
  calle=document.getElementById("in6").value;
  vercalle=filter9.test(calle);

  if(vercalle==true&&calle.length>5){
    validomicilio=true;
    validireccion=true;
  
        
}
else{
        alert("Debes introducir una calle con formato válido");
        
        document.getElementById("in6").value="";
        document.getElementById("in6").focus();
}
}

function codigop(){

  cp=document.getElementById("in7").value;
  

  if(cp>999&&cp<53000){
  
             valicp=true;           
 
        
}
else{
        alert("Debes introducir una cp con formato válido");
        
        document.getElementById("in7").value="";
        document.getElementById("in7").focus();
}
}


function telefono (){

  tlfn=document.getElementById("in8").value;


  if ((tlfn.charAt(0)==9||6||7)&&tlfn.length==9){

    valitelefono=true;




  }else{
    alert("Telefono no valido Debes introducir una numero con formato correcto");
        
        document.getElementById("in8").value="";
        document.getElementById("in8").focus();


  }

}

function estadocivil(){

  valiestacivil=true;
 

  

}




function hijos($i){

  nom=$i;
if (nom=="SI") {
  
  document.getElementById("in9").style.visibility = "visible";
  document.getElementById("hij2").style.visibility = "visible";
  
  
  
} 

if (nom=="NO") {
  document.getElementById("in9").style.visibility = "hidden";
  document.getElementById("hij2").style.visibility = "hidden";
  document.getElementById("in9").value="";
  valiestahijos=true;
  
  
}






}

function numerohijos(){

 
  tlfn=document.getElementById("in9").value;

  if (tlfn>15||tlfn<1) {

    alert("Numero incorrecto, introduzca un numero real");
    document.getElementById("in9").value="";
        document.getElementById("in9").focus();
    
  }

}

function laboral($m){

nom=$m;
if (nom=="1") {

document.getElementById("in10").style.visibility = "visible";
document.getElementById("sector").style.visibility = "visible";



} 

if (nom=="2"){
document.getElementById("in10").style.visibility = "hidden";
document.getElementById("sector").style.visibility = "hidden";

valiestalabora=true;


}


}


function sector(){

  sec=document.getElementById("in10").value;
  versec=filter6.test(sec);

  if(versec==true&&sec.length>4){
    
  
        
}
else{
        alert("Debes introducir un sector con formato válido");
        
        document.getElementById("in10").value="";
        document.getElementById("in10").focus();
}



}

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

function domicilio(){

  validomicilio=true;
  validireccion=true;
  



}

function vacaciones(){

  valivacaciones=true;
 

}

function fecha (){

  valifecha=true;

}


function validar (){

  
  var v1=document.getElementById("in11").value;
  var v2=document.getElementById("in9").value;
  var v3=document.getElementById("in10").value;
    
  if ((document.getElementById("in11").style.visibility =="visible")&&(v1.length==0)) {
    
    alert("Rellene un numero de coches");
     
          }

          if ((document.getElementById("in11").style.visibility =="visible")&&(v1.length>0)) {
            valicoches=true;
          }  

  if ((document.getElementById("in9").style.visibility =="visible")&&(v2.length==0)) {
    
            alert("Rellene un numero de hijos que tiene");
             
                  }
      
  if ((document.getElementById("in9").style.visibility =="visible")&&(v2.length>0)) {
    valiestahijos=true;
  }  
  
  
 

  if ((document.getElementById("in10").style.visibility =="visible")&&(v3.length==0)) {
    
    alert("Rellene un numero sector");
     
          }
      
          if ((document.getElementById("in10").style.visibility =="visible")&&(v3.length>0)) {
            valiestalabora=true;
          }  
        









  

  if (valifecha!=true) {

alert("Rellene una fecha");

}

  
  if (valinombre!=true) {

alert("Rellene un nombre");

}

if (valiap1!=true) {

alert("Rellene un primer apellido");

}

if (valiap2!=true) {

alert("Rellene un segundo apellido");

}

if (valicp!=true) {

alert("Rellene un codigo postal");

}

if (validireccion!=true) {

alert("Rellene una direccion");

}

if (validni!=true) {

alert("Rellene un dni");

}

if (validniletra!=true) {

alert("Rellene un letra dni");

}


if (valiestahijos!=true) {

  alert("Seleccione si tiene hijos");
  
}

if (valitelefono!=true) {

alert("Seleccione si tiene hijos");

}

if (valiestacivil!=true) {

alert("Selecciones su estado civil");

}
if (valiestalabora!=true) {

alert("Selecciones su estado laboral");

}
if (valivacaciones!=true) {

alert("Selecciones si dispone de vacaciones");

}
if (validomicilio!=true) {

alert("Selecciones si tiene domicilio en propiedad");

}
if (valicoches!=true) {

alert("Selecciones si dispone de coches");

}









if (valiestahijos==true&&valiestacivil==true&&valiestalabora==true&&valivacaciones==true&&validomicilio==true&&valicoches==true&&valinombre==true&&valiap1==true&&valiap2==true&&validni==true&&validniletra==true&&validireccion==true&&valicp==true&&valitelefono==true&&valifecha==true&&valicoches==truevaliestahijos==true&&valiestalabora==true){
  alert("Ha rellenado su formulario correctamete");
  document.getElementById("in1","in2","in3","in4","in5","in6","in7","in8","in9","in10","in11").value="";
  
  
  window.reload();

}


}




