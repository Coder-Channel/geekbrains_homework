import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "../style.css";

export default class CommentsList extends PureComponent {
    static PropTypes = {
        onSubmit: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            author: "",
            message: ""
        };
    };

    onPropertyChange = (propertName) => (event) => {
        this.setState({
            [propertName]: event.target.value
        });
    };

    onSubmitClick = (event) => {
        const { onSubmit } = this.props;
        const { author, message } = this.state;

        if (typeof onSubmit === "function") {
            onSubmit(author, message);
        }

        event.preventDefault();
    };

    render() {
        const { author, message } = this.state;

        return (
            <form>
                <input type="text" onChange={this.onPropertyChange("author")} placeholder="author" value={author} /><br />
                <textarea onChange={this.onPropertyChange("message")}>{message}</textarea><br />
                <button onClick={this.onSubmitClick}>Отправить</button>
            </form>
        )
    }
}