import React, { Component } from "react";
import { connect } from "react-redux";

class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.getName.value;
    const email = this.getEmail.value;
    const dob = this.getDob.value;
    const gender = this.getGender.value;
    // const file = this.getFile.value;
    const edu = this.getEducation.value;
    const data = {
      id: new Date(),
      name,
      email,
      dob,
      gender,
    //   file,
      edu,
      editing: false,
    }
    console.log(data);
    this.props.dispatch({
      type: "ADD_POST",
      data,
    })
    this.getName.value = "";
    this.getEmail.value = "";
    this.getDob.value = "";
    this.getGender.value = "";
    // this.getFile.value = "";
    this.getEducation.value = "";
  }
  render() {
    return (
      <div>
        <h1>Create Post Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            required
            ref={(input) => (this.getName = input)}
            placeholder="Name"
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Email"
            required
            ref={(input) => (this.getEmail = input)}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="DateOfBirth"
            required
            ref={(input) => (this.getDob = input)}
          />
          <br />
          <br />
          <select ref={(input) => (this.getGender = input)} name="gender">
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
          />{" "}
          <br />
          <br /> */}
          <select ref={(input) => (this.getEducation = input)} name="education">
            <option value="hsc">HSC</option>
            <option value="ssc">SSC</option>
            <option value="graduate">Graduate</option>
          </select>
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter password... "
            required
            ref={(input) => (this.getPass = input)}
          />
          <input
            type="text"
            placeholder="Enter Confirm password... "
            required
            ref={(input) => (this.getCpass = input)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
