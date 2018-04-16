import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import PokemonList from "../components/PokemonList"

export default class PokemonListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: [],
            loading: false
        };
    };

    componentWillMount() {
        this.setState({
            loading: true
        });

        fetch("https://pokeapi.co/api/v2/pokemon/?limit=802")
            .then(res => res.json())
            .then(pokemons => {
                this.setState({
                    loading: false,
                    pokemons
                });
            })
    };

    render() {
        let { loading, pokemons } = this.state;
        return (
            <div>
                <Link to="/comments">Comments</Link>
                { loading ? "Идёт загрузка" : <PokemonList pokemons={pokemons} />}
            </div>
        );
    };
}