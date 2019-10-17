import React, {Component} from 'react';
import './Details.css';
import Header from '../../common/header/Header';
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

render(){
    let movie = this.state.movie;
    return(<div className="details">
        <Header/>
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
                </div>
            </div>
            <div className="rightDetails">
                
            </div>

        </div>
        </div>);
}

}
export default Details;