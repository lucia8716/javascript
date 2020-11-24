var dni=["76035771W"];
var filnomyape=/^([a-zA-z])*$/;
var filterdni=/^([0-9]){8}([a-zA-z]){1}/;



$("#i2").hide();
$("#i3").hide();
$("#button2").hide();
$("#p2").hide();


function regi(){


    x5=$('#i1').val();

    if(filterdni.test(x5)==true){

        $("#i2").hide();
        $("#i3").hide();
        $("#button2").hide();
        $("#p2").hide();
        $("#button1").hide();
        $("#p2").hide();

    }else{alert("Dni con formato incorrecto");}
   
       
   }