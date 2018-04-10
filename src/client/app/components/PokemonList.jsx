import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "../style.css";

import Pokemon from "./Pokemon";

export default class PokemonList extends PureComponent {
    static propTypes = {
        pokemons: PropTypes.arrayOf({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    };

    constructor(props) {
        super(props);

        this.state = {
            pokemons: props.pokemons
        };
    };

    static defaulProps = {
        pokemons: []
    };

    handleNameClick = (name) => {
        this.setState((prevState) => {
            return {
                users: prevState.pokemons.filter(pokemon => pokemon.name !== name)
            }
        });
    }

    render() {
        const { pokemons } = this.state;
        return (
            <pokemonlist className={styles.pokemonList}>
                {pokemons.results.map(pokemon => <Pokemon {...pokemon} onNameClick={this.handleNameClick} />)}
            </pokemonlist>
        );
    };
}