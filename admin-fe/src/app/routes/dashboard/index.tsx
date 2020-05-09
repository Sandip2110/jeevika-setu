import React from "react";
import {Switch, Route} from "react-router-dom";

export default function DashboardRoutes() {
    return (
        <Switch>
            <Route path={"/dash"} component={() => <div>You are logged in</div>}/>
        </Switch>
    )
}