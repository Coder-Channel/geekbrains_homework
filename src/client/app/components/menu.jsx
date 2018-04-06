import React, { Component } from "react";

export default class Menu extends Component {
    render() {
        return <menu className="menu">
            <ul>
                <li><a href="index.html">page1</a></li>
                <li><a href="index.html">page2</a></li>
                <li><a href="index.html">page3</a></li>
            </ul>
        </menu>
    }
}