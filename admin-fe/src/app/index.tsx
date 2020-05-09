import React from 'react';
import {useSelector} from "react-redux";
import {IReduxState} from "../reducers";
import {
    HashRouter as Router,
    Route, Switch
} from "react-router-dom";
import DashboardRoutes from "./routes/dashboard";
import Login from "../containers/login";

function getRoutes(loginStatus: boolean) {
    return (
        <Router>
            <Switch>
                <Route path="/" component={loginStatus ? DashboardRoutes : Login}/>
            </Switch>
        </Router>
    );
}

function App() {
    const isLoggedIn: boolean = useSelector((state: IReduxState) => state.login.isLoggedIn);
    return getRoutes(isLoggedIn);
}
export default App;
