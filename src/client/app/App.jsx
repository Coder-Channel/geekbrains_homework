import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";

import styles from "./style.css";

import Menu from "./components/menu";
import LoginButton from "./components/loginbutton";
import LoginWindow from "./components/loginwindow";
import PokemonList from "./containers/PokemonListContainer";
import Comments from "./containers/Comments";

export default class App extends Component {
    render() {
        return <div className={styles.siteContainer}>
            <Menu />
            <LoginButton />
            <LoginWindow />
            <div className={styles.context}>
                <Switch>
                    <Route path="/" component={PokemonList} />
                    <Route path="/comments" component={Comments} />
                </Switch>
            </div>
        </div>
    }
}