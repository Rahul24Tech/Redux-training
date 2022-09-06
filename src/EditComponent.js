import React, { Component } from "react";
import { connect } from "react-redux";

class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newName = this.getName.value;
    const newEmail = this.getEmail.value;
    const newDob = this.getDob.value;
    const newGender = this.getGender.value;
    // const newFile = this.getFile.value;
    const newEdu = this.getEducation.value;
    const data = {
      newName,
      newEmail,
      newDob,
      newGender,
    //   newFile,
      newEdu,
    }
    this.props.dispatch({ type: "UPDATE", id: this.props.post.id, data: data })
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleEdit}>
          <input
            type="text"
            required
            ref={(input) => (this.getName = input)}
            defaultValue={this.props.post.name}
            placeholder="Name"
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Email"
            required
            ref={(input) => (this.getEmail = input)}
            defaultValue={this.props.post.email}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="DateOfBirth"
            required
            ref={(input) => (this.getDob = input)}
            defaultValue={this.props.post.dob}
          />
          <br />
          <br />
          <select
            ref={(input) => (this.getGender = input)}
            name="gender"
            defaultValue={this.props.post.gender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <br />
          {/* <input
            type="file"
            required
            ref={(input) => (this.getFile = input)}
            defaultValue={this.props.post.file}
          />{" "}
          <br />
          <br /> */}
          <select
            ref={(input) => (this.getEducation = input)}
            name="education"
            defaultValue={this.props.post.edu}
          >
            <option value="hsc">HSC</option>
            <option value="ssc">SSC</option>
            <option value="graduate">Graduate</option>
          </select>
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);
