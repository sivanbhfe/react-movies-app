import React, {Component} from 'react';
import YouTube from 'react-youtube';
import ReactDOM from 'react-dom';
import './Details.css';
import Header from '../../common/header/Header';
import Home from '../../screens/home/Home';
import moviesData from '../../assets/movieData';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class Details extends Component {
    constructor(){
        super();
        this.state ={
            movie:{},
            starIcons: [
                {
                   id: 1,
                   stateId: "star1",
                   color: "black"
                },
                {
                   id: 2,
                   stateId: "star2",
                   color: "black"
                },
                {
                   id: 3,
                   stateId: "star3",
                   color: "black"
                },
                {
                   id: 4,
                   stateId: "star4",
                   color: "black"
                },
                {
                   id: 5,
                   stateId: "star5",
                   color: "black"
                }
             ]
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
        ReactDOM.render(<Home />, document.getElementById("root"));
    }

    artistOnClickHandler = (url) => {
        window.location=url;

    }

    starClickHanlder = (id) => {
        let starIconList = [];
        for(let star of this.state.starIcons){
            let starNode=star;  
            if(star.id<=id){
                starNode.color="yellow";
            } else {
                starNode.color="black";
            }
            starIconList.push(starNode);
        }
        this.setState({starIcons:starIconList});
    }

render(){
    let movie = this.state.movie;
    const opts = {
        height: '300',
        width: '700',
        playerVars: {autoplay: 0}
    }

    return(<div className="details">
        <Header showBookShowButton="true"/>
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
            <Typography><span className="bold">Rate this movie: </span></Typography>
            {this.state.starIcons.map(star=>(<StarBorderIcon key={star.id} onClick={()=>this.starClickHanlder(star.id)}
            className={star.color}></StarBorderIcon>))}
            <Typography><span className="bold">Artists: </span></Typography>
            <div>
            <GridList cellHeight={160} cols={2} >
                            {movie.artists.map(artist => (
                                <GridListTile onClick={()=>this.artistOnClickHandler(artist.wiki_url)} key={"artist" + artist.id}>
                                    <img width='140px' height='150px' src={artist.profile_url} alt={artist.first_name+ " "+artist.first_name+ " "+artist.last_name} />
                                    <GridListTileBar
                                        title={artist.first_name+ " "+artist.last_name}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
            </div>
            </div>

        </div>
        </div>);
}

}
export default Details;