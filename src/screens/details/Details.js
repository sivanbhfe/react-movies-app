import React, {Component} from 'react';
import YouTube from 'react-youtube';
import ReactDOM from 'react-dom';
import './Details.css';
import Header from '../../common/header/Header';
import Home from '../home/Home';
import moviesData from '../../assets/movieData';
import Typography from '@material-ui/core/Typography';

class Details extends Component {
    constructor(){
        super();
        this.state ={
            movie:{}
        }
    }

    componentWillMount(){
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov)=>{
            return mov.id === this.props.movieId
        })[0];
        this.setState({currentState});
        console.log(this.state);
    }

    backtohomeHandler =() =>
    {
        ReactDOM.render(<Home/>, document.getElementById("root"));
    }

render(){
    let movie = this.state.movie;
    const opts = {
        height: '300',
        width: '700',
        playerVars: {autoplay: 1}
    }

    return(<div className="details">
        <Header/>
        <div className="back">
            <Typography onClick={this.backtohomeHandler}>
                &#60; Back to Home
            </Typography>
        </div>
        <div className="flex-containerDetails">
            <div className="leftDetails">
                <img src={movie.poster_url} alt={movie.title}/>
            </div>
            <div className="middleDetails">
            <div>
                    <Typography variant="headline" component="h2">{movie.title}</Typography>
                </div><br />
                
                <div>
                    <Typography><span className="bold">Genres: </span>{movie.genres.join(',')}</Typography>
                    <Typography><span className="bold">Duration: </span>{movie.duration}</Typography>
                    <Typography><span className="bold">Release Date: </span>{movie.release_date}</Typography>
                    <Typography><span className="bold">Rating: </span>{movie.critics_rating}</Typography><br />
                    <Typography><span className="bold">Plot: </span><a href={movie.wiki_url}>(Wiki Link)</a><span> </span>{movie.storyline}</Typography>
                    <div className="trailer-container">
                    <Typography><span className="bold">Trailer: </span></Typography>
                    <YouTube
                    videoId={movie.trailer_url.split("?v=")[1]}
                    opts={opts}
                    onReady={this._onReady}>
                    </YouTube>
                    </div>
                </div>
            </div>
            <div className="rightDetails">
                
            </div>

        </div>
        </div>);
}

}
export default Details;