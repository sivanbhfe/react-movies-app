import React, {Component} from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

//From Material-UI
import Button from '@material-ui/core/Button';

class Header extends Component{
    constructor(){
        super();
        this.state= {modalIsOpen:false};
    }

    modalOpenHandler = ()=>{
        this.setState({modalIsOpen: true});
    }

    modalCloseHandler = ()=>{
        this.setState({modalIsOpen: false});
    }

    render(){   
        return(
            <div>
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo"/>
                <div className="login-button">
                    <Button onClick={this.modalOpenHandler} variant="contained" color="default">
                        Login
                    </Button>   
                </div>
            </header>  
            <Modal ariaHideApp={false}isOpen={this.state.modalIsOpen} contentLabel="Login" 
            onRequestClose={this.modalCloseHandler}></Modal>
        </div>);
    }
}

export default Header;