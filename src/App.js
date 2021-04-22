import './App.css';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import MyNav from "./MyNav/MyNav";
import MyFooter from "./MyFooter/ MyFooter";
import Pricing from "./Pricing/Pricing";
import React from "react";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";

const routes = [
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/pricing',
        component: Pricing
    },
    {
        path: '',
        component: Home
    }
]

function App() {
    return (
        <BrowserRouter basename="/react-spa">
            <MyNav/>
            <Switch>
                {
                    routes.map(route => (
                        <Route path={route.path}>
                            <route.component/>
                        </Route>
                    ))
                }
            </Switch>
            <MyFooter/>
        </BrowserRouter>
    );
}

export default App;
