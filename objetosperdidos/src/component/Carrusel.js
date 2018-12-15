import React,{Component} from 'react';

class Carrusel extends Component{

    render(){
        return (
        
          <div class="card bg-dark text-white" class = "container">
            <img class="card-img" src="https://sonar.es/system/attached_images/11224/original/objetos_perdidos.svg?1516876541" alt="Card image"/>
            <div class="card-img-overlay" class = "container"><center>
              <h5 class="card-title"><h3><strong>* Bienvenidos *</strong></h3><br/></h5>
              <p class="card-text"><strong>Objetos perdidos es una pagina para poder publicar cosas que nos hemos encontrado en algun lugar
               y deseamos que vuelvan a manos de sus dueños, ya que perder algo es frustrante y el devolverlo nos da la satisfaccion
               de ayudar a alguien.</strong><br/><br/></p>
              <p class="card-text"><strong>Has perdido algo?.. has econtrado algo?.. estas en el lugar correcto.. comienza ya, y busca o encuentra tu objeto perdido.</strong></p><br/><br/></center>
              
            </div>
            <nav class="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" style={{color:"#ffff"}}><strong>PUBLICAR UN OBJETO PERDIDO</strong></a>
                </nav><br/>

          </div>
        )
    }
}

export default Carrusel;