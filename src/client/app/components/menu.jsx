import React, { Component } from "react";
import styles from "../style.css";

export default class Menu extends Component {
    render() {
        return <menu className={styles.menu}>
            <ul>
                <li><a href="index.html">страница1</a></li>
                <li><a href="index.html">страница</a></li>
                <li><a href="index.html">страница3</a></li>
            </ul>
        </menu>
    }
}