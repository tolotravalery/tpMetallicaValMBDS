import React from 'react';
import "./InfoGroupeRock.css";
import Grid from '@material-ui/core/Grid';


const InfoGroupeRock = ({ groupeRock }) => (
    <div className="InfoGroupeRock-root">
        <Grid container spacing={3}>

            <Grid item xs={12} sm={6} className="InfoGroupeRock-inline-right">
                <p>Birthdate : <span className="InfoGroupeRock-p-span">{groupeRock.lifeSpan.begin}</span></p>
                <p>Location : <span className="InfoGroupeRock-p-span">{groupeRock.locationInfo.join(" - ")}</span></p>
                <p>Genre : <span className="InfoGroupeRock-p-span">{groupeRock.genres.join(" - ")}</span></p>
                <p>Genre (DBpedia) : <span className="InfoGroupeRock-p-span">{groupeRock.dbp_genre.join(" - ")}</span></p>
                <p>Label : <span className="InfoGroupeRock-p-span">{groupeRock.labels.join(" - ")}</span></p>
                <p>Label (DBpedia) : <span className="InfoGroupeRock-p-span">{groupeRock.recordLabel.join(" - ")}</span></p>
                <p>Number of Deezer fans : <span className="InfoGroupeRock-p-span">{groupeRock.deezerFans}</span></p>
                <p>Associated artist(s) : <span className="InfoGroupeRock-p-span">{groupeRock.associatedMusicalArtist.join(" - ")}</span></p>
            </Grid>
            <Grid item xs={12} className="InfoGroupeRock-text-justify">
                <p>{groupeRock.dbp_abstract}</p>
            </Grid>

        </Grid>
    </div>
);

export default InfoGroupeRock;