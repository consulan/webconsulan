// JavaScript Document
var sistema={
				 iconos:null,
				 textos:null,
				 arregloMenu:null,
				 imgTitulo:null,
				 inicializar:function(array,arrayTxt){
					var arreglo=new Array();
					sistema.imgTitulo=document.getElementById("imageT");
					arreglo.push(new Array(array[0].id,"1",arrayTxt[0],"1"));
							array[0].style.position="absolute";
					 		array[0].style.top="-70px";
					 		array[0].style.left="0px";
							arrayTxt[0].style.visibility="hidden";
					 		sistema.agregaEvento(array[0]);
					for(i=1;i<array.length;i++){
							array[i].style.position="absolute";
					 		array[i].style.top="0px";
					 		array[i].style.left="0px";
					 		sistema.agregaEvento(array[i]);
							arreglo.push(new Array(array[i].id,"0",arrayTxt[i],i+1));
							arrayTxt[i].style.visibility="hidden";
						}
						return arreglo;
					 
				 },
				 agregaEvento:function(Obj){
					 Obj.addEventListener('mouseover',sistema.mousein,true);
					 Obj.addEventListener('mouseout',sistema.mouseout,true);
					 Obj.addEventListener('click',sistema.clicker,true);
				 },
				 mousein:function(){
					 this.style.top="-70px";
					 this.style.cursor="pointer";
					 var posDev=sistema.buscarIndex(sistema.arregloMenu,this.id);
					 var texto=sistema.arregloMenu[posDev][2];
					 texto.style.visibility="visible";
			     },
				 mouseout:function(){
					 var posDev=sistema.buscarIndex(sistema.arregloMenu,this.id);
					 var estado=sistema.arregloMenu[posDev][1];
					 var texto=sistema.arregloMenu[posDev][2];
					 texto.style.visibility="hidden";
					 if(estado!=1){
					 this.style.top="0px";
					 }
				 },
				 clicker:function(){
					 var posicion=sistema.buscarIndex(sistema.arregloMenu,this.id);
					 var arreglo=sistema.arregloMenu;
					 for(i=0;i<arreglo.length;i++){
						 var IdPagina="pagina"+arreglo[i][3];
						 var pagina=document.getElementById(IdPagina);
							if(posicion==i){
								arreglo[i][1]="1";
								sistema.imgTitulo.src=arreglo[i][2].src;
								pagina.style.visibility="visible";
								sistema.inviHijos(pagina,0);
								}
							else {
								arreglo[i][1]="0";
								document.getElementById(arreglo[i][0]).style.top="0px";	
								pagina.style.visibility="hidden";
								sistema.inviHijos(pagina,1);
							}
					 }
					 sistema.arregloMenu=arreglo;
				 },
				 buscarIndex:function(arregloBuscar,Obj){
					 var pos=-1;
					 for(i=0;i<arregloBuscar.length;i++){
							if(arregloBuscar[i][0]==Obj){
								pos=i;
								}
					 }
					 return pos;
				 },
				 inviHijos:function(Obj,estado){
							 var hijos=Obj.childNodes;
							 for(j=0;j<hijos.length-1;j++){
								 if(hijos.item(j).nodeType==1){
									 estado==1?hijos.item(j).style.visibility="hidden":hijos.item(j).style.visibility="visible";
								 }
								 else {
								 }
							  }
							  if(estado!=1){ 
							  	jsistema.abreTodos(Obj);
							  }
				 },
				 run:function(){
					sistema.iconos=document.getElementsByClassName("icono");
					sistema.textos=document.getElementsByClassName("texto");
					sistema.arregloMenu=sistema.inicializar(sistema.iconos,sistema.textos);
					
					
				 }
				 
				
				
	}