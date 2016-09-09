// JavaScript Document
var animaciones={
				 arregloID:null,
				 arregloParr:null,
				 objParr:null,
				 cargarObjParr:function(Arr){
						 for(i=0;i<Arr.length-1;i++){
									 
						 }
				 },
				 inicializar:function(ArregloID,ArregloP){
					 animaciones.arregloID=ArregloID.split(",");
					 animaciones.arregloParr=ArregloP.split(",");
					 animaciones.objParr=new Array();
				 },
				 run:function(){
							 animaciones.inicializar("ap21,ap22,ap23,ap24,ap45","parrafo21,parrafo22,parrafo23,parrafo24,parrafo25");
				 }
	}