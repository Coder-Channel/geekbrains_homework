import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "../style.css";

export default class Pokemon extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        onNameClick: PropTypes.func
    };

    clickHandler = () => {
        const { onNameClick } = this.props;
        const { name } = this.props;
        if (typeof onNameClick === "function") {
            onNameClick(name);
        }
    };

    render() {
        const { name, url } = this.props;
        const id = parseInt(url.slice(34, -1))
        let imgPath = "pokemons-images/"+id+".png";
        return (
            <pokemon onClick={this.clickHandler}>
                <ul>
                    <li>Название: {name}</li>
                    <li>Номер: {id}</li>
                </ul>
                <img src={imgPath} />
            </pokemon>
        );
    };
}