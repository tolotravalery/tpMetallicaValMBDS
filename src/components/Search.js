import React from "react";
import Typography from '@material-ui/core/Typography';
import "./Search.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MoreIcon from "@material-ui/icons/MoreVert";
import axios from 'axios';
import MembreGroupeRock from "./MembreGroupeRock";

class Search extends React.Component {
    state = {
        reponse: [],
        changed: false
    };
    query = ''

    constructor(props) {
        super(props);

    }


    handleOnInputChange = (event) => {
        const query = event.target.value;
        console.log(query)
        let url = "https://wasabi.i3s.unice.fr/search/fulltext/" + query;
        axios.get(url)
        .then(response => {
            this.setState({
                ...this.state,
                reponse: response.data,
                changed: true
            });
        })

    };
    render() {
        let classNameReponse = this.state.changed ? 'Search-reponse-block' : 'Search-reponse-none';
        const {reponse} = this.state;
        let list = reponse.map((r, index) => {
            return (
                <p>{r.name}</p>
            );

            // return <PhotoDetail desc={el}/>
        });

        return (
            <div className="Search-grow">
                <AppBar position="static" className="Search-bar">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className="Search-menuButton"
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography className="Search-title" variant="h6" noWrap>
                            PROJET REACT MBDS
                        </Typography>
                        <div className="Search-search">
                            <div className="Search-searchIcon">
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    input: "Search-input",
                                }}
                                inputProps={{'aria-label': 'search'}}
                                onChange={this.handleOnInputChange}
                            />
                        </div>
                        <div className="Search-grow"/>
                        <div className="Search-sectionDesktop">
                            <IconButton
                                aria-label="show more"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <MoreIcon/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <div className={classNameReponse}>
                    <h3>Test</h3>
                    {list}
                </div>

            </div>
        );
    }
}

export default Search;

