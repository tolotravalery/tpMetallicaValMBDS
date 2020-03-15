import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import "./Album.css";
import Songs from "./Songs";

const Album = ({album}) => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    };

    function handleClose(){
        setOpen(false);
    };

    //liste des songs
    let listeDesChansons = album.songs.map((m, index) => (
        <Songs song={m} key={index} id={index + 1}/>
    ));

    // Liste header table songs
    let headerTableaux=[
        "#id","Mp3","titre",""
    ];
    return (
        <Grid item xs={6} sm={4}>
            <Card className="Album-root">
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className="Album-avatar">
                            {album.title.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" onClick={handleClickOpen}>
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={album.title}
                    subheader={album.publicationDate}
                />
                <CardMedia
                    className="Album-media"
                    image={album.cover?.medium}
                    title={album.title}
                />
                <CardContent>
                    <nav className="style-scope Album-nav">
                        <a target="_blank" tabIndex="-1" alt="url Amazon" title="Amazon"
                           href={album.urlAmazon}>
                            <img draggable="false" src="/img/amazon_icon.svg"
                                 className="Album-icon-link"  />
                        </a>
                        <a target="_blank" tabIndex="-1" alt="url Itunes" title="Itunes"
                           href={album.urlITunes}>
                            <img draggable="false" src="/img/itunes_icon.svg"
                                 className="Album-icon-link"  />
                        </a>
                        <a target="_blank" tabIndex="-1" alt="url Allmusic" title="Allmusic"
                           href={album.urlAllmusic}>
                            <img draggable="false" src="/img/allmusic_icon.svg"
                                 className="Album-icon-link"  />
                        </a>
                        <a target="_blank" tabIndex="-1" alt="url Discogs" title="Discogs"
                           href={album.urlDiscogs}>
                            <img draggable="false" src="/img/discogs_icon.svg"
                                 className="Album-icon-link"  />
                        </a>
                        <a target="_blank" tabIndex="-1" alt="url MusicBrainz" title="MusicBrainz"
                           href={album.urlMusicBrainz}>
                            <img draggable="false" src="/img/musicbrainz_icon.svg"
                                 className="Album-icon-link"  />
                        </a>
                        <a target="_blank" tabIndex="-1" alt="url Spotify" title="Spotify"
                           href={album.urlSpotify}>
                            <img draggable="false" src="/img/spotify_icon.svg"
                                 className="Album-icon-link"  />
                        </a>
                    </nav>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon className="Album-color-viole"/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon className="Album-color-viole"/>
                    </IconButton>
                </CardActions>
            </Card>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="500px"
            >
                <DialogTitle id="alert-dialog-title">{"Les chansons :"}</DialogTitle>
                <DialogContent>
                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    {headerTableaux.map((x) =>
                                        <TableCell>{x}</TableCell>
                                    )}
                                </TableRow>
                            </TableHead>
                            <TableBody className="Album-center">{listeDesChansons}</TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
            </Dialog>
        </Grid>
    );

};
export default Album;