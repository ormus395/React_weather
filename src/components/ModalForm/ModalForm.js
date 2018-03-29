import React, { Component } from "react";
import "./ModalForm.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      zipcode: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div id="simpleModal" className="modal">
        <div className="modal-content">
          <span onClick={this.props.handleClose} className="closeBtn">
            &times;
          </span>
          <div>
            <input
              type="text"
              name="city"
              onChange={this.handleChange}
              value={this.state.city}
            />
            <button
              onClick={() =>
                this.props.handleFormSubmit({
                  type: "city",
                  value: this.state.city
                })
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
