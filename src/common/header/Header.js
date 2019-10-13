import React, {Component} from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

//From Material-UI
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends Component{
    constructor(){
        super();
        this.state= {modalIsOpen:false, value:0};
    }

    modalOpenHandler = ()=>{
        this.setState({modalIsOpen: true});
    }

    modalCloseHandler = ()=>{
        this.setState({modalIsOpen: false});
    }

    tabChangeHandler = (event, value) => {
        this.setState({value});
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
            onRequestClose={this.modalCloseHandler}>
                <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
            </Modal>
        </div>);
    }
}

export default Header;