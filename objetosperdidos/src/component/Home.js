import React, {Component} from 'react';
import Card from './Card';
import Navbar from './Navbar';
import Form from './Form'
import Carrusel from './Carrusel'
import axios from 'axios';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      listCards:[<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>],
      listObjetos:[]
    }
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:3002/all/objetoPerdido')
      .then(objetos => {
        this.setState({
          listObjetos:objetos.data
        })
      }).catch(err => console.log(err))
  }

  renderCards = () => {
    if (this.state.listObjetos.length === 0){
      return <center><h1>Cargando objetos perdidos....</h1></center>
    }else{
      const cardListObjetos = this.state.listObjetos.map(objPerdido => {
        return <Card titulo={objPerdido.titulo} descripcion={objPerdido.descripcion} ide={objPerdido._id}/>
      });
      return cardListObjetos;
      //[<Card/>,<Card/>,<Card/>,<Card/>...]
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Carrusel/>
        <Form/>
        <div className="App row ml-5" class="container">
          {/* {this.state.listCards} */}
          {this.renderCards()}
        </div>
        <br/><br/>
      </div>
    );
  }
}

export default Home;