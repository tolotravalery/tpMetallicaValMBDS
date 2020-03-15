import React from 'react';
import "./InfoGroupeRock.css";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TodayIcon from '@material-ui/icons/Today';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import StarsIcon from '@material-ui/icons/Stars';
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import UrlIcon from "./UrlIcon";


const InfoGroupeRock = ({groupeRock}) => (
    <Grid container spacing={3}>

        <Grid item xs={12} sm={6} className="InfoGroupeRock-inline-right">
            <List className="InfoGroupeRock-root">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="InfoGroupeRock-color-violet">
                            <TodayIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Birthdate" secondary={groupeRock.lifeSpan.begin}/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="InfoGroupeRock-color-violet">
                            <LocationOnIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Location" secondary={groupeRock.locationInfo.join(" - ")}/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="InfoGroupeRock-color-violet">
                            <LibraryMusicIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Genre" secondary={groupeRock.genres.join(" - ")}/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="InfoGroupeRock-color-violet">
                            <StarsIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Label" secondary={groupeRock.labels.join(" - ")}/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="InfoGroupeRock-color-violet">
                            <StarIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Label (DBpedia)" secondary={groupeRock.recordLabel.join(" - ")}/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="InfoGroupeRock-color-violet">
                            <FavoriteBorderIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Number of Deezer fans" secondary={groupeRock.deezerFans}/>
                </ListItem>
                <Divider variant="inset" component="li"/>
            </List>
        </Grid>
        <Grid item xs={12} sm={6}>
            <UrlIcon object={groupeRock}/>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <span className="InfoGroupeRock-description">Description</span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className="InfoGroupeRock-text-justify">
                        {groupeRock.dbp_abstract}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>
    </Grid>
);

export default InfoGroupeRock;