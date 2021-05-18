import  React from "react";
import {AppBar, Avatar, Button, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom"


import memories from "../attachments/images/memories.png";
import useStyles from "./styles";


const NavBar =()=>{
    const  user = null;
    const classes = useStyles();

     const renderUser=()=>{
         if(user){
             return(
                 <div className={classes.toolbar}>
                     <Avatar className={classes.purple} alt={user.name} src={user.image}>{user.name.charAt(0)}</Avatar>
                     <Typography className={classes.userName} variant={"h6"}>{user.name}</Typography>
                     <Button variant="contained"  color={"secondary"}>Logout</Button>
                 </div>
             )
         }else {
             return (
                 <Button variant={"contained"} component={Link} to="/sign-in" color={"primary"}>Sign In</Button>
             )
         }
     }



    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
            <Typography component={Link } to="/" className={classes.heading} variant="h2" align="center">
                Memories
            </Typography>
            <img
                className={classes.image}
                src={memories}
                alt="memories"
                height="60"
            />
            </div>
            <Toolbar className={classes.toolbar}>
                {renderUser()}
            </Toolbar>

        </AppBar>
    )
}

export  default  NavBar