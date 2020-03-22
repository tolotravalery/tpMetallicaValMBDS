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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Artiste from "./Artiste";
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
        if(query != ''){
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
        }
        else if(query == ''){
            this.setState({
                changed: false
            });
        }

    };
    render() {
        let classNameReponse = this.state.changed ? 'Search-reponse-block' : 'Search-reponse-none';
        const {reponse,changed} = this.state;
        let list = reponse.map((r, index) => {
            return (
                <BrowserRouter>
                    <Link to={"/artiste/"+ r.name}>
                        <ListItem button >
                            <Avatar alt="Remy Sharp" src={r.picture} className="Search-photo" />
                            <ListItemText primary={r.name} />
                        </ListItem>
                        <Divider />
                    </Link>
                    <Route exact path="/artiste/:artiste" component={Artiste}></Route>
                </BrowserRouter>
            );
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
                    <h3>Recherches associées</h3>
                    <List component="nav" className="Search-root" aria-label="mailbox folders">
                        {list}
                    </List>
                </div>
            </div>
        );
    }
}

export default Search;

