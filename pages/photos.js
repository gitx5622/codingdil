import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from "../state/actions/photoAction";
import {
    Grid, Avatar, List, ListItem, ListItemIcon,
    ListItemText, ListItemButton, Divider
} from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import { BoxLoading } from 'react-loadingg';
import DIL from "../assets/dil.png";
import Link from 'next/link';
import Image from 'next/image';


const Photos = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const photosSelector = useSelector(state => state.photoState);
    const { photos, isLoading } = photosSelector;

    const dispatch = useDispatch();

    useEffect(() => {
        getPhotos(dispatch);
        const user_name = localStorage.username
        const first_name = localStorage.firstname
        const last_name = localStorage.lastname
        setUsername(user_name);
        setFirstName(first_name);
        setLastName(last_name);
    }, [dispatch]);

    return (
        <div style={styles.container}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <div style={styles.sidebar}>
                        <center><Image src={DIL} alt="dil" width="100" height="100" /></center>
                        <Divider />
                        <nav aria-label="main mailbox folders">
                            <List>
                                <ListItem selected={true} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <InsertPhotoIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Photos" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <GroupIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Users" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <SettingsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Settings" />
                                    </ListItemButton>
                                </ListItem>
                                <div style={styles.logout}>
                                    <h3 style={styles.logout.h3}>
                                        <Link href="/">
                                            <a>Logout</a>
                                        </Link></h3>
                                    <p style={styles.logout.p}>© Data Integrated Limited 2021</p>
                                </div>
                            </List>
                        </nav>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div style={styles.account}>
                        <h3 style={styles.title}>Photos</h3>
                        <div style={styles.accountData}><Avatar />{firstName} {lastName} <br /> {username}</div>
                    </div>
                    <div style={styles.main}>
                        {isLoading && (
                            <BoxLoading />
                        )}
                        {photos.slice(0, 7).map((photo) => (
                            <div style={styles.photo} key={photo.id}>
                                <Avatar variant="rounded" alt="thumbnail" src={photo.thumbnailUrl} />
                                {photo.title}<br />{photo.id}
                            </div>
                        ))}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Photos;

const styles = {
    container: {
        background: "whitesmoke",
        height: "100vh"
    },
    sidebar: {
        background: "white",
        height: "90vh",
        margin: '20px'
    },
    main: {
        background: "white",
        height: "80vh",
        marginRight: '20px'
    },
    title: {
        marginLeft: '20px',
    },
    account: {
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: '20px',
        marginTop: '20px',
    },
    list: {
        textAlign: 'center',
        listStyle: 'none'
    },
    photo: {
        display: "flex",
        gap: "2em",
        marginBottom: '10px',
        padding: '10px'
    },
    accountData: {
        display: 'flex',
        gap: '1em',
        textAlign: 'center',
    },
    logout: {
        position: "absolute",
        top: "60vh",
        h3: {
            marginLeft: "6em"
        },
        p: {
            marginLeft: "2em"
        }
    }
}