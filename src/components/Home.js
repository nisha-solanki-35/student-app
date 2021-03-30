import React, { useState } from 'react'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Switch } from '@material-ui/core';

const Home = (props)=> {
    // console.log("in home");
    let history = useHistory();
    const [value, setValue] = useState(0);
    const [checked, setchecked] = useState(true);

    const handleOnClick = (e) => {
        // console.log("in onclcik", event.target);
        localStorage.removeItem("token");
        setchecked(!checked);
        history.push("/");
    }
    
    return (
        <div>
        <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={(e, newValue)=> (setValue(newValue))}
                    indicatorColor="primary"
                    textcolor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab label="Sign-In" to="/" component={Link}></Tab>
                    <Tab label="Sign-Up" to="/register" component={Link}></Tab>
                    <Tab label="Quiz" to="/quiz" component={Link}/> 
                    <Tab label="Dictionary" to="/dictionary" component={Link} />
                    <Tab label="Watch Video" to="/video" component={Link} />
                    <Switch
                        checked={checked}
                        color="primary"
                        onClick={handleOnClick}
                        disabled={!(localStorage.getItem("token"))}
                    ></Switch>
                </Tabs>
                </AppBar>
            </div>
    )
}

export default Home
