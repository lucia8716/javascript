//https://ourcodeworld.co/articulos/leer/52/top-10-mejores-librerias-de-alerta-y-notificacion-de-javascript-y-jquery


var dni=["76035771W"];
var filnomyape=/^(?!.* (?: |$))[a-zA-z\-\s]+$/;
var filterdni=/^([0-9]){8}([a-zA-z]){1}/;

var x5;

$("#i2").hide();
$("#i3").hide();
$("#button2").hide();
$("#p2").hide();


function regi(){
    x5=$('#i1').val();
    x5=x5.toUpperCase();
    var registrado=true;
    
    
    if(filterdni.test(x5)==true){
        for (i = 0; i < dni.length; i++) {
            if (x5==dni[i]) {
                $('#i1').val('');
                $('#i1').focus();
                $.toast({
                    text: 'Set the `showHideTransition` property to fade|plain|slide to achieve different transitions',
                    heading: 'Slide transition',
                    showHideTransition: 'slide'
                })
                i=dni.length;
                registrado=false;
              
            }
            
         }

    if (registrado==true) {
    $('#i1').val(x5.toUpperCase());
                $("#p1").hide();
                $("#button1").hide();
                $("#i2").fadeIn("slow");
                $("#i3").fadeIn("slow");
                $("#button2").fadeIn("slow");
                $("#p2").fadeIn("slow");
                $('#i1').prop('readonly', true);
    
}


    }else{alert("Dni con formato incorrecto");
    $('#i1').val('');
    $('#i1').focus();}
    
   }



   function daralta(){

    var x2=$('#i2').val();
    var x3=$('#i3').val();

    if (filnomyape.test(x2)==false) {
        $('#i2').val('');
        $("#i2").focus();
        alert("nombre con formato incorrecto");
       
    }

    if (filnomyape.test(x3)==false) {

        $('#i3').val('');  
        $("#i3").focus();
        alert("apellido con formato incorrecto");
       
    }

    if (filnomyape.test(x3)==true&&filnomyape.test(x2)==true) {

        dni.push(x5);
        alert("Usuario Registrado");
        $("#i2").hide();
$("#i3").hide();
$("#button2").hide();
$("#p2").hide();
$("#i1").fadeIn("slow");
$("#button1").fadeIn("slow");
$("#p1").fadeIn("slow");
$('#i1').val('');
$('#i2').val('');
$('#i3').val('');
$('#i1').focus();
$('#i1').prop('readonly', false);
        
    }

    





   }
  


