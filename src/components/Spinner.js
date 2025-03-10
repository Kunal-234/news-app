import React, { Component } from "react";
import loading from './load2.gif'

export class Spinner extends Component {
  render() {
    return (
      <div style={{ display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"}} className="spinner-container">
        <img src={loading} alt="loading" className="spinner" style={{ width: "100px", 
    height: "100px"}} />
      </div>
    );
  }
}

export default Spinner;
