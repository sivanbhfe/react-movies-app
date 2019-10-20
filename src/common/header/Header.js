import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import BookShow from '../../screens/bookshow/BookShow';
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
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    passwordregister: "",
    usernameRequired: "dispNone",
    passwordRequired: "dispNone",
    firstnameRequired: "dispNone",
    lastnameRequired: "dispNone",
    emailRequired: "dispNone",
    passwordregisterRequired : "dispNone",
    contactRequired : "dispNone"
};
}

modalOpenHandler = ()=>{
this.setState({modalIsOpen: true});
this.setState({
    modalIsOpen: true,
    value: 0,
    usernameRequired: "dispNone",
    passwordRequired: "dispNone",
    firstnameRequired: "dispNone",
    lastnameRequired: "dispNone",
    emailRequired: "dispNone",
    passwordregisterRequired : "dispNone",
    contactRequired : "dispNone",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email:"",
    passwordregister: "",
    contact: ""
});
}

modalCloseHandler = ()=>{
this.setState({modalIsOpen: false});
}

tabChangeHandler = (event, value) => {
this.setState({value});
}

// Onclick of LOGIN button
loginClickHandler = () => {
    this.state.username === "" ? this.setState({usernameRequired:"dispBlock"}) : 
    this.setState({usernameRequired:"dispNone"});

    this.state.password === "" ? this.setState({passwordRequired:"dispBlock"}) : 
    this.setState({passwordRequired:"dispNone"});

}

// Onclick of REGISTER button
registerClickHandler = () => {
    this.state.firstname === "" ? this.setState({firstnameRequired:"dispBlock"}) : 
    this.setState({firstnameRequired:"dispNone"});

    this.state.lastname === "" ? this.setState({lastnameRequired:"dispBlock"}) : 
    this.setState({lastnameRequired:"dispNone"});

    this.state.email === "" ? this.setState({emailRequired:"dispBlock"}) : 
    this.setState({emailRequired:"dispNone"});

    this.state.passwordregister === "" ? this.setState({passwordregisterRequired:"dispBlock"}) : 
    this.setState({passwordregisterRequired:"dispNone"});

    this.state.contact === "" ? this.setState({contactRequired:"dispBlock"}) : 
    this.setState({contactRequired:"dispNone"});
}

// LOGIN form elements
inputUserNameChangeHandler = (e) => {
    this.setState({username: e.target.value});
}

inputPasswordChangeHandler = (e) => {
    this.setState({password: e.target.value});   
}

// REGISTER form elements
inputFirstNameChangeHandler = (e) => {
    this.setState({firstname: e.target.value});
}

inputLastNameChangeHandler = (e) => {
    this.setState({lastname: e.target.value});
}

emailChangeHandler = (e) => {
    this.setState({email: e.target.value});
}

passwordregisterChangeHandler = (e) => {
    this.setState({passwordregister: e.target.value});
}

contactChangeHandler = (e) => {
    this.setState({contact: e.target.value});
}

bookshowHandler = () => {
    ReactDOM.render(<BookShow />, document.getElementById('root'));
}

// render method starts

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
        {this.props.showBookShowButton==="true" ? 
        <div className="bookshow-button">
            <Button onClick={this.bookshowHandler} variant="contained" color="primary">
                BOOK SHOW
            </Button>   
        </div> : ""}
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
                <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler}/>
                <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
            </FormControl><br /><br />
            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
        </TabContainer>
        }
                {this.state.value==1 &&
        <TabContainer className="tabcontainer">
            <FormControl required>
                <InputLabel  htmlFor="userName">First Name</InputLabel>
                <Input id="firstName" type="text" firstname={this.state.firstname} onChange={this.inputFirstNameChangeHandler}/>
                <FormHelperText className={this.state.firstnameRequired}><span className="red">required</span></FormHelperText>
            </FormControl><br /><br />
            <FormControl required>
                <InputLabel  htmlFor="lastName">Last Name</InputLabel>
                <Input id="lastName" type="text" lastname={this.state.lastname} onChange={this.inputLastNameChangeHandler}/>
                <FormHelperText className={this.state.lastnameRequired}><span className="red">required</span></FormHelperText>
            </FormControl><br /><br />
            <FormControl required>
                <InputLabel  htmlFor="email">Email</InputLabel>
                <Input id="email" type="text" email={this.state.email} onChange={this.emailChangeHandler}/>
                <FormHelperText className={this.state.emailRequired}><span className="red">required</span></FormHelperText>
            </FormControl><br /><br />
            <FormControl required>
                <InputLabel  htmlFor="passwordregister">Password</InputLabel>
                <Input id="passwordregister" type="password" passwordregister={this.state.passwordregister} onChange={this.passwordregisterChangeHandler}/>
                <FormHelperText className={this.state.passwordregisterRequired}><span className="red">required</span></FormHelperText>
            </FormControl><br /><br />
            <FormControl required>
                <InputLabel  htmlFor="contact">Contact No.</InputLabel>
                <Input id="contact" type="text" contact={this.state.contact} onChange={this.contactChangeHandler}/>
                <FormHelperText className={this.state.contactRequired}><span className="red">required</span></FormHelperText>
            </FormControl><br /><br />
            <Button variant="contained" color="primary" onClick={this.registerClickHandler}>REGISTER</Button>
        </TabContainer>
        }
    </Modal>
</div>);
}
}
  /* <Tellit id="TOOOOOOOOOOOOOR"><p>OOOOOOOOOOOOOOOOPS/p></p></Tellit> */
export default Header;