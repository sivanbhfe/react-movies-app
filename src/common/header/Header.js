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
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';

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
return(<Typography component="div" style={{padding:0, textAlign:'center'}}>
    {props.children}
</Typography>); 
}

TabContainer.propTypes = {children: PropTypes.node.isRequired};

// const Tellit = function (props){
//     return(<p>{props.id}</p>);
// }

class Header extends Component{

constructor(){
super();
this.state= {
    modalIsOpen:false, 
    value:0, 
    username:"",
    usernameRequired:"dispNone"};
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

loginClickHandler = () => {
    this.state.username === "" ? this.setState({usernameRequired:"dispBlock"}) : 
    this.setState({usernameRequired:"dispNone"});
}

inputUserNameChangeHandler = (e) => {
    this.setState({username: e.target.value});
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
        <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
            <Tab label="Login"/>
            <Tab label="Register" />
        </Tabs>
        {this.state.value==0 &&
        <TabContainer className="tabcontainer">
            <FormControl required>
                <InputLabel  htmlFor="userName">UserName</InputLabel>
                <Input id="userName" type="text" username={this.state.username} onChange={this.inputUserNameChangeHandler}/>
                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
            </FormControl><br /><br />
            <FormControl required>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" type="password"/>
                <FormHelperText className={this.state.usernameRequired}>required</FormHelperText>
            </FormControl><br /><br />
            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
        </TabContainer>
        }
                {this.state.value==1 &&
        <TabContainer className="tabcontainer">
            <FormControl required>
                <InputLabel  htmlFor="userName">Enter a UserName</InputLabel>
                <Input id="enterUserName" type="text"/>
            </FormControl><br /><br />
            <FormControl required>
                <InputLabel htmlFor="password">Enter a Password</InputLabel>
                <Input id="enterPassword" type="password"/>
            </FormControl><br /><br />
            <Button variant="contained" color="primary">LOGIN</Button>
        </TabContainer>
        }
    </Modal>
</div>);
}
}
  /* <Tellit id="TOOOOOOOOOOOOOR"><p>OOOOOOOOOOOOOOOOPS/p></p></Tellit> */
export default Header;