import React from 'react';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import "./Songs.css";
import {ThemeProvider} from '@material-ui/styles';
import AudioPlayer from 'material-ui-audio-player';
import {createMuiTheme} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const Songs = ({song, id}) => {
    const muiTheme = createMuiTheme({});
    const useStyles = makeStyles(theme => {
        return {
            root: {
                [theme.breakpoints.down('sm')]: {
                    width: '100%'
                }
            },
            playIcon: {
                color: '#872552',
                '&:hover': {
                    color: '#711942'
                }
            },
            mainSlider: {
                color: '#3f51b5',
                '& .MuiSlider-rail': {
                    color: '#7986cb'
                },
                '& .MuiSlider-track': {
                    color: '#3f51b5'
                },
                '& .MuiSlider-thumb': {
                    color: '#303f9f'
                }
            }
        };
    });
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {id}
            </TableCell>
            <TableCell component="th" scope="row">
                &nbsp;<ThemeProvider theme={muiTheme}>
                <AudioPlayer
                    width="300px"
                    src={song.preview}
                    useStyles={useStyles}
                    loop={false}
                />
            </ThemeProvider>&nbsp;
            </TableCell>
            <TableCell component="th" scope="row">
                {song.title}
            </TableCell>
            <TableCell component="th" scope="row">
                <nav className="style-scope Songs-nav">
                    <a target="_blank" tabIndex="-1" alt="url Amazon" title="Amazon"
                       href={song.urlAmazon}>
                        <img draggable="false" src="/img/amazon_icon.svg"
                             className="Songs-icon-link"/>
                    </a>
                    <a target="_blank" tabIndex="-1" alt="url Allmusic" title="Allmusic"
                       href={song.urlAllmusic}>
                        <img draggable="false" src="/img/allmusic_icon.svg"
                             className="Songs-icon-link"/>
                    </a>
                    <a target="_blank" tabIndex="-1" alt="url Spotify" title="Discogs"
                       href={song.urlSpotify}>
                        <img draggable="false" src="/img/spotify_icon.svg"
                             className="Songs-icon-link"/>
                    </a>
                    <a target="_blank" tabIndex="-1" alt="url MusicBrainz" title="MusicBrainz"
                       href={song.urlMusicBrainz}>
                        <img draggable="false" src="/img/musicbrainz_icon.svg"
                             className="Songs-icon-link"/>
                    </a>
                </nav>
            </TableCell>
        </TableRow>

    );

};
export default Songs;


