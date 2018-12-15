import React,{Component} from 'react';


class Navbar extends Component{

    detalles2 = () => {
        document.location.href = "./Objeto"
      }

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark justify-content-between">
                <a className="navbar-brand" style={{color:"#ffff"}}><strong>OBJETOS PERDIDOS</strong></a>
                <form className="form-inline">
                </form>
            </nav>
        )
    }
}

export default Navbar;