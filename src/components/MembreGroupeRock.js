import React from "react";
import "./MembreGroupeRock.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

const MembreGroupeRock = ({membre}) => (
    <TableRow>
        <TableCell component="th" scope="row">
            <Avatar className="MembreGroupeRock-avatar">{membre.name.charAt(0).toUpperCase()}</Avatar>
        </TableCell>
        <TableCell component="th" scope="row">
            <Link href="#" onclick>
                {membre.name}
            </Link>
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
