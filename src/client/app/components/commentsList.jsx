import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "../style.css";

export default class CommentsList extends PureComponent {
    static PropTypes = {
        comments: PropTypes.arrayOf(PropTypes.shape({
            author: PropTypes.string.is,
            message: PropTypes.string
        }))
    };

    render() {
        const { comments } = this.props;
        
        return (
            <ul>
                {comments.map(comment => <li>{comment.author}: {comment.message}</li>)}
            </ul>
        )
    }
}