import React, { Component } from "react";
import styles from "../style.css";

export default class LoginWindow extends Component {
    onClickLoginHandler() {
        const LW = document.getElementsByClassName(styles.loginWindow);
        const loginName = document.getElementsByClassName(styles.loginName);
        const password = document.getElementsByClassName(styles.password);
        loginName[0].value = "";
        password[0].value = "";
        loginName[0].innerHTML = "";
        password[0].innerHTML = "";
        LW[0].style.display = "none";
    }

    exitOfMenu() {
        const LW = document.getElementsByClassName(styles.loginWindow);
        const loginName = document.getElementsByClassName(styles.loginName);
        const password = document.getElementsByClassName(styles.password);
        loginName[0].value = "";
        password[0].value = "";
        loginName[0].innerHTML = "";
        password[0].innerHTML = "";
        LW[0].style.display = "none";
    }

    render() {
        return <loginwindow className={styles.loginWindow}>
            <div>
                <input type="button" onClick={this.exitOfMenu} value="Закрыть"></input>
                <input className={styles.loginName} type="text" placeholder="Логин"></input>
                <input className={styles.password} type="password" placeholder="Пароль"></input>
                <input className={styles.buttontologin} type="button" value="Войти" onClick={this.onClickLoginHandler}></input>
            </div>
        </loginwindow>
    }
}