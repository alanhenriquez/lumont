
    









    
    
    
//-- TITULO DE LA PAGINA --    
    
    
    














    
    let titulo = document.querySelector('head title');
        titulo.innerHTML = ('Lumont');
    
    















    
//-- TERMINA TITULO DE LA PAGINA --       
//-- ENLACE GLOBAL DE URL O DE LA PAGINA --  
    














    
    $('body').show(function () {
        
        
        
        let agregar = document.querySelector('body');
        agregar.innerHTML+= `<div class="nada"><div class="puntos"><p></p></div><div class="archivo"><p></p></div></div>`;
        
        
        
    });
    
    function filename_all(){
        
        
        
        let filepath = document.location.href;
        let group = filepath.split("/");
        let filenameWithExtension = group;  
        return filenameWithExtension;
        
        
        
    };
    

    function generateDot(){
        
        
        
        let puntos = document.querySelector('.nada .puntos p');
        puntos.innerHTML = '';
        
    
        //ESTIPULAMOS QUE DETECTE LOS ELEMENTOS Y RESUMA AL NUMERO NESESARIO
        
        
        
        let ultimonum = filename_all().length;
        let ultimo = ultimonum;
        let septimo = filename_all().indexOf('Lumont');
        let real = (ultimo - septimo - 2);
        
        
      
        //GENERAMOS EL BUECLE DE LOS PUNTOS
        
        
        
        for(var i = 0; i < real; i++){
            
            
            puntos.innerHTML += ('../');
            
            
        }
        
        
        
        //COPIAMOS EL RESULTADO FINAL Y REGRESAMOS
        
        
        
        let puntitos = document.querySelector('.nada p').textContent;
        return puntitos;
        

        
    };
    generateDot();
    



    
    function tiempo(){

        var meses_escritos = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        var colocarmeses = meses_escritos;
        var year = new Date();     
        var month = new Date();   
        var day = new Date();        
        var hours = new Date();
        var minutes = new Date();
        var seconds = new Date();     
        var ampm = hours <= 12 ? 'a.m.' : 'p.m.';   
        year = year.getFullYear();
        month = month.getMonth();
        day = day.getDate();    
        hours = hours.getHours();   
        minutes = minutes.getMinutes();   
        seconds = seconds.getSeconds();    
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;  

        //INCERTAR LA SIGUIENTE VARIABLE EN TU CODIGO
        ponertiempo = day + ' de ' + colocarmeses[month] + ' del ' + year + ' • ' + hours + ':' + minutes + ' ' + ampm + ' y ' + seconds + ' segundos ';
        return ponertiempo;

    };



 













    
//-- ENLACE GLOBAL DE URL O DE LA PAGINA --
    
//-- CODIGO PARA EL ICONO DE LA PAGINA --


















    (function() {
       
       
        var link_icon_web = document.querySelector("link[rel='shortcut icon']") || document.createElement('link');
        link_icon_web.type = 'image/x-icon';
        link_icon_web.rel = 'shortcut icon';
        link_icon_web.href = 'imagenes/banners/rosa-arcoiris.jpeg';
        document.getElementsByTagName('head')[0].appendChild(link_icon_web);
        
        
    })();


















//-- TERMINA CODIGO PARA EL ICONO DE LA PAGINA --
//-- COMIENZA CODIGO PARA EL SLIDE DE LA PAGINA --

    















    
    
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


















//-- TERMINA CODIGO PARA EL SLIDE DE LA PAGINA --
//-- COMIENZA CODIGO PARA LOS SERVICIOS --  
    
































    

const Principal = ()=>{
    
    
    
    var cero = 0;
    const contenedor_info_servicio = [
        
    /* categoria:
    
    -informacion-servicios
    -informacion-especial
    
    */    
        
    {nombre: 'Reserva ya tu cita en cualquier servicio Lumont', categoria: 'informacion-servicios', id: cero++},
        
    {nombre: 'Aprovecha de fantasticas ofertas Lumont', categoria: 'informacion-especial', id: cero++},    
        
        
    ];
    
    const contenedor_principal = document.querySelector('.contenedor-principal .cint-body');
    
    
    /*EJECUCION DE ELEMENTOS AL DOCUMENTO*/
    
    
    for(let elemento of contenedor_info_servicio){
        let nombre = elemento.nombre.toLowerCase();
        let categoria = elemento.categoria.toLowerCase();
        let contenido = `


            <div class="contenedor-informacion-servicios `+elemento.categoria+`">
                
                
                <div class="cint-menu">
                    <div class="cint-menu-fondo">
                        
                        <div class="contenedor-fondos">
                            <div class="deco-0">
                                <img src="imagenes/texturas/mader-de-fresno-1.jpg">
                            </div>
                            <div class="deco-1">
                                <img src="imagenes/texturas/textura-lampara-1.jpg">
                            </div>
                            <div class="deco-2"></div>
                            <div class="deco-3"></div>
                        </div>
                        
                    </div>    
                    <div class="contenedor-tema">
                        <p>`+elemento.nombre+`</p>
                    </div>
                </div>
                <div class="cint-principal">



                </div>
                
                
            </div>

            `;
        
        
        contenedor_principal.innerHTML+= contenido;
        
    };
    
    
};






















/*---------- DIVICION ----------*/






















const Service = ()=>{
    
    
    
    var cero = 0;
    const productos = [
        
    /* categoria:
    
    -spa
    -belleza
    -ofertas
    
    */    
        
        
        
    /*SERVICIOS BELLEZA*/    
        
        
    {enlace:'#', imagen: 'imagenes/fondos/estilista-de-cabello-cortando-pelo.jpg', nombre: 'Cortes de Cabello', categoria: 'belleza', id: cero++},
    
    {enlace:'#', imagen: 'imagenes/fondos/chica-con-sombrero.jpg', nombre: 'Maquillaje', categoria: 'belleza', id: cero++},
        
    {enlace:'#', imagen: 'imagenes/fondos/chica-de-pelo-azul.jpg', nombre: 'Tintes', categoria: 'belleza', id: cero++},   
        
    {enlace:'#', imagen: 'imagenes/fondos/unas-de-color-rosado.jpg', nombre: 'Uñas', categoria: 'belleza', id: cero++},  
        
    {enlace:'#', imagen: 'imagenes/fondos/chica-peinado-posando-en-escaleras.jpg', nombre: 'Peinados', categoria: 'belleza', id: cero++}, 
        
    {enlace:'#', imagen: 'imagenes/fondos/chica-de-ojos-azules-con-leces-en-el-cabello.jpg', nombre: 'Mechas y más', categoria: 'belleza', id: cero++},  
        
    {enlace:'#', imagen: 'imagenes/fondos/muro-de-ladrillos.jpg', nombre: 'Alizados', categoria: 'belleza', id: cero++},      
        
        
    /*SERVICIOS SPA*/
        
        
    {enlace:'#', imagen: 'imagenes/fondos/chica-relajada-por-masage.jpg', nombre: 'Masajes relajantes', categoria: 'spa', id: cero++},  
    
    {enlace:'#', imagen: 'imagenes/fondos/masage-exfoliante.jpg', nombre: 'Masajes exfoliantes', categoria: 'spa', id: cero++},  
        
        
    /*OFERTAS*/ 
        
        
    {enlace:'#', imagen: '', nombre: 'Alizados', categoria: 'ofertas', precioAfter: '25000.00 $USD', precioBefore: '30.00 $USD',  id: cero++},      
        
    {enlace:'#', imagen: '', nombre: 'Peinados', categoria: 'ofertas', precioAfter: '15.00 $USD', precioBefore: '18.00 $USD', id: cero++},      
        
    {enlace:'#', imagen: '', nombre: 'Masajes', categoria: 'ofertas', precioAfter: '12.00 $USD', precioBefore: '15.00 $USD', id: cero++},   
        
    {enlace:'#', imagen: '', nombre: 'Maquillaje', categoria: 'ofertas', precioAfter: '7.00 $USD', precioBefore: '10.00 $USD', id: cero++},    
        
        
    ];


    const resultado = document.querySelector('.contenedor-informacion-servicios.informacion-servicios .cint-principal');
    const resultado_2 = document.querySelector('.contenedor-informacion-servicios.informacion-especial .cint-principal');


    var contenedor_categ_belleza = `
            
            <div class="servicio">
                <div class="contenedor-seccion">
                    <div class="cont-decoracion">
                        <div class="deco-1"></div>
                        <div class="deco-2"></div>
                        <div class="deco-3"></div>
                        <div class="deco-4"></div>
                        <div class="deco-5"></div>
                        <div class="deco-6"></div>
                    </div>
                    <div class="cont-texto">
                        <div class="cint-texto-deco">



                        </div>
                        <div class="cint-texto-informacion">
                            <p>Servicio de Belleza</p>
                        </div>
                    </div>
                </div>
                <div class="contenedor-contenido servicio-de-belleza">

                    

                </div>
            </div>
            
            `;
    var contenedor_categ_spa = `
            
            <div class="servicio">
                <div class="contenedor-seccion">
                    <div class="cont-decoracion">
                        <div class="deco-1"></div>
                        <div class="deco-2"></div>
                        <div class="deco-3"></div>
                        <div class="deco-4"></div>
                        <div class="deco-5"></div>
                        <div class="deco-6"></div>
                    </div>
                    <div class="cont-texto">
                        <div class="cint-texto-deco">



                        </div>
                        <div class="cint-texto-informacion">
                            <p>Servicio de Spa</p>
                        </div>
                    </div>
                </div>
                <div class="contenedor-contenido servicio-de-spa">

                    

                </div>
            </div>
            
            `;
    
    var contenedor_categ_ofertas = `
            
            <div class="servicio">
                <div class="contenedor-seccion">
                    <div class="cont-decoracion">
                        <div class="deco-1"></div>
                        <div class="deco-2"></div>
                        <div class="deco-3"></div>
                        <div class="deco-4"></div>
                        <div class="deco-5"></div>
                        <div class="deco-6"></div>
                    </div>
                    <div class="cont-texto">
                        <div class="cint-texto-deco">



                        </div>
                        <div class="cint-texto-informacion">
                            <p>Ofertas</p>
                        </div>
                    </div>
                </div>
                <div class="contenedor-contenido servicio-de-ofertas">

                    <div class="contenedor-ofertas">
                        <div class="cint-ofertas">

                        </div>
                    </div>

                </div>
            </div>
            
            `;

    resultado.innerHTML += contenedor_categ_belleza;
    resultado.innerHTML += contenedor_categ_spa;
    resultado_2.innerHTML += contenedor_categ_ofertas;
    const categ_belleza = document.querySelector('.cint-principal .contenedor-contenido.servicio-de-belleza');
    const categ_spa = document.querySelector('.cint-principal .contenedor-contenido.servicio-de-spa');
    const categ_ofertas = document.querySelector('.cint-principal .contenedor-contenido.servicio-de-ofertas .contenedor-ofertas .cint-ofertas');
    
    
    
    
    /*EJECUCION DE ELEMENTOS AL DOCUMENTO*/
    
    
    
    
    
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        let enlace = producto.enlace.toLowerCase();
        let imagen = producto.imagen.toLowerCase();
        let categoria = producto.categoria.toLowerCase();
        let contenido_servicio = `


            <div class="targeta-contenedor-servicio `+producto.categoria+`">
                
                <a href="`+producto.enlace+`">
                    <div class="tcint-contenedor">
                        <div class="tcint-agregados">

                            

                        </div>
                        <div class="tcint-informacion" title="`+producto.nombre+`">
                            <div class="contenedor-imagen">
                                <img src="`+producto.imagen+`"  title="`+producto.nombre+`">
                            </div>
                            <div class="contenedor-tema-servicio">
                                <div class="cint-tema-servicio">

                                    <div class="contenedor-texto">
                                        <p>`+producto.nombre+`</p>
                                    </div>
                                    <div class="borde-1"></div>
                                    <div class="borde-2"></div>
                                    <div class="borde-3"></div>

                                </div>
                            </div>
                        </div> 
                    </div> 
                </a>

            </div>

            `;
        
        
        let contenido_ofertas = `



            <div class="targeta-ofertas">


                <div class="contenedor-decoracion">
                    <div class="deco-1"></div>
                </div>
                <div class="contenedor-informacion">

                    <a href="">
                        <div class="cint-informacion-header">
                            <div class="titulo-oferta">
                                <div class="titulo-oferta-decoracion"></div>
                                <div class="titulo-oferta-informacion">
                                    <p>
                                        `+producto.nombre+`
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="cint-informacion-body">
                            <div class="precio-ahora">
                                <div class="cint-precio-decoracion"></div>
                                <div class="cint-precio-informacion">
                                    <p>
                                        `+producto.precioAfter+`
                                    </p>
                                </div>
                            </div>
                            <div class="precio-antes">
                                <div class="cint-precio-decoracion"></div>
                                <div class="cint-precio-informacion">
                                    <p>
                                        Antes: `+producto.precioBefore+`
                                    </p>
                                </div>
                            </div>
                        </div>
                     </a>    

                </div>


            </div>


            `;
        
        if(producto.categoria === 'belleza'){
            
            
            categ_belleza.innerHTML += contenido_servicio;
            
            
        }
        else if(producto.categoria === 'spa'){
            
            
            categ_spa.innerHTML += contenido_servicio;
            
            
        }
        else if(producto.categoria === 'ofertas'){
            
            
            categ_ofertas.innerHTML += contenido_ofertas;
            
            
        }
        else{
            
        }

        
        
    };
    
};






















/*---------- DIVICION ----------*/






















 window.onload = function(){
     
     
    let contenedor = document.querySelector('.contenedor-cargar-pagina');
     
    contenedor.style.transform = 'translate(-150%,-50%)';
    Principal();
    Service(); 
     
    setInterval(function() {
        contenedor.remove();
    }, 1300); 
     
    /* 
    setInterval(function() {
        let time = document.querySelector('.contenedor-informacion-servicios .cint-menu .contenedor-tema p');
        time.innerHTML = tiempo();
    }, 1000);  
    */
     
     
}



//-- TERMINA CODIGO PARA LOS SERVICIOS --  

                  














                  
