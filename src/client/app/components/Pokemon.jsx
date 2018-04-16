import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "../style.css";

export default class Pokemon extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            isOpen: false,
            weight: 0,
            abilities: []
        };
    };

    clickHandler = () => {
        const { name, url } = this.props;
        if (this.state.isOpen == false) {
            if (this.state.loading == true) {
                this.setState({
                    isOpen: true
                });
                fetch(url)
                    .then(res => res.json())
                    .then(pokemon => {
                        this.setState({
                            weight: pokemon.weight,
                            abilities: pokemon.abilities,
                            loading: false
                        });
                })
            }
            else {
                this.setState({
                    isOpen: true
                });
            }
        }
        else {
            if (this.state.loading == false) {
                this.setState({
                    isOpen: false
                });
            }
        }
    };

    render() {
        const { name, url } = this.props;
        const { weight, abilities, loading, isOpen } = this.state;
        const id = parseInt(url.slice(34, -1));
        const weightStr = "Вес: "+weight;
        const image = require("../images/pokemons-images/"+id+".png");
        return (
            <pokemon onClick={this.clickHandler}>
                <ul>
                    <li>Название: {name}</li>
                    <li>Номер: {id}</li>
                    { isOpen ? loading ? <li>Идёт загрузка</li> : (
                        <ul>
                        <li>{weightStr}</li>
                        {abilities.map(function handler(value) {
                            return <li>Способность: {value.ability.name}</li>
                        })}
                        </ul>
                    ) : ""}
                </ul>
                <img src={image} />
            </pokemon>
        );
    };
}