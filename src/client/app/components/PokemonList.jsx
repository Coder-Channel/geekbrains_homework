import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Pokemon from "./Pokemon";

export default class PokemonList extends PureComponent {
    static propTypes = {
        pokemons: PropTypes.arrayOf({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    };

    static defaulProps = {
        pokemons: []
    };

    render() {
        const { pokemons } = this.props;
        return (
            <pokemonlist className="pokemonList">
                {pokemons.results.map(pokemon => <Pokemon {...pokemon} />)}
            </pokemonlist>
        );
    };
}