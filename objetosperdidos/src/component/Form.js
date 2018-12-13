import React,{Component} from 'react';
import axios from 'axios';

class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
            last_name:"",
            biography:"",
            gender:"F",
            nacionalidad:"MX",
            age:0,   
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
        axios.post('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/',this.state)
            .then(author => alert('Author create <3'))
            .catch(err => alert(err))
    }

    render(){
        return(
            <form className="p-5" class="container" onSubmit={this.onSubmitForm}>
                <div className="form-group">
                    <label for="formGroupExampleInput">Titulo del objeto</label>
                    <input type="text" className="form-control" id="name" placeholder="Que objeto te encontraste?"
                        onChange={this.onInputChange}
                        value={this.state.name}
                    />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Descripcion</label>
                    <input type="text" class="form-control" id="last_name" placeholder="Describe las caracteristicas como color, marca, tamaño, etc.."
                    onChange={this.onInputChange}
                    value={this.state.last_name}
                    />
                </div>
                <button className="btn btn-success" type="submit">Publicar</button>
            </form>
        )
    }
}

export default Form;