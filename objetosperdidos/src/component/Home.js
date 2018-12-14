import React, {Component} from 'react';
import Card from './Card';
import Navbar from './Navbar';
import Form from './Form'
import axios from 'axios';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      listCards:[<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>],
      listAuthors:[]
    }
  }

  componentDidMount(){
    axios.get('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/')
      .then(authors => {
        this.setState({
          listAuthors:authors.data
        })
      }).catch(err => console.log(err))
  }

  renderCards = () => {
    if (this.state.listAuthors.length === 0){
      return <center><h1>Cargando objetos perdidos....</h1></center>
    }else{
      const cardListAuthors = this.state.listAuthors.map(author => {
        return <Card nombre={author.name} bio={author.biography} ide={author.id}/>
      });
      return cardListAuthors;
      //[<Card/>,<Card/>,<Card/>,<Card/>...]
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <center><br></br><h1>Publicar un objeto perdido</h1></center>
        <Form/>
        <div className="App row ml-5" class="container">
          {/* {this.state.listCards} */}
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default Home;