//React components
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Other JS files
import Header from '../../common/header/Header';
import Home from '../home/Home';
import Details from '../details/Details';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';

//CSS files
import './BookShow.css';

//From @material-ui
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class BookShow extends Component {

    constructor() {
        super();
        this.state = {
            location: ""
        }
    }

backtohomeHandler =() =>
{
    ReactDOM.render(<Home />, document.getElementById("root"));
}

render(){
    return(
        
    <div>
        <Header />
    
            <div className="bookShow">
            <Typography className="back" onClick={this.backtohomeHandler}>
                &#60; Back to Movie Details
            </Typography>
            <Card className="cardStyle">
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                BOOK SHOW
                            </Typography><br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="location">Choose Location:</InputLabel>
                                <Select
                                    value={this.state.location}
                                    onChange={this.locationChangeHandler}
                                >
                                    {location.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.location}>
                                            {loc.location}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </CardContent>
                    </Card>
        </div>
        </div>
    )
}
}
export default BookShow;