import React, {Component} from 'react';
import Card2 from './Card2';
import Navbar from './Navbar';
import axios from 'axios';

class Objeto extends Component{
  constructor(props){
    super(props);

    this.state = {
      listCards:[<Card2/>],
      listobjetos:[]
    }
  }

  componentDidMount(){
    let id = this.props.location.search;
    let idObj = id.substring(4, id.length);
    axios.get(`http://127.0.0.1:3002/objetoPerdido/${idObj}`)
      .then(objetos => {
        console.log(objetos);
        this.setState({
          listobjetos:objetos.data
        })
      }).catch(err => console.log(err))
  }

  renderCards = () => {
  //   if (this.state.listobjetos.length === 0){
  //     return <center><br></br><h5>Cargando detalles del objeto....</h5></center>
  //   }else{
  //     const cardListobjetos = this.state.listobjetos.map(objPerdido => {
  //       return <Card2 titulo={objPerdido.titulo} descripcion={objPerdido.descripcion} />
  //     });
  //     return cardListobjetos;
  //     //[<Card/>,<Card/>,<Card/>,<Card/>...]
  //   }
  console.log(this.listobjetos);

      return <Card2 titulo={this.state.listobjetos.titulo} descripcion={this.state.listobjetos.descripcion} />


  }


  render() {
    return (
      <div>
        <Navbar/>
        <center><br></br><h1>{this.state.listobjetos.titulo}</h1></center>
        <div className="App row ml-5" class="container">
          {/* {this.state.listCards}*/}
          {this.renderCards()} 
        </div>
      </div>
    );
  }
}

export default Objeto;