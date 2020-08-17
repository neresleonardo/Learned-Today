import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Painel from "./Components/Painel";
import Sobre from "./Components/sobre";
import Header from "./Components/Header/index";

export default () => (
    <Router>
        <Header>
            <Switch>
                <Route path="/" exact children={<Painel />} />
                <Route path="/sobre" children={<Sobre />} />
            </Switch>
        </Header>
    </Router>
);