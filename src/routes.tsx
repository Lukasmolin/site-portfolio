import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AboutMePage from './pages/aboutMe/AboutMePage';
import HomePage from './pages/home/HomePage';
import WorkResumePage from './pages/workResume/WorkResumePage';

export default function Routes() {
    return <BrowserRouter>
        <Switch>
            <Route path="/sobre" component={AboutMePage} exact></Route>
            <Route path="/resume" component={WorkResumePage} exact></Route>
            <Route path="/home" component={HomePage} exact></Route>
            <Route path="" component={HomePage} exact></Route>
        </Switch>
    </BrowserRouter>;
}