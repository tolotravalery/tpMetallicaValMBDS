import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import TableRow from "@material-ui/core/TableRow";
import "./Songs.css";
const Songs = ({ song,id }) => {
    const theme = useTheme();
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                <IconButton aria-label="play/pause">
                    <PlayArrowIcon className="Song-playIcon" />
                </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
                {id}
            </TableCell>
            <TableCell component="th" scope="row">
                {song.title}
            </TableCell>
            <TableCell component="th" scope="row">
                <nav className="style-scope Songs-nav">
                    <a target="_blank" tabIndex="-1" alt="url Amazon" title="Amazon"
                       href={song.urlAmazon}>
                        <img draggable="false" src="/img/amazon_icon.svg"
                             className="Songs-icon-link"  />
                    </a>
                    <a target="_blank" tabIndex="-1" alt="url Allmusic" title="Allmusic"
                       href={song.urlAllmusic}>
                        <img draggable="false" src="/img/allmusic_icon.svg"
                             className="Songs-icon-link"  />
                    </a>
                    <a target="_blank" tabIndex="-1" alt="url Spotify" title="Discogs"
                       href={song.urlSpotify}>
                        <img draggable="false" src="/img/spotify_icon.svg"
                             className="Songs-icon-link"  />
                    </a>
                    <a target="_blank" tabIndex="-1" alt="url MusicBrainz" title="MusicBrainz"
                       href={song.urlMusicBrainz}>
                        <img draggable="false" src="/img/musicbrainz_icon.svg"
                             className="Songs-icon-link"  />
                    </a>
                </nav>
            </TableCell>
        </TableRow>


        /*<Card className="Song-root">
            <div className="Song-details">
                <CardContent className="Song-content">
                    <Typography component="p" variant="p">
                        {id} - {song.title}
                    </Typography>
                </CardContent>
                <div className="Song-controls">
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className="Song-playIcon" />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div>
            </div>
        </Card>*//*<Card className="Song-root">
            <div className="Song-details">
                <CardContent className="Song-content">
                    <Typography component="p" variant="p">
                        {id} - {song.title}
                    </Typography>
                </CardContent>
                <div className="Song-controls">
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className="Song-playIcon" />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div>
            </div>
        </Card>*/

    );

};
export default Songs;


