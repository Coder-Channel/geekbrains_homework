import React, { Component } from "react";

export default class LoginWindow extends Component {
    onClickLoginHandler() {
        const LW = document.getElementsByClassName("loginWindow");
        const loginName = document.getElementsByClassName("loginName");
        const password = document.getElementsByClassName("password");
        loginName[0].value = "";
        password[0].value = "";
        loginName[0].innerHTML = "";
        password[0].innerHTML = "";
        LW[0].style.display = "none";
    }

    exitOfMenu() {
        const LW = document.getElementsByClassName("loginWindow");
        const loginName = document.getElementsByClassName("loginName");
        const password = document.getElementsByClassName("password");
        loginName[0].value = "";
        password[0].value = "";
        loginName[0].innerHTML = "";
        password[0].innerHTML = "";
        LW[0].style.display = "none";
    }

    render() {
        return <loginwindow class="loginWindow">
            <div>
                <input type="button" onClick={this.exitOfMenu} value="Close"></input>
                <input className="loginName" type="text" placeholder="Login"></input>
                <input className="password" type="password" placeholder="Password"></input>
                <input className="buttontologin" type="button" value="Sign in" onClick={this.onClickLoginHandler}></input>
            </div>
        </loginwindow>
    }
}