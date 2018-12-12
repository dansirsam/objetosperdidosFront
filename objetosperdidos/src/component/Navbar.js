import React,{Component} from 'react';

class Navbar extends Component{

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark justify-content-between">
                <a className="navbar-brand" style={{color:"#ffff"}}>Objetos Perdidos</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </nav>
        )
    }
}

export default Navbar;