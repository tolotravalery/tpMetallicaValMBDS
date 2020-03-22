import React from 'react';
import "./Reponse.css";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const Reponse = ({reponse}) => {

    return (
        <Link to={"/artiste/"+ reponse.name}>
            <ListItem button >
                <Avatar alt="Remy Sharp" src={reponse.picture} className="Search-photo" />
                <ListItemText primary={reponse.name} />
            </ListItem>
            <Divider />
        </Link>

    );

};
export default Reponse;


