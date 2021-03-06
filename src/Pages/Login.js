import { Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import SignUp from "./SignUp"

import logo from "../images/netflix-logo.png";
import HeroBanner from "../images/HeroBanner.jpg";
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';

const Login = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={logo} className={classes.logo} alt='logo'/>
            < NetflixButton className={classes.session}>Iniciar sesion</NetflixButton>
            <div className={classes.info}>
                (<SignUp/>)
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${HeroBanner})`,
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        position: "fixed",
        top: 0,
        left: 20,
        width: "150px",
        cursor: "pointer"
    },
    session: {
        position: "fixed",
        zIndex: 15,
        right: 20,
        top: 20,
    },
    info: {
        color: "#FFF",
        zIndex: 15,
        textAlign: "center",
        "& h4": {
            fontweight: 800,
        },
        "& h5": {
            fontweight: 400,
        },
    },
  }));

export default Login
