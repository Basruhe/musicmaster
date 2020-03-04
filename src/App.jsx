import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        {/* title */}
        <div className="App-title">Music master from App</div>
        {/* search function */}
        <div>
          <input placeholder="Search here....." />
          <button>Submit</button>
        </div>
        {/* profiles */}
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        {/* gallery */}
        <div className="Gallery">Gallery</div>
      </div>
    );
  }
}

export default App;
