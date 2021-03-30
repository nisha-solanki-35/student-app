import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Error from '../components/Error';
import Public from '../components/Public';
import Quiz from "../views/quiz/index";
import Private from '../components/Private';
import Dictionary from '../views/dictionary/index';
import Video from '../views/Video/index';
import Technology from '../views/quiz/Technology';
import Login from '../components/login/Login';
import Register from '../components/registration/Register';

function index() {
    // console.log("in routes");
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Public exact path="/" component={Login}></Public>
                    <Public exact path="/register" component={Register}></Public>
                    <Private exact path="/quiz" component={Quiz}></Private>
                    <Private exact path="/dictionary" component={Dictionary}></Private>
                    <Private exact path="/video" component={Video}></Private>
                    <Private exact path="/quiz/:id" component={Technology}></Private>
                    <Route component={Error}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default index
