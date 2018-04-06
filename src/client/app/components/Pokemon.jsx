import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Pokemon extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    };


    static defaulProps = {};

    render() {
        const { name, url } = this.props;
        const id = parseInt(url.slice(34, -1))
        let imgPath = "pokemons-images/"+id+".png";
        return (
            <pokemon>
                <ul>
                    <li>Название: {name}</li>
                    <li>Номер: {id}</li>
                </ul>
                <img src={imgPath} />
            </pokemon>
        );
    };
}