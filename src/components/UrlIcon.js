import React from 'react';
import "./UrlIcon.css";

const UrlIcon = ({object}) => {
    return (
        <nav className="style-scope UrlIcon-nav">
            <a target="_blank" tabIndex="-1" alt="url Wikipedia" title="Amazon" href={object.urlWikipedia}>
                <img draggable="false" src="/img/wikipedia_icon.svg" className="UrlIcon-icon-link"/>
            </a>
            <a target="_blank" tabIndex="-1" alt="url OfficialWebsite" title="Amazon" href={object.urlOfficialWebsite}>
                <img draggable="false" src="/img/website_icon.svg" className="UrlIcon-icon-link"/>
            </a>
            <a target="_blank" tabIndex="-1" alt="url Facebook" title="Amazon" href={object.urlFacebook}>
                <img draggable="false" src="/img/facebook_icon.svg" className="UrlIcon-icon-link"/>
            </a>
            <a target="_blank" tabIndex="-1" alt="url MySpace" title="Amazon" href={object.urlMySpace}>
                <img draggable="false" src="/img/myspace_icon.svg" className="UrlIcon-icon-link"/>
            </a>
            <a target="_blank" tabIndex="-1" alt="url Twitter" title="Amazon" href={object.urlTwitter}>
                <img draggable="false" src="/img/twitter_icon.svg" className="UrlIcon-icon-link"/>
            </a>
            <a target="_blank" tabIndex="-1" alt="url Amazon" title="Amazon" href={object.urlAmazon}>
                <img draggable="false" src="/img/amazon_icon.svg" className="UrlIcon-icon-link"/>
            </a>
            <a target="_blank" tabIndex="-1" alt="url Itunes" title="Itunes" href={object.urlITunes}>
                <img draggable="false" src="/img/itunes_icon.svg" className="UrlIcon-icon-link"/>
            </a>
            <a target="_blank" tabIndex="-1" alt="url Allmusic" title="Allmusic" href={object.urlAllmusic}>
                <img draggable="false" src="/img/allmusic_icon.svg" className="UrlIcon-icon-link"/>
            </a>
            <a target="_blank" tabIndex="-1" alt="url Discogs" title="Discogs" href={object.urlDiscogs}>
                <img draggable="false" src="/img/discogs_icon.svg" className="UrlIcon-icon-link"/>
            </a>
            <a target="_blank" tabIndex="-1" alt="url MusicBrainz" title="MusicBrainz" href={object.urlMusicBrainz}>
                <img draggable="false" src="/img/musicbrainz_icon.svg" className="UrlIcon-icon-link"/>
            </a>
            <a target="_blank" tabIndex="-1" alt="url Spotify" title="Spotify" href={object.urlSpotify}>
                <img draggable="false" src="/img/spotify_icon.svg" className="UrlIcon-icon-link"/>
            </a>
            <a target="_blank" tabIndex="-1" alt="url YouTube" title="Spotify" href={object.urlYouTube}>
                <img draggable="false" src="/img/youtube_icon.svg" className="UrlIcon-icon-link"/>
            </a>
        </nav>

    );

};
export default UrlIcon;


