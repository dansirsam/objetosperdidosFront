import React, {Component} from 'react';
import Card2 from './Card2';
import Navbar from './Navbar';
import axios from 'axios';

class Objeto extends Component{
  constructor(props){
    super(props);
    this.state = {
      listCards:[<Card2/>],
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
      return <center><br></br><h5>Cargando detalles del objeto....</h5></center>
    }else{
      const cardListAuthors = this.state.listAuthors.map(author => {
        return <Card2 nombre={author.name} bio={author.biography} apell={author.last_name} naci={author.nacionalidad} gene={author.gender} edad={author.age}/>
      });
      return cardListAuthors;
      //[<Card/>,<Card/>,<Card/>,<Card/>...]
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <center><br></br><h1>Detalles del objeto perdido</h1></center>
        <div className="App row ml-5" class="container">
          {/* {this.state.listCards}*/}
          {this.renderCards()} 
        </div>
      </div>
    );
  }
}

export default Objeto;