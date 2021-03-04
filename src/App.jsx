import React from 'react';

import {
    Switch,
    Route
} from 'react-router-dom'

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage'
import RestaurantsPage from './RestaurantsPage';

export default function App() {
    // const MyComponent = {
    //     '/': HomePage,
    //     '/about': AboutPage,
    //     '/restaurants': RestaurantsPage,
    // }[pathname] || NotFoundPage;

    return ( <
        Switch >
        <
        Route exact path = "/"
        component = { HomePage }
        /> <
        Route path = "/about"
        component = { AboutPage }
        /> <
        Route path = "/restaurants"
        component = { RestaurantsPage }
        /> <
        Route component = { NotFoundPage }
        /> <
        /Switch>
    );
}