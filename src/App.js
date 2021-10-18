import SearchBar from "./components/SearchHead/SearchBar";
import ApiResults from "./components/ApiRequests/ApiResults";
import React from "react";


export default class App extends React.Component {
  state = {
    hitsTags: ""
  }

  handleSearchSubmit = (hitsTags) => {
    this.setState({hitsTags})
  }

  render() {
    return (
      <div className={"main_content"}>
        <SearchBar onSubmit={this.handleSearchSubmit}/>
        <ApiResults hitsTags={this.state.hitsTags}/>
      </div>
    )
  }
}


