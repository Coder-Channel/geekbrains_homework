import React, { Component } from "react";

export default class LoginButton extends Component {
    onClickHandler() {
        const LW = document.getElementsByClassName("loginWindow");
        LW[0].style.display = "block";
    }

    render() {
        return <loginbutton className="login" onClick={this.onClickHandler}>
            <input type="button" value="Войти"></input>
        </loginbutton>;
    }
}