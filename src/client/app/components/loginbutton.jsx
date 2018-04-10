import React, { Component } from "react";
import styles from "../style.css";

export default class LoginButton extends Component {
    onClickHandler() {
        const LW = document.getElementsByClassName(styles.loginWindow);
        LW[0].style.display = "block";
    }

    render() {
        return <loginbutton className={styles.login} onClick={this.onClickHandler}>
            <input type="button" value="Войти"></input>
        </loginbutton>;
    }
}