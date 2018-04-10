import React, { Component } from "react";

export default class Menu extends Component {
    render() {
        return <menu className="menu">
            <ul>
                <li><a href="index.html">страница1</a></li>
                <li><a href="index.html">страница2</a></li>
                <li><a href="index.html">страница3</a></li>
            </ul>
        </menu>
    }
}