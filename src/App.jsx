import React, { Component } from "react";
import "./App.css";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  search() {
    console.log("this.state looks like this: ", this.state);
  }

  render() {
    return (
      <div className="App">
        {/* title */}
        <div className="App-title">Music master from App</div>
        {/* search function */}
        {/* note; can this whole thing be replaced by a normal form?*/}
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an artist"
              value={this.state.query}
              onChange={event => {
                this.setState({ query: event.target.value });
              }}
              // search when 'enter' is pressed.
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            />
            {/* <InputGroup>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup> */}
          </InputGroup>
        </FormGroup>
        <button onClick={() => this.search()}>Search</button>
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

// notes: glyphicon currently not working. See part 5 of course(2/4)
