import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props); // if not declared, you will get an error

    this.state = { ter: ''};
  }
  render() {
    return <input onChange={(event) => console.log(event.target.value)} />;
  }

}


export default SearchBar;
