import React from "react";
import "./MembreGroupeRock.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from '@material-ui/core/Avatar';
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";

const MembreGroupeRock = ({membre}) => (
    <TableRow>
        <TableCell component="th" scope="row">
            <Avatar className="MembreGroupeRock-avatar">{membre.name.charAt(0).toUpperCase()}</Avatar>
        </TableCell>
        <TableCell component="th" scope="row">
            {membre.name}
        </TableCell>
        <TableCell component="th" scope="row">
            {membre.birthDate}
        </TableCell>
        <TableCell component="th" scope="row">
            {membre.instruments.join(" - ")}
        </TableCell>
        <TableCell component="th" scope="row">
            {membre.begin} - {membre.end}
        </TableCell>
    </TableRow>
);

export default MembreGroupeRock;
