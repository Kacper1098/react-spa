import './App.css';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import MyNav from "./MyNav/MyNav";
import MyFooter from "./MyFooter/ MyFooter";
import Pricing from "./Pricing/Pricing";

const routes = [
    {
        path: '/pricing',
        component: Pricing
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
