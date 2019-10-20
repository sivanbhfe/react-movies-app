//React components
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

//CSS files
import './ConfirmBooking.css';

//From @material-ui
import Typography from '@material-ui/core/Typography';
import BookShow from '../bookshow/BookShow';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ClearIcon from '@material-ui/icons/Clear';

const customStyles = {
    content:{
    top:'10%',
    left:'50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'20%',
    background: 'rgb(49,49,49)'
    }
    };

class ConfirmBooking extends Component {
    constructor (){
        super();
        this.state = {
            couponCode:"",
            modalIsOpen:false
        }
    }


    backtoBookShowHandler = event => {
        ReactDOM.render(<BookShow />, document.getElementById("root"));
    }
    couponCodeChangeHandler = event => {

    }
    confirmBookingChangeHandler = event => {
        this.setState({modalIsOpen:true})
    }
    modalCloseHandler = event => {
        this.setState({modalIsOpen:false})
    }

render(){
    return(<div className="confirmContainer">
        <Typography className="back" onClick={this.backtoBookShowHandler}>
            &#60; Back to Book Show
        </Typography>
        <Card className="cardStyle">
            <CardContent>
            <Typography > <span className="bold bigger">SUMMARY</span></Typography><br />
                <span>Location: </span><span>{this.props.location}</span><br /><br />
                <span>Language: </span><span>{this.props.language}</span><br /><br />
                <span>Show Date: </span><span>{this.props.showDate}</span><br /><br />
                <span>Show Time: </span><span>{this.props.showTime}</span><br /><br />
                <span>Tickets: </span><span>{this.props.tickets}</span><br /><br />
                <FormControl>
                    <InputLabel  htmlFor="couponCode">Coupon Code</InputLabel>
                    <Input id="couponCode" type="text" value={this.state.couponCode}/>
                </FormControl>
                    <Button onClick={this.couponCodeChangeHandler} variant="contained" color="primary">
                        APPLY
                    </Button>  <br /><br />
                    <span className="bold">Total Price: </span><span className="bold">{this.props.totalPrice}</span><br /><br />
                    <Button onClick={this.confirmBookingChangeHandler} variant="contained" color="primary">
                        CONFIRM BOOKING
                    </Button>  
                </CardContent></Card>
                <Modal onRequestClose={this.modalCloseHandler} ariaHideApp={false} style={customStyles} isOpen={this.state.modalIsOpen}>
                     <div> <span className="fontSize" className="green">
                         <CheckCircleIcon />
                         <span className="fontSize">     Booking Confirmed!</span></span>
                    <span className="closeButton"><ClearIcon onClick={this.modalCloseHandler} /></span></div>
                    
                    
                </Modal>
</div>);
}
}
export default ConfirmBooking;
