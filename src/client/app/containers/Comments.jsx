import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import CommentsList from "../components/commentsList";
import CommentForm from "../components/commentForm";

export default class Comments extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };
    };

    handleSubmit = (author, message) => {
        const { comments } = this.state;
        this.setState({
            comments: comments.concat([{author, message}])
        });
    };

    render() {
        let { comments } = this.state;
        return (
            <div>
                <CommentsList comments={comments} />
                <CommentForm onSubmit={this.handleSubmit} />
            </div>
        );
    };
}