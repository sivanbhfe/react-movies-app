import React, {Component} from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../assets/movieData';
import Genres from '../../commong/Genres';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';


const styles = theme => ({
    root: {
        flexGrow:1,
        backgroundColor:theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign:"center",
        background: "#ff9999",
        padding: "10px",
        fontSize: "1rem"
    },
    gridListUpcomingMovies: {
        flexWrap:"nowrap",
        transform:"translateZ(0)",
        width: "100%"
    },
    gridListReleasedMovies: {
        transform:"translateZ(0)",
        width: "60%"
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
     },
     title: {
        color: theme.palette.primary.light,
     }
});

class Home extends Component{

    constructor() {
        super();
        this.state = {
            movieName: "",
            genres:[]
        }
    }


    movieNameChangeHandler = e => {
        this.setState({movieName: e.target.value});
    }
    render(){
        const {classes} = this.props;   
        return(
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                    {moviesData.map(movie => (
                        <GridListTile key={movie.id}>
                            <img src={movie.poster_url} alt={movie.title} />
                            <GridListTileBar title={movie.title}/>
                        </GridListTile>
                    ))}
                </GridList>
                <div className="flex-container">
                    <div className="left">
                        <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                            {moviesData.map(movie => (
                                <GridListTile className="released-movie-grid-item" key={"grid" + movie.id}>
                                    <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                                    <GridListTileBar
                                        title={movie.title}
                                        subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.Typography} color="textSecondary">
                                        FIND MOVIES BY:
                                    </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                                    <Input id="movieName" onChange={this.movieNameChangeHandler}></Input>
                                </FormControl>
                                <FormControl>
                                    <InputLabel htmlFor="select-multiple-checkbox">Genre</InputLabel>
                                    <Select multiple 
                                    input={<Input id="select-multiple-checkbox"/>}
                                    renderValue={selected =>selected.join(',')}
                                    value={this.state.genres}
                                    onChange={this.genreSelectHandler}></Select>
                                </FormControl>
                            </CardContent>
                        </Card>
                        </div>
            </div>
            </div>
            )
    }
}

export default withStyles(styles)(Home);