



$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $("#tulmeta").click(function(){
        $(this).addClass("important blue");
		
    });
});
////////////////////////////////////
////$(document).ready(function(){
 ///////  $("#albeda").click(function(){
 //////     $(this).css({"background-color": "yellow", "font-size": "200%"});
		
 /////   });
////////});
////////////////////////////////


function tripoli1(){
 // alert("Page is loaded");
  var tripoliOpticalFiberHW2500 ;
  var tripoliOpticalFiberHW7500;
  var tripoliOpticalFiberHW8800;
  var tripoliOpticalFiberAlcatel;
  var tripoliOpticalFiberKeymile;
  var tripoliOpticalFiberMpls;
  
    document.getElementById("tripoli").style.backgroundColor = "#4CAF50";
    document.getElementById("OpticalFiber").style.backgroundColor = "#4CAF50";
    document.getElementById("checkone1").checked = true;
    document.getElementById("h1").style.backgroundColor = "#4CAF50";
		
    document.getElementById("OpticalFiber").style.backgroundColor = "#4CAF50";
    document.getElementById("checkone2").checked = true;
    document.getElementById("h2").style.backgroundColor = "#4CAF50";
		
    document.getElementById("OpticalFiber").style.backgroundColor = "#4CAF50";
    document.getElementById("checkone3").checked = true;
    document.getElementById("h3").style.backgroundColor = "#4CAF50";
	
    document.getElementById("OpticalFiber").style.backgroundColor = "#4CAF50";
    document.getElementById("checkone4").checked = true;
    document.getElementById("h4").style.backgroundColor = "#4CAF50";
	
	document.getElementById("OpticalFiber").style.backgroundColor = "#4CAF50";
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
		 
    document.getElementById("OpticalFiber").style.backgroundColor = "#4CAF50";
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
		
    document.getElementById("OpticalFiber").style.backgroundColor = "#4CAF50";
    document.getElementById("checkone6").checked = true;
    document.getElementById("h6").style.backgroundColor = "#4CAF50";
		
 tripoliOpticalFiberHW2500 = localStorage.getItem("TripoliOpticalFiberHW2500");  
  if ( tripoliOpticalFiberHW2500  == "false") {
    document.getElementById("tripoli").style.backgroundColor = "red"; 
	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h1").style.backgroundColor = "red";
    document.getElementById("checkone1").checked = false;
    }
   
  tripoliOpticalFiberHW7500 = localStorage.getItem("TripoliOpticalFiberHW7500");
  if (tripoliOpticalFiberHW7500 == "false") {
     document.getElementById("tripoli").style.backgroundColor = "red"; 
	 document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h2").style.backgroundColor = "red";
    document.getElementById("checkone2").checked = false;;
    }
 
  tripoliOpticalFiberHW8800= localStorage.getItem("TripoliOpticalFiberHW8800");
  if (tripoliOpticalFiberHW8800 == "false") {
   document.getElementById("tripoli").style.backgroundColor = "red"; 
	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h3").style.backgroundColor = "red";
    document.getElementById("checkone3").checked = false;;
  }

 tripoliOpticalFiberAlcatel= localStorage.getItem("TripoliOpticalFiberAlcatel");
  if (tripoliOpticalFiberAlcatel == "false") {
  document.getElementById("tripoli").style.backgroundColor = "red"; 
	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h4").style.backgroundColor = "red";
    document.getElementById("checkone4").checked = false;;
 }
  
 tripoliOpticalFiberKeymile= localStorage.getItem("TripoliOpticalFiberKeymile");
  h5 = document.getElementById("h5");
  if (tripoliOpticalFiberKeymile == "false") {
    document.getElementById("tripoli").style.backgroundColor = "red"; 
	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h5").style.backgroundColor = "red";
    document.getElementById("checkone5").checked = false;;
  }

  
 tripoliOpticalFiberMpls= localStorage.getItem("TripoliOpticalFiberMpls");
 if (tripoliOpticalFiberMpls == "false") {
    document.getElementById("tripoli").style.backgroundColor = "red"; 
	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h6").style.backgroundColor = "red";
    document.getElementById("checkone6").checked = false;;
  }
 
   document.getElementById("feildsetname").innerHTML = "Tripoli";
  var x = document.getElementById("mainone");
  if (x.style.display = "none") {
    x.style.display = "block";
  }
  
}


function benghazi() {
 var optix;
 var benghazi=document.getElementById("benghazi");
 optix=document.getElementById("OpticalFiber");
 optix.style.backgroundColor="#4CAF50";
 benghazi.style.backgroundColor ="#4CAF50";
  
  var banghaziOpticalFiberHW2500;
  var h1;
  banghaziOpticalFiberHW2500 = localStorage.getItem("BanghaziOpticalFiberHW2500");
  h1 = document.getElementById("h1");
  if (banghaziOpticalFiberHW2500 == "false") {
    h1.style.backgroundColor = "red";
   optix.style.backgroundColor = "red";
    benghazi.style.backgroundColor="red";
   } else {
    if (banghaziOpticalFiberHW2500 = "true") {
      h1.style.backgroundColor ="#4CAF50";
      document.getElementById("checkone1").checked = true;
    }
  }
  var banghaziOpticalFiberh2, h2;
  banghaziOpticalFiberh2 = localStorage.getItem("BanghaziOpticalFiberHW7500");
  h2 = document.getElementById("h2");
  if (banghaziOpticalFiberh2 == "false") {
    h2.style.backgroundColor = "red";
    document.getElementById("checkone2").checked = false;
     optix.style.backgroundColor = "red";
	  benghazi.style.backgroundColor="red";
   } else {
    if (banghaziOpticalFiberh2 = "true") {
      h2.style.backgroundColor ="#4CAF50";
      document.getElementById("checkone2").checked = true;
    }
  }
  var banghaziOpticalFiberHW8800, h3;
  banghaziOpticalFiberHW8800 = localStorage.getItem("BanghaziOpticalFiberHW8800");
  h3 = document.getElementById("h3");
  if (banghaziOpticalFiberHW8800 == "false") {
    h3.style.backgroundColor = "red";
    document.getElementById("checkone3").checked = false;
     optix.style.backgroundColor = "red";
	 benghazi.style.backgroundColor="red";
  } else {
    if (banghaziOpticalFiberHW8800 = "true") {
      h3.style.backgroundColor = "#4CAF50";
      document.getElementById("checkone3").checked = true;
    }
  }
  var banghaziOpticalFiberAlcatel, h4;
  banghaziOpticalFiberAlcatel = localStorage.getItem("BanghaziOpticalFiberAlcatel");
  h4 = document.getElementById("h4");
  if (banghaziOpticalFiberAlcatel == "false") {
    h4.style.backgroundColor = "red";
	benghazi.style.backgroundColor="red";
    document.getElementById("checkone4").checked = false;
     optix.style.backgroundColor = "red";
  } else {
    if (banghaziOpticalFiberAlcatel = "true") {
      h4.style.backgroundColor = "#4CAF50";
      document.getElementById("checkone4").checked = true;
    }
  }
  var banghaziOpticalFiberKeymile, h5;
  banghaziOpticalFiberKeymile = localStorage.getItem("BanghaziOpticalFiberKeymile");
  h5 = document.getElementById("h5");
  if (banghaziOpticalFiberKeymile == "false") {
    h5.style.backgroundColor = "red";
    document.getElementById("checkone5").checked = false;
     optix.style.backgroundColor = "red";
	 benghazi.style.backgroundColor="red";
  } else {
    if (banghaziOpticalFiberKeymile = "true") {
      h5.style.backgroundColor = "#4CAF50";
      document.getElementById("checkone5").checked = true;

    }
  }
  var banghaziOpticalFiberMpls, h6;
  banghaziOpticalFiberMpls = localStorage.getItem("BanghaziOpticalFiberMpls");
  h6 = document.getElementById("h6");
  if (banghaziOpticalFiberMpls == "false") {
    h6.style.backgroundColor = "red";
    document.getElementById("checkone6").checked = false;
     optix.style.backgroundColor = "red";
	 benghazi.style.backgroundColor="red";
  } else {
    if (banghaziOpticalFiberMpls = "true") {
      h6.style.backgroundColor = "#4CAF50";
      document.getElementById("checkone6").checked = true;
    }
  }
  document.getElementById("feildsetname").innerHTML = "Banghazi";
  var x = document.getElementById("mainone");
  if (x.style.display = "none") {
    x.style.display = "block";
  }
}

function albedabtn(){
  
  document.getElementById("eqpment1").innerHTML = document.getElementById("albeda").innerHTML + document.getElementById("OpticalFiber").innerHTML;
  document.getElementById("h1").innerHTML = "HW2500";
  document.getElementById("h2").innerHTML = "HW7500";
  document.getElementById("h3").innerHTML = "HW8800";
  document.getElementById("h4").innerHTML = "Alcatel";
  document.getElementById("h5").innerHTML = "Keymile";
  document.getElementById("h6").innerHTML = "PCM_1511";
 
    document.getElementById("albeda").style.backgroundColor = "#4CAF50";
  //  document.getElementById("OpticalFiber").style.backgroundColor = "#4CAF50";
    document.getElementById("checkone1").checked = true;
    document.getElementById("h1").style.backgroundColor = "#4CAF50";
	 
    document.getElementById("checkone2").checked = true;
    document.getElementById("h2").style.backgroundColor = "#4CAF50";
	 
    document.getElementById("checkone3").checked = true;
    document.getElementById("h3").style.backgroundColor = "#4CAF50";
 
    document.getElementById("checkone4").checked = true;
    document.getElementById("h4").style.backgroundColor = "#4CAF50";
	  
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
		
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
	
    document.getElementById("checkone6").checked = true;
    document.getElementById("h6").style.backgroundColor = "#4CAF50";
		
 albedaOpticalFiberHW2500 = localStorage.getItem("AlbedaOpticalFiberHW2500");  
 
  if ( albedaOpticalFiberHW2500  == "false") {
    document.getElementById("albeda").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h1").style.backgroundColor = "red";
    document.getElementById("checkone1").checked = false;
    }
  albedaOpticalFiberHW7500 = localStorage.getItem("AlbedaOpticalFiberHW7500");
  if (albedaOpticalFiberHW7500 == "false") {
     document.getElementById("albeda").style.backgroundColor = "red"; 
//	 document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h2").style.backgroundColor = "red";
    document.getElementById("checkone2").checked = false;;
    }
 albedaOpticalFiberHW8800= localStorage.getItem("AlbedaOpticalFiberHW8800");
  if (albedaOpticalFiberHW8800 == "false") {
   document.getElementById("albeda").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h3").style.backgroundColor = "red";
    document.getElementById("checkone3").checked = false;;
  }
 albedaOpticalFiberAlcatel= localStorage.getItem("AlbedaOpticalFiberAlcatel");
  if (albedaOpticalFiberAlcatel == "false") {
    document.getElementById("albeda").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h4").style.backgroundColor = "red";
    document.getElementById("checkone4").checked = false;;
 }
 albedaOpticalFiberKeymile= localStorage.getItem("AlbedaOpticalFiberKeymile");
   if (albedaOpticalFiberKeymile == "false") {
    document.getElementById("albeda").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h5").style.backgroundColor = "red";
    document.getElementById("checkone5").checked = false;;
  }
 albedaOpticalFiberPCM_1511= localStorage.getItem("AlbedaOpticalFiberPCM_1511");
  if (albedaOpticalFiberPCM_1511 == "false") {
    document.getElementById("albeda").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h6").style.backgroundColor = "red";
    document.getElementById("checkone6").checked = false;;
  }
 document.getElementById("feildsetname").innerHTML = "albeda";
  var x = document.getElementById("eqpment");
  if (x.style.display = "none") {
    x.style.display = "block";
  }
}
/////////
/////////
function susabtn(){
  
  document.getElementById("eqpment1").innerHTML = document.getElementById("susa").innerHTML + document.getElementById("OpticalFiber").innerHTML;
  document.getElementById("h1").innerHTML = "HW2500";
  document.getElementById("h2").innerHTML = "HW7500";
  document.getElementById("h3").innerHTML = "HW8800";
  document.getElementById("h4").innerHTML = "Alcatel";
  document.getElementById("h5").innerHTML = "Keymile";
  document.getElementById("h6").innerHTML = "PCM_1511";
 
    document.getElementById("susa").style.backgroundColor = "#4CAF50";
  //  document.getElementById("OpticalFiber").style.backgroundColor = "#4CAF50";
    document.getElementById("checkone1").checked = true;
    document.getElementById("h1").style.backgroundColor = "#4CAF50";
	 
    document.getElementById("checkone2").checked = true;
    document.getElementById("h2").style.backgroundColor = "#4CAF50";
	 
    document.getElementById("checkone3").checked = true;
    document.getElementById("h3").style.backgroundColor = "#4CAF50";
 
    document.getElementById("checkone4").checked = true;
    document.getElementById("h4").style.backgroundColor = "#4CAF50";
	  
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
		
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
	
    document.getElementById("checkone6").checked = true;
    document.getElementById("h6").style.backgroundColor = "#4CAF50";
		
 susaOpticalFiberHW2500 = localStorage.getItem("SusaOpticalFiberHW2500");  
 
  if ( susaOpticalFiberHW2500  == "false") {
    document.getElementById("susa").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h1").style.backgroundColor = "red";
    document.getElementById("checkone1").checked = false;
    }
  susaOpticalFiberHW7500 = localStorage.getItem("SusaOpticalFiberHW7500");
  if (susaOpticalFiberHW7500 == "false") {
     document.getElementById("susa").style.backgroundColor = "red"; 
//	 document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h2").style.backgroundColor = "red";
    document.getElementById("checkone2").checked = false;;
    }
 susaOpticalFiberHW8800= localStorage.getItem("SusaOpticalFiberHW8800");
  if (susaOpticalFiberHW8800 == "false") {
   document.getElementById("susa").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h3").style.backgroundColor = "red";
    document.getElementById("checkone3").checked = false;;
  }
 susaOpticalFiberAlcatel= localStorage.getItem("SusaOpticalFiberAlcatel");
  if (susaOpticalFiberAlcatel == "false") {
    document.getElementById("susa").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h4").style.backgroundColor = "red";
    document.getElementById("checkone4").checked = false;;
 }
 susaOpticalFiberKeymile= localStorage.getItem("SusaOpticalFiberKeymile");
   if (susaOpticalFiberKeymile == "false") {
    document.getElementById("susa").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h5").style.backgroundColor = "red";
    document.getElementById("checkone5").checked = false;;
  }
 susaOpticalFiberPCM_1511= localStorage.getItem("SusaOpticalFiberPCM_1511");
  if (susaOpticalFiberPCM_1511 == "false") {
    document.getElementById("susa").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h6").style.backgroundColor = "red";
    document.getElementById("checkone6").checked = false;;
  }
 document.getElementById("feildsetname").innerHTML = "susa";
  var x = document.getElementById("eqpment");
  if (x.style.display = "none") {
    x.style.display = "block";
  }
}


function almarjbtn(){
  
  document.getElementById("eqpment1").innerHTML = document.getElementById("almarj").innerHTML + document.getElementById("OpticalFiber").innerHTML;
  document.getElementById("h1").innerHTML = "HW2500";
  document.getElementById("h2").innerHTML = "HW7500";
  document.getElementById("h3").innerHTML = "HW8800";
  document.getElementById("h4").innerHTML = "Alcatel";
  document.getElementById("h5").innerHTML = "Keymile";
  document.getElementById("h6").innerHTML = "PCM_1511";
 
    document.getElementById("almarj").style.backgroundColor = "#4CAF50";
	

	
  //  document.getElementById("OpticalFiber").style.backgroundColor = "#4CAF50";
    document.getElementById("checkone1").checked = true;
    document.getElementById("h1").style.backgroundColor = "#4CAF50";
	 
    document.getElementById("checkone2").checked = true;
    document.getElementById("h2").style.backgroundColor = "#4CAF50";
	 
    document.getElementById("checkone3").checked = true;
    document.getElementById("h3").style.backgroundColor = "#4CAF50";
 
    document.getElementById("checkone4").checked = true;
    document.getElementById("h4").style.backgroundColor = "#4CAF50";
	  
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
		
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
	
    document.getElementById("checkone6").checked = true;
    document.getElementById("h6").style.backgroundColor = "#4CAF50";
		
 almarjOpticalFiberHW2500 = localStorage.getItem("AlmarjOpticalFiberHW2500");  
 
  if ( almarjOpticalFiberHW2500  == "false") {
    document.getElementById("almarj").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h1").style.backgroundColor = "red";
    document.getElementById("checkone1").checked = false;
    }
  almarjOpticalFiberHW7500 = localStorage.getItem("AlmarjOpticalFiberHW7500");
  if (almarjOpticalFiberHW7500 == "false") {
     document.getElementById("almarj").style.backgroundColor = "red"; 
//	 document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h2").style.backgroundColor = "red";
    document.getElementById("checkone2").checked = false;;
    }
  almarjOpticalFiberHW8800= localStorage.getItem("AlmarjOpticalFiberHW8800");
  if (almarjOpticalFiberHW8800 == "false") {
   document.getElementById("almarj").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h3").style.backgroundColor = "red";
    document.getElementById("checkone3").checked = false;;
  }
 almarjOpticalFiberAlcatel= localStorage.getItem("AlmarjOpticalFiberAlcatel");
  if (almarjOpticalFiberAlcatel == "false") {
    document.getElementById("almarj").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h4").style.backgroundColor = "red";
    document.getElementById("checkone4").checked = false;;
 }
 almarjOpticalFiberKeymile= localStorage.getItem("AlmarjOpticalFiberKeymile");
   if (almarjOpticalFiberKeymile == "false") {
    document.getElementById("almarj").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h5").style.backgroundColor = "red";
    document.getElementById("checkone5").checked = false;;
  }
 almarjOpticalFiberPCM_1511= localStorage.getItem("AlmarjOpticalFiberPCM_1511");
  if (almarjOpticalFiberPCM_1511 == "false") {
    document.getElementById("almarj").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h6").style.backgroundColor = "red";
    document.getElementById("checkone6").checked = false;;
  }
 document.getElementById("feildsetname").innerHTML = "Almarj";
  var x = document.getElementById("eqpment");
  if (x.style.display = "none") {
    x.style.display = "block";
  }
}


function tulmetabtn(){
 
  document.getElementById("eqpment1").innerHTML = document.getElementById("tulmeta").innerHTML + document.getElementById("OpticalFiber").innerHTML;
  document.getElementById("h1").innerHTML = "HW2500";
  document.getElementById("h2").innerHTML = "HW7500";
  document.getElementById("h3").innerHTML = "HW8800";
  document.getElementById("h4").innerHTML = "Alcatel";
  document.getElementById("h5").innerHTML = "Keymile";
  document.getElementById("h6").innerHTML = "PCM1511";
 
    document.getElementById("tulmeta").style.backgroundColor = "#4CAF50";
  //  document.getElementById("OpticalFiber").style.backgroundColor = "#4CAF50";
    document.getElementById("checkone1").checked = true;
    document.getElementById("h1").style.backgroundColor = "#4CAF50";
	 
    document.getElementById("checkone2").checked = true;
    document.getElementById("h2").style.backgroundColor = "#4CAF50";
	 
    document.getElementById("checkone3").checked = true;
    document.getElementById("h3").style.backgroundColor = "#4CAF50";
 
    document.getElementById("checkone4").checked = true;
    document.getElementById("h4").style.backgroundColor = "#4CAF50";
	  
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
		
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
	
    document.getElementById("checkone6").checked = true;
    document.getElementById("h6").style.backgroundColor = "#4CAF50";
		
  tulmetaOpticalFiberHW2500 = localStorage.getItem("TulmetaOpticalFiberHW2500");  
 
  if ( tulmetaOpticalFiberHW2500  == "false") {
    document.getElementById("tulmeta").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h1").style.backgroundColor = "red";
    document.getElementById("checkone1").checked = false;
    }
  tulmetaOpticalFiberHW7500 = localStorage.getItem("TulmetaOpticalFiberHW7500");
  if (tulmetaOpticalFiberHW7500 == "false") {
     document.getElementById("tulmeta").style.backgroundColor = "red"; 
//	 document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h2").style.backgroundColor = "red";
    document.getElementById("checkone2").checked = false;;
    }
  tulmetaOpticalFiberHW8800= localStorage.getItem("TulmetaOpticalFiberHW8800");
  if (tulmetaOpticalFiberHW8800 == "false") {
   document.getElementById("tulmeta").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h3").style.backgroundColor = "red";
    document.getElementById("checkone3").checked = false;;
  }
 tulmetaOpticalFiberAlcatel= localStorage.getItem("TulmetaOpticalFiberAlcatel");
  if (tulmetaOpticalFiberAlcatel == "false") {
    document.getElementById("tulmeta").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h4").style.backgroundColor = "red";
    document.getElementById("checkone4").checked = false;;
 }
 tulmetaOpticalFiberKeymile= localStorage.getItem("TulmetaOpticalFiberKeymile");
   if (tulmetaOpticalFiberKeymile == "false") {
    document.getElementById("tulmeta").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h5").style.backgroundColor = "red";
    document.getElementById("checkone5").checked = false;;
  }
tulmetaOpticalFiberPCM1511= localStorage.getItem("TulmetaOpticalFiberPCM1511");
  if (tulmetaOpticalFiberPCM1511== "false") {
    document.getElementById("tulmeta").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h6").style.backgroundColor = "red";
    document.getElementById("checkone6").checked = false;;
  }
 //document.getElementById("feildsetname").innerHTML = "Tulmeta";
  var x = document.getElementById("eqpment");
  if (x.style.display = "none") {
    x.style.display = "block";
  }
}

////////////////////////////
function darnabtn(){
  
  document.getElementById("eqpment1").innerHTML = document.getElementById("darna").innerHTML + document.getElementById("OpticalFiber").innerHTML;
  document.getElementById("h1").innerHTML = "HW2500";
  document.getElementById("h2").innerHTML = "HW7500";
  document.getElementById("h3").innerHTML = "HW8800";
  document.getElementById("h4").innerHTML = "Alcatel";
  document.getElementById("h5").innerHTML = "Keymile";
  document.getElementById("h6").innerHTML = "PCM_1511";
 
    document.getElementById("darna").style.backgroundColor = "#4CAF50";
  //  document.getElementById("OpticalFiber").style.backgroundColor = "#4CAF50";
    document.getElementById("checkone1").checked = true;
    document.getElementById("h1").style.backgroundColor = "#4CAF50";
	 
    document.getElementById("checkone2").checked = true;
    document.getElementById("h2").style.backgroundColor = "#4CAF50";
	 
    document.getElementById("checkone3").checked = true;
    document.getElementById("h3").style.backgroundColor = "#4CAF50";
 
    document.getElementById("checkone4").checked = true;
    document.getElementById("h4").style.backgroundColor = "#4CAF50";
	  
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
		
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
	
    document.getElementById("checkone6").checked = true;
    document.getElementById("h6").style.backgroundColor = "#4CAF50";
		
 darnaOpticalFiberHW2500 = localStorage.getItem("DarnaOpticalFiberHW2500");  
 
  if ( darnaOpticalFiberHW2500  == "false") {
    document.getElementById("darna").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h1").style.backgroundColor = "red";
    document.getElementById("checkone1").checked = false;
    }
  darnaOpticalFiberHW7500 = localStorage.getItem("DarnaOpticalFiberHW7500");
  if (darnaOpticalFiberHW7500 == "false") {
     document.getElementById("darna").style.backgroundColor = "red"; 
//	 document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h2").style.backgroundColor = "red";
    document.getElementById("checkone2").checked = false;;
    }
 darnaOpticalFiberHW8800= localStorage.getItem("DarnaOpticalFiberHW8800");
  if (darnaOpticalFiberHW8800 == "false") {
   document.getElementById("darna").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h3").style.backgroundColor = "red";
    document.getElementById("checkone3").checked = false;;
  }
 darnaOpticalFiberAlcatel= localStorage.getItem("DarnaOpticalFiberAlcatel");
  if (darnaOpticalFiberAlcatel == "false") {
    document.getElementById("darna").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h4").style.backgroundColor = "red";
    document.getElementById("checkone4").checked = false;;
 }
 darnaOpticalFiberKeymile= localStorage.getItem("DarnaOpticalFiberKeymile");
   if (darnaOpticalFiberKeymile == "false") {
    document.getElementById("darna").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h5").style.backgroundColor = "red";
    document.getElementById("checkone5").checked = false;;
  }
 darnaOpticalFiberPCM_1511= localStorage.getItem("DarnaOpticalFiberPCM_1511");
  if (darnaOpticalFiberPCM_1511 == "false") {
    document.getElementById("darna").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h6").style.backgroundColor = "red";
    document.getElementById("checkone6").checked = false;;
  }
 document.getElementById("feildsetname").innerHTML = "darna";
  var x = document.getElementById("eqpment");
  if (x.style.display = "none") {
    x.style.display = "block";
  }
}

function tubruqbtn(){
  
  document.getElementById("eqpment1").innerHTML = document.getElementById("tubruq").innerHTML + document.getElementById("OpticalFiber").innerHTML;
  document.getElementById("h1").innerHTML = "HW2500";
  document.getElementById("h2").innerHTML = "HW7500";
  document.getElementById("h3").innerHTML = "HW8800";
  document.getElementById("h4").innerHTML = "Alcatel";
  document.getElementById("h5").innerHTML = "Keymile";
  document.getElementById("h6").innerHTML = "PCM_1511";
 
    document.getElementById("tubruq").style.backgroundColor = "#4CAF50";
  //  document.getElementById("OpticalFiber").style.backgroundColor = "#4CAF50";
    document.getElementById("checkone1").checked = true;
    document.getElementById("h1").style.backgroundColor = "#4CAF50";
	 
    document.getElementById("checkone2").checked = true;
    document.getElementById("h2").style.backgroundColor = "#4CAF50";
	 
    document.getElementById("checkone3").checked = true;
    document.getElementById("h3").style.backgroundColor = "#4CAF50";
 
    document.getElementById("checkone4").checked = true;
    document.getElementById("h4").style.backgroundColor = "#4CAF50";
	  
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
		
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
	
    document.getElementById("checkone6").checked = true;
    document.getElementById("h6").style.backgroundColor = "#4CAF50";
		
 tubruqOpticalFiberHW2500 = localStorage.getItem("TubruqOpticalFiberHW2500");  
 
  if ( tubruqOpticalFiberHW2500  == "false") {
    document.getElementById("tubruq").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h1").style.backgroundColor = "red";
    document.getElementById("checkone1").checked = false;
    }
  tubruqOpticalFiberHW7500 = localStorage.getItem("tubruqOpticalFiberHW7500");
  if (tubruqOpticalFiberHW7500 == "false") {
     document.getElementById("tubruq").style.backgroundColor = "red"; 
//	 document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h2").style.backgroundColor = "red";
    document.getElementById("checkone2").checked = false;;
    }
 tubruqOpticalFiberHW8800= localStorage.getItem("TubruqOpticalFiberHW8800");
  if (tubruqOpticalFiberHW8800 == "false") {
   document.getElementById("tubruq").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h3").style.backgroundColor = "red";
    document.getElementById("checkone3").checked = false;;
  }
 tubruqOpticalFiberAlcatel= localStorage.getItem("TubruqOpticalFiberAlcatel");
  if (tubruqOpticalFiberAlcatel == "false") {
    document.getElementById("tubruq").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h4").style.backgroundColor = "red";
    document.getElementById("checkone4").checked = false;;
 }
 tubruqOpticalFiberKeymile= localStorage.getItem("TubruqOpticalFiberKeymile");
   if (tubruqOpticalFiberKeymile == "false") {
    document.getElementById("tubruq").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h5").style.backgroundColor = "red";
    document.getElementById("checkone5").checked = false;;
  }
 tubruqOpticalFiberPCM_1511= localStorage.getItem("TubruqOpticalFiberPCM_1511");
  if (tubruqOpticalFiberPCM_1511 == "false") {
    document.getElementById("tubruq").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h6").style.backgroundColor = "red";
    document.getElementById("checkone6").checked = false;;
  }
 document.getElementById("feildsetname").innerHTML = "tubruq";
  var x = document.getElementById("eqpment");
  if (x.style.display = "none") {
    x.style.display = "block";
  }
}

////////
function emaseedbtn(){
  
  document.getElementById("eqpment1").innerHTML = document.getElementById("emaseed").innerHTML + document.getElementById("OpticalFiber").innerHTML;
  document.getElementById("h1").innerHTML = "HW2500";
  document.getElementById("h2").innerHTML = "HW7500";
  document.getElementById("h3").innerHTML = "HW8800";
  document.getElementById("h4").innerHTML = "Alcatel";
  document.getElementById("h5").innerHTML = "Keymile";
  document.getElementById("h6").innerHTML = "PCM_1511";
 
    document.getElementById("emaseed").style.backgroundColor = "#4CAF50";
  //  document.getElementById("OpticalFiber").style.backgroundColor = "#4CAF50";
    document.getElementById("checkone1").checked = true;
    document.getElementById("h1").style.backgroundColor = "#4CAF50";
	 
    document.getElementById("checkone2").checked = true;
    document.getElementById("h2").style.backgroundColor = "#4CAF50";
	 
    document.getElementById("checkone3").checked = true;
    document.getElementById("h3").style.backgroundColor = "#4CAF50";
 
    document.getElementById("checkone4").checked = true;
    document.getElementById("h4").style.backgroundColor = "#4CAF50";
	  
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
		
    document.getElementById("checkone5").checked = true;
    document.getElementById("h5").style.backgroundColor = "#4CAF50";
	
    document.getElementById("checkone6").checked = true;
    document.getElementById("h6").style.backgroundColor = "#4CAF50";
		
 emaseedOpticalFiberHW2500 = localStorage.getItem("EmaseedOpticalFiberHW2500");  
 
  if ( emaseedOpticalFiberHW2500  == "false") {
    document.getElementById("emaseed").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h1").style.backgroundColor = "red";
    document.getElementById("checkone1").checked = false;
    }
  emaseedOpticalFiberHW7500 = localStorage.getItem("EmaseedOpticalFiberHW7500");
  if (emaseedOpticalFiberHW7500 == "false") {
     document.getElementById("emaseed").style.backgroundColor = "red"; 
//	 document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h2").style.backgroundColor = "red";
    document.getElementById("checkone2").checked = false;;
    }
 emaseedOpticalFiberHW8800= localStorage.getItem("EmaseedOpticalFiberHW8800");
  if (emaseedOpticalFiberHW8800 == "false") {
   document.getElementById("emaseed").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h3").style.backgroundColor = "red";
    document.getElementById("checkone3").checked = false;;
  }
 emaseedOpticalFiberAlcatel= localStorage.getItem("EmaseedOpticalFiberAlcatel");
  if (emaseedOpticalFiberAlcatel == "false") {
    document.getElementById("emaseed").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h4").style.backgroundColor = "red";
    document.getElementById("checkone4").checked = false;;
 }
 emaseedOpticalFiberKeymile= localStorage.getItem("EmaseedOpticalFiberKeymile");
   if (emaseedOpticalFiberKeymile == "false") {
    document.getElementById("emaseed").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h5").style.backgroundColor = "red";
    document.getElementById("checkone5").checked = false;;
  }
 emaseedOpticalFiberPCM_1511= localStorage.getItem("EmaseedOpticalFiberPCM_1511");
  if (emaseedOpticalFiberPCM_1511 == "false") {
    document.getElementById("emaseed").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h6").style.backgroundColor = "red";
    document.getElementById("checkone6").checked = false;;
  }
 document.getElementById("feildsetname").innerHTML = "emaseed";
  var x = document.getElementById("eqpment");
  if (x.style.display = "none") {
    x.style.display = "block";
  }
}

/////////////////////////

function tulpara(){

 var  checktul1 = document.getElementById("checktul1").checked;
 var headerCaption=document.getElementById("equpmentdatacaption").innerHTML;
 
 // var key = document.getElementById("eqpment1").innerHTML + document.getElementById("h1").innerHTML;
  localStorage.setItem(headerCaption,checktul1);
 
	
}

function init(){
	
	
		var aheader = localStorage.getItem("aAheaderLabel");
			
	    document.getElementById("equpmentdatacaption").innerHTML=(aheader);
		

 
 alert(aheader);
switch (aheader){
	 
	 case "AlmarjOpticalFiberHW2500":
document.getElementById("myFrame").src ="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_GidBSbHawnIZiLu-vH6nH1qXrNCgf7kxaL37-lWkI0DK7Hh-8ak22ZmAufrbOnwYGIUtkVwqNHC7/pubhtml";	
    break;
 
case "TulmetaOpticalFiberHW2500":
document.getElementById("myFrame").src ="https://docs.google.com/spreadsheets/d/e/2PACX-1vRB8s7U5uM9-rrz6X1RcnDK9FysOW2IEfHPhrdvoaiW9TbS-vBAyU5n69viV2iAgACofCdyNSwytv3x/pubhtml";	
 break;
 
 case "AlbedaOpticalFiberHW2500":
document.getElementById("myFrame").src ="https://docs.google.com/spreadsheets/d/e/2PACX-1vT22sNHos7vtqbbZUr7A9iKuYIr1i4nhltKhU__0t13DdIFGjXHYDlZ7WxWRaNM7olvnPPW2cC6UWNT/pubhtml";	
  break;
  case "DarnaOpticalFiberHW2500":
document.getElementById("myFrame").src ="https://docs.google.com/spreadsheets/d/e/2PACX-1vR0aPF63bvHo-k3utJxVsHcImPOYFzF4Id7DqYUVf4FN-IzPmFp7QogdTgbMrTcp23e-Rp3c77BkFZq/pubhtml";	
 //break;
 case "TubruqOpticalFiberHW2500":
document.getElementById("myFrame").src =" https://docs.google.com/spreadsheets/d/e/2PACX-1vQxOUudFk7oEvRW9uUZe6z-Msk3mjDej9PGMmOX38ThAA3U1OQng4kxnrJeZDb1bJN0nTFI3w5-3Anw/pubhtml";	
break;
 case "SusaOpticalFiberHW2500":
document.getElementById("myFrame").src ="https://docs.google.com/spreadsheets/d/e/2PACX-1vR-yzmLqwWZsStQh8lnEM49cVD6NCwhhYNnoemFt5lSNttDalvLFPYGz89rEFIqFPXeK2WMSsvDMpRD/pubhtml";	
break;

case "EmaseedOpticalFiberHW2500":
document.getElementById("myFrame").src ="https://docs.google.com/spreadsheets/d/e/2PACX-1vQPgDjQeMUd8D0NfCVD8nQ79r6ifBLuw1hhRyRMFn0CYnyeV6PfYKuXrXc6fs_qP9RWoH6YSjpp61CL/pubhtml";	
break;
 
 //default:

}
  
}		

function init1(){
	
	 document.getElementById("almarjcity").style.backgroundColor = "#4CAF50";
	 
	  almarjOpticalFiberHW2500 = localStorage.getItem("AlmarjOpticalFiberHW2500");  
 
  if ( almarjOpticalFiberHW2500  == "false") {
    document.getElementById("almarjcity").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h1").style.backgroundColor = "red";
    document.getElementById("checkone1").checked = false;
    }
  almarjOpticalFiberHW7500 = localStorage.getItem("AlmarjOpticalFiberHW7500");
  if (almarjOpticalFiberHW7500 == "false") {
     document.getElementById("almarjcity").style.backgroundColor = "red"; 
//	 document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h2").style.backgroundColor = "red";
    document.getElementById("checkone2").checked = false;;
    }
  almarjOpticalFiberHW8800= localStorage.getItem("AlmarjOpticalFiberHW8800");
  if (almarjOpticalFiberHW8800 == "false") {
   document.getElementById("almarjcity").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h3").style.backgroundColor = "red";
    document.getElementById("checkone3").checked = false;;
  }
 almarjOpticalFiberAlcatel= localStorage.getItem("AlmarjOpticalFiberAlcatel");
  if (almarjOpticalFiberAlcatel == "false") {
    document.getElementById("almarjcity").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h4").style.backgroundColor = "red";
    document.getElementById("checkone4").checked = false;;
 }
 almarjOpticalFiberKeymile= localStorage.getItem("AlmarjOpticalFiberKeymile");
   if (almarjOpticalFiberKeymile == "false") {
    document.getElementById("almarjcity").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h5").style.backgroundColor = "red";
    document.getElementById("checkone5").checked = false;;
  }
 almarjOpticalFiberPCM_1511= localStorage.getItem("AlmarjOpticalFiberPCM_1511");
  if (almarjOpticalFiberPCM_1511 == "false") {
    document.getElementById("almarjcity").style.backgroundColor = "red"; 
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h6").style.backgroundColor = "red";
    document.getElementById("checkone6").checked = false;;
  }
	
}







function tulmetapageon(){
//document.getElementById("tulmetapage").style.display="block";	
	
}

function tulmetapageoff(){
//document.getElementById("tulmetapage").style.display="none";	
	
}



function h1(){	
   
 headercaption=document.getElementById("eqpment1").innerHTML+document.getElementById("h1").innerHTML;
 localStorage.setItem("aAheaderLabel",headercaption);
 window.location.href="equipDatapage.html";	
}    






function optix() {
  document.getElementById("h1").innerHTML = "HW2500";
  document.getElementById("h2").innerHTML = "HW7500";
  document.getElementById("h3").innerHTML = "HW8800";
  document.getElementById("h4").innerHTML = "Alcatel";
  document.getElementById("h5").innerHTML = "Keymile";
  document.getElementById("h6").innerHTML = "Mpls";
  document.getElementById("eqpment1").innerHTML = document.getElementById("feildsetname").innerHTML + document.getElementById("OpticalFiber").innerHTML;
  var x = document.getElementById("eqpment");
  if (x.style.display = "none") {
    x.style.display = "block";
    var y = document.getElementById("mainone");
    y.style.display = "none";
  }
}

function cancel() {
  var x = document.getElementById("mainone");
  if (x.style.display == "block") {
    x.style.display = "none";
  }
}

function cancel2() {
  var x = document.getElementById("eqpment");
  x.style.display = "none";
}

function editbtn() {
  document.getElementById("checkone1").disabled = false;
  document.getElementById("checkone2").disabled = false;
  document.getElementById("checkone3").disabled = false;
  document.getElementById("checkone4").disabled = false;
  document.getElementById("checkone5").disabled = false;
  document.getElementById("checkone6").disabled = false;
  document.getElementById("savebtn").disabled = false;
}

function save() {
  document.getElementById("checkone1").disabled = true;
  document.getElementById("checkone2").disabled = true;
  document.getElementById("checkone3").disabled = true;
  document.getElementById("checkone4").disabled = true;
  document.getElementById("checkone5").disabled = true;
  document.getElementById("checkone6").disabled = true;

  var checkone1 = document.getElementById("checkone1").checked;
  var key = document.getElementById("eqpment1").innerHTML + document.getElementById("h1").innerHTML;
  localStorage.setItem(key, checkone1);
  var checkone2 = document.getElementById("checkone2").checked;
  var key = document.getElementById("eqpment1").innerHTML + document.getElementById("h2").innerHTML;
  localStorage.setItem(key, checkone2);
  var checkone3 = document.getElementById("checkone3").checked;
  var key = document.getElementById("eqpment1").innerHTML + document.getElementById("h3").innerHTML;
  localStorage.setItem(key, checkone3);
  var checkone4 = document.getElementById("checkone4").checked;
  var key = document.getElementById("eqpment1").innerHTML + document.getElementById("h4").innerHTML;
  localStorage.setItem(key, checkone4);
  var checkone5 = document.getElementById("checkone5").checked;
  var key = document.getElementById("eqpment1").innerHTML + document.getElementById("h5").innerHTML;
  localStorage.setItem(key, checkone5);
  var checkone6 = document.getElementById("checkone6").checked;
  var key = document.getElementById("eqpment1").innerHTML + document.getElementById("h6").innerHTML;
  localStorage.setItem(key, checkone6);
  
    
  
  
   document.getElementById("savebtn").disabled = true;
   }
 
 
 
function greenmountencancel(){
 document.getElementById("greenmountine").style.display = "none";
 
 }

function greenmountdiv(){

	
	 document.getElementById("almarj").style.backgroundColor = "#4CAF50"; 
	 document.getElementById("almarjcity").style.backgroundColor = "#4CAF50"; 
	  
	
	document.getElementById("greenmountine").style.display = "block";
	
	 almarjOpticalFiberHW2500 = localStorage.getItem("AlmarjOpticalFiberHW2500");  
   if ( almarjOpticalFiberHW2500  == "false") {
   document.getElementById("almarj").style.backgroundColor = "red"; 
    document.getElementById("almarjcity").style.backgroundColor = "red";
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h1").style.backgroundColor = "red";
    document.getElementById("checkone1").checked = false;
    }
  almarjOpticalFiberHW7500 = localStorage.getItem("AlmarjOpticalFiberHW7500");
  if (almarjOpticalFiberHW7500 == "false") {
     document.getElementById("almarj").style.backgroundColor = "red"; 
	 document.getElementById("almarjcity").style.backgroundColor = "red";
//	 document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h2").style.backgroundColor = "red";
    document.getElementById("checkone2").checked = false;
    }
  almarjOpticalFiberHW8800= localStorage.getItem("AlmarjOpticalFiberHW8800");
  if (almarjOpticalFiberHW8800 == "false") {
   document.getElementById("almarj").style.backgroundColor = "red"; 
   document.getElementById("almarjcity").style.backgroundColor = "red";
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h3").style.backgroundColor = "red";
    document.getElementById("checkone3").checked = false;
  }
 almarjOpticalFiberAlcatel= localStorage.getItem("AlmarjOpticalFiberAlcatel");
  if (almarjOpticalFiberAlcatel == "false") {
    document.getElementById("almarj").style.backgroundColor = "red";
	document.getElementById("almarjcity").style.backgroundColor = "red";
	
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h4").style.backgroundColor = "red";
    document.getElementById("checkone4").checked = false;
 }
 almarjOpticalFiberKeymile= localStorage.getItem("AlmarjOpticalFiberKeymile");
  h5 = document.getElementById("h5");
  if (almarjOpticalFiberKeymile == "false") {
    document.getElementById("almarj").style.backgroundColor = "red";
	document.getElementById("almarjcity").style.backgroundColor = "red";
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h5").style.backgroundColor = "red";
    document.getElementById("checkone5").checked = false;
  }
 almarjOpticalFiberPCM_1511= localStorage.getItem("AlmarjOpticalFiberPCM_1511");
  if (almarjOpticalFiberPCM_1511 == "false") {
    document.getElementById("almarj").style.backgroundColor = "red";
	document.getElementById("almarjcity").style.backgroundColor = "red";
//	document.getElementById("OpticalFiber").style.backgroundColor = "red";
	document.getElementById("h6").style.backgroundColor = "red";
    document.getElementById("checkone6").checked = false;
  }

}








