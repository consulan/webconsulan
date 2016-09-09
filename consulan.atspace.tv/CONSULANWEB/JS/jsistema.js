// JavaScript Document 
/*funcionalidad para abrir una ventana*/

var jsistema={
			  paginas:["pagina1","pagina2","pagina3","pagina4","pagina5"],
			  parrafos:null,
			  estado:null,
			  inicializar:function(){
				jsistema.estado=new Array();
				jsistema.parrafos=new Array(); 
				for(i=0;i<=jsistema.paginas.length-1;i++){
					var Pagina=document.getElementById(jsistema.paginas[i]);
					jsistema.incluirParr(Pagina);
					
					}  
			  },
			  incluirParr:function(Obj){
				  var hijos=Obj.childNodes;
				  for(k=0;k<hijos.length-1;k++){
								 if(hijos.item(k).nodeType==1){
									 	var parrafo=hijos.item(k);
									 	jsistema.parrafos.push(parrafo);
										parrafo.addEventListener("click",jsistema.janimate,true);
										jsistema.estado.push(new Array(parrafo.id,0,parrafo.style.height,parrafo.style.width,parrafo.style.left,parrafo.style.top));
												 
								 }
								 else {
								 }
				  }
			  },
			  estaAbierto:function(Identificador){
				     for(i=0;i<=jsistema.parrafos.length-1;i++){
							if(jsistema.estado[i][0].indexOf(Identificador)!=-1){
								if(jsistema.estado[i][1]==1){
									return true;
									}
								else {
									jsistema.estado[i][1]=1;
									return false;
									}
							}	 
					};
			  },
			  cierraTodos:function(PaginaPadre){
				   var hijos=PaginaPadre.childNodes;
				   var hijosElement=new Array();
				   for(var s=0;s<=hijos.length-1;s++){
					   	if(hijos.item(s).nodeType==1){
							hijosElement.push(hijos.item(s));
						}
				   }
				   
						   for(var n=0;n<=jsistema.estado.length-1;n++){
							   var Obj=document.getElementById(jsistema.estado[n][0]);
							   					if(hijosElement.indexOf(Obj)!=-1){
																Obj.style.height=jsistema.estado[n][2];
																Obj.style.width=jsistema.estado[n][3];
																Obj.style.left=jsistema.estado[n][4];
																Obj.style.top=jsistema.estado[n][5];
																jsistema.estado[n][1]=0;  	
												}
												else {
												Obj.style.visibility="hidden";
												}
									
							   }
					
				 
			  },
			  abreTodos:function(PaginaPadre){
				  var hijos=PaginaPadre.childNodes;
				   var hijosElement=new Array();
				   for(var s=0;s<=hijos.length-1;s++){
					   	if(hijos.item(s).nodeType==1){
								document.getElementById(hijos.item(s).id).style.visibility="visible";
								hijosElement.push(hijos.item(s));
						}
				   }
				   
				    for(var n=0;n<=jsistema.estado.length-1;n++){
							   var Obj=document.getElementById(jsistema.estado[n][0]);
							   					if(hijosElement.indexOf(Obj)!=-1){
																Obj.style.height=jsistema.estado[n][2];
																Obj.style.width=jsistema.estado[n][3];
																Obj.style.left=jsistema.estado[n][4];
																Obj.style.top=jsistema.estado[n][5];
																jsistema.estado[n][1]=0;  	
												}
												else {
												Obj.style.visibility="hidden";
												}
									
							   }
				  
			   },
			  accionTodos:function(accion){
				  if(accion==0){
				   for(i=0;i<=jsistema.parrafos.length-1;i++){
					        var Obj=document.getElementById(jsistema.estado[i][0]);
							if(jsistema.estado[i][1]==0){
									Obj.style.visibility="hidden";
							}	 
					}
				  }
				  else {
					  for(i=0;i<=jsistema.parrafos.length-1;i++){
							var Obj=document.getElementById(jsistema.estado[i][0]);
							if(jsistema.estado[i][1]==0){
									Obj.style.visibility="visible";
							}
						}
				  }
			  },				  
			  janimate:function(){
				  var este="#"+this.id;
				  var paginaPadre=document.getElementById(this.id).parentNode;
				  var estaAbierto=jsistema.estaAbierto(this.id);				  
				  	if(estaAbierto){
						jsistema.accionTodos(1);
						jsistema.cierraTodos(paginaPadre);
					}
					else {
						jsistema.accionTodos(0);
						$(document).ready(function(e) {
                          	$(este).animate({height:'+=180',width:'+=350',left:'3em',top:'0px'});
                		});
					}
			  },
			  run:function(){
				  jsistema.inicializar();
			  }
	
	}