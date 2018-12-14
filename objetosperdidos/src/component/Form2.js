import React,{Component} from 'react';
import axios from 'axios';

class Form2 extends Component{

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
                    <textarea className="form-control" id="name" aria-label="With textarea" placeholder="Es tuyo este objeto? comenta..."
                        onChange={this.onInputChange}
                        value={this.state.name}
                    />
                </div>
                <p></p>
                <button type="button" class="btn btn-primary" type="submit">Publicar Comentario..</button>
            </form>
        )
    }
}

export default Form2;