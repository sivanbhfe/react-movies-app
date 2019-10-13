import React, {Component} from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

//From Material-UI
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const customStyles = {
content:{
top:'50%',
left:'50%',
right: 'auto',
bottom: 'auto',
marginRight: '-50%',
transform: 'translate(-50%, -50%)'
}
};

const TabContainer = function(props){
return(<Typography component="div" style={{padding:0}}>
    {props.children}
</Typography>); 
}

// const Tellit = function (props){
//     return(<p>{props.id}</p>);
// }

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
    <Modal style={customStyles} ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" 
    onRequestClose={this.modalCloseHandler}>
        <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
            <Tab label="Login" />
            <Tab label="Register" />
        </Tabs>
        <TabContainer>
            <FormControl required>
                <InputLabel htmlFor="userName">UserName</InputLabel>
                <Input id="userName" type="text"/>
            </FormControl>
            <FormControl required>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" type="password"/>
            </FormControl>
        </TabContainer>
  
    </Modal>
</div>);
}
}
  /* <Tellit id="TOOOOOOOOOOOOOR"><p>OOOOOOOOOOOOOOOOPS/p></p></Tellit> */
export default Header;