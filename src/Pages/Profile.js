import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import Plans from '../components/Plans';
import { auth } from '../firebase';


import {useNavigate} from 'react-router-dom'

import netflixavatar from "../images/netflixavatar.png"
import { NetflixButton } from '../styled/styledcomponents';

const Profile = () => {
    const classes = useStyles();
    const history = useNavigate();

    const signout = () => {
        auth.signOut();
        history("/login");

    }
    return (
        <div className={classes.root}>
            <Header/>
            <Typography variant='h3'>Edit Profile</Typography>
            <div className={classes.info}>
                <img src={netflixavatar} alt='avatar'/>
                <div className={classes.details}>
                    <div className={classes.plans}>
                        <Typography variant= "h6">email@email.com</Typography>
                        <Typography className={classes.plansText} variant="h5" gutterBottom>Plans</Typography>
                        <Plans cost={7.99}>Netflix Standard</Plans>
                        <Plans cost={11.99}>Netflix Basic</Plans>
                        <Plans wide="medium" cost={15.99}>Netflix Premium</Plans>
                        <NetflixButton onClick={signout} wide="fullwidth">Sign Out</NetflixButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    info: {
        paddingTop: "20px",
        width: "80%",
        display: "flex",
        maxWidth: "800px",
        marginRight: "120px",
        "& img": {
            height: " 100px",
            [theme.breakpoints.down("xs")]: {
                display: "none",
            },
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: "0px",
        }
    },
    details: {
        width: "100%",
        marginLeft: theme.spacing(3),
        "& h6": {
            backgroundColor: "#aaa",
            padding: theme.spacing(1),
            fontSize: "18px",
        }
    },
    plans: {
        width: "100%",
    },
    plansText: {
        borderBottom: "1px solid lightgray"
    }
  }));

export default Profile
