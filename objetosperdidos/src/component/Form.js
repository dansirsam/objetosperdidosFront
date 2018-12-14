import React,{Component} from 'react';
import axios from 'axios';

class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            titulo:"",
            descripcion:"",
            estatus:false
        }
    }

    onInputChange = (e) =>{
        const {id,value} = e.target;
        this.setState({
            [id]:value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:3002/publicar/objetoPerdido',this.state)
            .then(author => alert('Objeto perdido registrado'))
            .catch(err => alert(err))
    }

    render(){
        return(
            <form className="p-5" class="container" onSubmit={this.onSubmitForm}>
                <div className="form-group">
                    <label for="formGroupExampleInput">Título del objeto</label>
                    <input type="text" className="form-control" id="titulo" placeholder="¿Qué objeto te encontraste?"
                        onChange={this.onInputChange}
                        value={this.state.titulo}
                    />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Descripcion</label>
                    <input type="text" class="form-control" id="descripcion" placeholder="Describe las características como color, marca, tamaño, etc.."
                    onChange={this.onInputChange}
                    value={this.state.descripcion}
                    />
                </div>
                <button className="btn btn-success" type="submit">Publicar</button>
            </form>
        )
    }
}

export default Form;