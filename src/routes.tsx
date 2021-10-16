import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import AboutMePage from './pages/aboutMe/AboutMePage';
import HomePage from './pages/home/HomePage';

export default function Routes() {
    return <BrowserRouter>
        <Route path="/sobre" component={AboutMePage} exact></Route>
        <Route path="" component={HomePage}></Route>
    </BrowserRouter>
}