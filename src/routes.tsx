import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AboutMePage from './pages/pageComponents/aboutMe/AboutMePage';
import HomePage from './pages/pageComponents/home/HomePage';
import ProjectsPage from './pages/pageComponents/projects/ProjectsPage';
import WorkResumePage from './pages/pageComponents/workResume/WorkResumePage';

export default function Routes() {
    return <BrowserRouter>
        <Switch>
            <Route path='/about' component={AboutMePage} exact></Route>
            <Route path='/projects' component={ProjectsPage} exact></Route>
            <Route path='/resume' component={WorkResumePage} exact></Route>
            <Route path='/home' component={HomePage} exact></Route>
            <Route path='' component={HomePage} exact></Route>
        </Switch>
    </BrowserRouter>;
}