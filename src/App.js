import SearchBar from "./components/SearchHead/SearchBar";
import ImageGallery from "./components/ApiRequests/ImageGallery";
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
        <ImageGallery hitsTags={this.state.hitsTags}/>
      </div>
    )
  }
}


