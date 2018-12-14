import React,{Component} from 'react';
import './card.css'

class Card extends Component{

detalles = () => {
  document.location.href = `./Objeto?id=${this.props.ide}`
}


    render(){
        return(
            <div className="card Card mt-5 mr-3">
                <center>
                <img className="card-img-top image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqB58MSqMPIXcgIZrxljSIPeDlnvfLdG5z0mr2FsKMIVZkMi-H4g" alt="Card image cap"/>
                <div className="card-body image">
                    <h5 className="card-title">{this.props.titulo}</h5>
                    <p className="card-text subtitle">{this.props.descripcion}</p>
                </div>
                <button type="button" onClick = {this.detalles} class="btn btn-primary">Ver más detalles..</button>
                </center>
                </div>
        )
    }
}

export default Card;