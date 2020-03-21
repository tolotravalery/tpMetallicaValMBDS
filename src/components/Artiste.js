import React from "react";
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./Artiste.css";


import MembreGroupeRock from "./MembreGroupeRock";
import Album from "./Album";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import InfoGroupeRock from "./InfoGroupeRock";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Loading from "./Loading";

/*
* Tsy fapiasa ao anaty class ni useState : Hooks
* */
class Artiste extends React.Component {
    state = {
        artistes: [],
        value: 0,
        loading: true,
    };
    artiste = "Metallica";

    constructor(props) {
        super(props);
        console.log("ID = " + props.match.params.artiste);

        this.artiste = props.match.params.artiste;
    }

    componentDidMount = () => {
        console.log("On va récupérer l' artiste No : " + this.artiste);
        let url = "https://wasabi.i3s.unice.fr/search/artist/" + this.artiste;
        this.getDataFromServer(url).then();
    };

    async getDataFromServer(url) {
        // utiliser fetch pour récupérer les données
        console.log("Getting data from server");
        await fetch(url)
            .then(response => response.json())
            .then(reponseJavaScript => {
                console.log("huhu" + reponseJavaScript);
                this.setState({
                    ...this.state,
                    loading:false,
                    artistes: reponseJavaScript
                });
            });
        console.log("Getting data from server");
    };

    handleChange = (event, newValue) => {
        console.log("newvalue =" + newValue);
        this.setState({
            ...this.state,
            value: newValue
        });
    };

    endLoading = () => {
        console.log("End loading");
    };

    render() {
        const {loading} = this.state;
        if (loading)
            return <Loading open={loading} endListener={this.endLoading}/>;

        //Liste des membres de groupes
        let listeDesMembres = this.state.artistes.members.map((m, index) => (
            <MembreGroupeRock membre={m} key={index}/>
        ));

        //liste des albums
        let listeDesAlbums = this.state.artistes.albums.map((m, index) => (
            <Album album={m} key={index}/>
        ));

        // Liste header table membre
        let headerMembres = [
            "", "Nom", "Date de naissance", "Instruments", "Années d'activités"
        ];

        function TabPanel(props) {
            const {children, value, index, ...other} = props;

            return (
                <Typography
                    component="div"
                    role="tabpanel"
                    hidden={value !== index}
                    id={`simple-tabpanel-${index}`}
                    aria-labelledby={`simple-tab-${index}`}
                    {...other}
                >
                    {value === index && <Box p={3}>{children}</Box>}
                </Typography>
            );
        }

        TabPanel.propTypes = {
            children: PropTypes.node,
            index: PropTypes.any.isRequired,
            value: PropTypes.any.isRequired,
        };

        function a11yProps(index) {
            return {
                id: `simple-tab-${index}`,
                'aria-controls': `simple-tabpanel-${index}`,
            };
        }

        const useStyles = makeStyles(theme => ({
            root: {
                flexGrow: 1,
                backgroundColor: theme.palette.background.paper,
            },
        }));

        function handleSort(columnName) {
            console.log("ato")
        }

        const {artistes, value} = this.state;

        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{backgroundImage: `url(${this.state.artistes.picture.xl})`}}
                          className="Artiste-groupe">
                        <div className="Artiste-name"><h1>{this.state.artistes.name}</h1></div>
                    </Grid>
                </Grid>
                <AppBar position="static" className="Artiste-principal">
                    <Tabs value={value} onChange={this.handleChange} aria-label="simple tabs example">
                        <Tab label="Information" {...a11yProps(0)} />
                        <Tab label="Membres" {...a11yProps(1)} />
                        <Tab label="Discographies" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <InfoGroupeRock groupeRock={this.state.artistes}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <h2>Les membres du groupe :</h2>
                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    {headerMembres.map((x, i) =>
                                        <TableCell key={i} onClick={() => handleSort(x.prop)}>{x}</TableCell>
                                    )}
                                </TableRow>
                            </TableHead>
                            <TableBody>{listeDesMembres}</TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <h2>Les albums :</h2>
                    <Grid container spacing={3}>
                        {listeDesAlbums}
                    </Grid>
                </TabPanel>
            </div>
        );
    }
}

export default Artiste;

