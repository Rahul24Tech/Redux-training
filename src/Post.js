import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.post.name}</h2>
        <h2>{this.props.post.email}</h2>
        <h2>{this.props.post.dob}</h2>
        <h2>{this.props.post.gender}</h2>
        {/* <h2>{this.props.post.file}</h2> */}
        <h2>{this.props.post.edu}</h2>
        <button
          onClick={() =>
            this.props.dispatch({ type: "EDIT_POST", id: this.props.post.id })
          }
        >
          Edit
        </button>
        <button
          onClick={() =>
            this.props.dispatch({ type: "DELETE_POST", id: this.props.post.id })
          }
        >
          Delete
        </button>
      </div>
    );
  }
}
export default connect()(Post);
