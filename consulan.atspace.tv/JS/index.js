// JavaScript Document
sistema={
			logoR:null,
			imgR:null,
			addEvento:function(elemento,tipoEvento,manejador){
					
					if (elemento.attachEvent){
							elemento.attachEvent("on"+tipoEvento,manejador);
						}
					else 
					{
						if(elemento.addEventListener){
						elemento.addEventListener(tipoEvento,manejador,true);
						}
					}
			},
			inicializar:function(){
				sistema.imgR=document.getElementById('logo');
				sistema.logoR=document.getElementById('recuadroLogo');
				sistema.addEvento(sistema.logoR,'mouseover',sistema.cambiar);
				sistema.addEvento(sistema.logoR,'mouseout',sistema.cambiar_out);
				sistema.addEvento(sistema.logoR,'click',sistema.gotoURL);
			},
			cambiar:function(){
				sistema.imgR.src="IMG/logo_up.png";
				sistema.logoR.style.cursor="pointer";	
			},
			cambiar_out:function(){
				sistema.imgR.src="IMG/logo.png";
				sistema.logoR.style.cursor="auto";		
			},
			gotoURL:function(){
				window.location=('CONSULANWEB/index.html');	
			},
			run:function(){
				var image1=new Image();
				image1.src="IMG/logo_up.png";
				var image2=new Image();
				image2.src="IMG/logo.png";
				sistema.inicializar();
			}
	}
	

	