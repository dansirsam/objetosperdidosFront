import React,{Component} from 'react';
import axios from 'axios';

class Form2 extends Component{

    constructor(props){
        super(props);
        this.state = {
            comentario:""
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
        axios.post('http://127.0.0.1:3002/comentar/objetoPerdido/',this.state)
            .then(author => alert('Comentario agregado :v'))
            .catch(err => alert(err))
    }

    render(){
        return(
            <form className="p-5" class="container" onSubmit={this.onSubmitForm}>
                <div className="form-group">
                    <textarea className="form-control" id="comentario" aria-label="With textarea" placeholder="¿Es tuyo este objeto? Comenta..."
                        onChange={this.onInputChange}
                        value={this.state.comentario}
                    />
                </div>
                <p></p>
                <button type="button" class="btn btn-primary" type="submit">Publicar Comentario...</button>
            </form>
        )
    }
}

export default Form2;