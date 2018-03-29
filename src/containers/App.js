import React, { Component } from "react";
import "./App.css";
import keys from "../config/keys";
import WeatherApp from "./WeatherApp/WeatherApp";
import ModalForm from "../components/ModalForm/ModalForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: false,
      showModal: false
    };
  }

  showModal = () => {
    console.log("I work!");
    this.setState({
      showModal: true
    });
  };

  closeModal = () => {
    console.log("I was clicked!");
    this.setState({
      showModal: false
    });
  };

  formSubmit = options => {
    this.setState({
      newData: options,
      showModal: false
    });
  };

  render() {
    return (
      <div className="App">
        <WeatherApp
          handleModalOpen={this.showModal}
          newCoords={this.state.newData}
        />
        {this.state.showModal ? (
          <ModalForm
            handleClose={this.closeModal}
            handleFormSubmit={this.formSubmit}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
