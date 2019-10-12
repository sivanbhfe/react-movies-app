import React, {Component} from 'react';
import './Header.css';

//From Material-UI
import Button from '@material-ui/core/Button';

class Header extends Component{
    render(){   
        return(
        <div>
            <Button color="default" variant="conained">Login</Button>
      </div>);
    }
}

export default Header;