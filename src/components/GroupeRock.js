import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import "./GroupeRock.css";

import metallica from "../data/mettalica";
import MembreGroupeRock from "./MembreGroupeRock";
import InfoGroupeRock from "./InfoGroupeRock";
import Album from "./Album";

const GroupeRock = () => {
    //Liste des membres de groupes
    let listeDesMembres = metallica.members.map((m, index) => (
        <MembreGroupeRock membre={m} key={index}/>
    ));

    //liste des albums
    let listeDesAlbums = metallica.albums.map((m, index) => (
        <Album album={m} key={index}/>
    ));

    // Liste header table membre
    let headerMembres=[
        "","Nom","Date de naissance","Instruments","Année dans le groupe"
    ];
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

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
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    function handleSort(columnName) {
        console.log("ato")
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{ backgroundImage: `url(${metallica.picture.xl})`  }} className="GroupeRock-groupe">
                    <div className="GroupeRock-name"><h1>{metallica.name}</h1></div>
                </Grid>
            </Grid>
            <AppBar position="static" className="GroupeRock-principal">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Information" {...a11yProps(0)} />
                    <Tab label="Membres" {...a11yProps(1)} />
                    <Tab label="Discographies" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <InfoGroupeRock groupeRock={metallica}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h2>Les membres du groupe :</h2>
                <TableContainer component={Paper}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                {headerMembres.map((x) =>
                                    <TableCell onClick={() => handleSort(x.prop)}>{x}</TableCell>
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
};

export default GroupeRock;
