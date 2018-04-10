import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./style.css";

import Menu from "./components/menu";
import LoginButton from "./components/loginbutton";
import LoginWindow from "./components/loginwindow";
import PokemonList from "./containers/PokemonListContainer";

class App extends Component {
    render() {
        return <div className={styles.siteContainer}>
            <Menu />
            <LoginButton />
            <LoginWindow />
            <div className={styles.context}>
                <PokemonList />
            </div>
        </div>
    }
}

ReactDOM.render(<App />, document.body)