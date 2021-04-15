import './App.css';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Nav from "./Nav/Nav";

const routes = []

function App() {
    return (
        <BrowserRouter>
            <Nav/>
            <Switch>
                {
                    routes.map(route => (
                        <Route path={route.path}>
                            <route.component/>
                        </Route>
                    ))
                }
            </Switch>
        </BrowserRouter>
    );
}

export default App;
