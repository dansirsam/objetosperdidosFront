import React,{Component} from 'react';
import './card.css'
import Form2 from './Form2'

class Card2 extends Component{



    render(){
        return(
            <div className="card Card mt-5 mr-3">
                <center>
                <img className="card-img-top image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqB58MSqMPIXcgIZrxljSIPeDlnvfLdG5z0mr2FsKMIVZkMi-H4g" alt="Card image cap"/>
                <p><br></br></p>
                <nav class="navbar navbar-dark bg-dark">
                <a className="navbar-brand" style={{color:"#ffff"}}><strong>DATOS DEL AUTOR</strong></a>
                </nav>
                
                    <div class="card">
                        <div class="card-body">
                            <h6><strong>NOMBRE:</strong></h6>
                            <p>{this.props.nombre}</p>
                            <h6><strong>APELLIDO:</strong></h6>
                            <p>{this.props.apell}</p>
                            <h6><strong>NACIONALIDAD:</strong></h6>
                            <p>{this.props.naci}</p>
                            <h6><strong>GENERO:</strong></h6>
                            <p>{this.props.gene}</p>
                            <h6><strong>EDAD:</strong></h6>
                            <p>{this.props.edad}</p>
                        </div>
                    </div>

                <p><br></br></p>
                <nav class="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" style={{color:"#ffff"}}><strong>DESCRIPCION DEL OBJETO</strong></a>
                </nav>
                <div className="card-body image">
                    <p className="card-text subtitle">{this.props.bio}</p>
                </div>
                <p><br></br></p>
                <nav class="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" style={{color:"#ffff"}}><strong>COMENTARIOS</strong></a>
                </nav>

                <p><br></br></p>
                <Form2/>
                <p><br></br></p>
                </center>
                </div>
        )
    }
}

export default Card2;