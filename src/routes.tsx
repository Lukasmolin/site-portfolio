import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import AboutMePage from './pages/aboutMe/AboutMePage';

export default function Routes() {
    return <BrowserRouter>
        <Route path="" component={AboutMePage}></Route>
    </BrowserRouter>
}