//React components
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Other JS files
import Header from '../../common/header/Header';
import Home from '../home/Home';
import Details from '../details/Details';

//CSS files
import './BookShow.css';

//From @material-ui
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class BookShow extends Component {

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
                </CardContent>
            </Card>
        </div>
        </div>
    );
}
}
export default BookShow;