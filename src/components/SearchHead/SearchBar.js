import React from "react";
import classes from "./SearchBar.module.scss";
import shortid from "shortid"

class SearchBar extends React.Component {

  state = {
    hitsTags: ""
  }

  uniqueId = shortid.generate()

  handleChangeName = (event) => {
    this.setState({hitsTags: event.currentTarget.value.toLowerCase()})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.hitsTags.trim() === "") {
      alert("TI SHO VASYA")
      return
    }
    this.props.onSubmit(this.state.hitsTags)
    this.setState({hitsTags: ""})

  }

  render() {
    return (
      <header className={classes.Searchbar}>
        <form onSubmit={this.handleSubmit} className={classes.search_form}>
          <input
            className={classes.input_field}
            type="text"
            autoComplete="off"
            id={this.uniqueId}
            autoFocus
            value={this.state.hitsTags}
            onChange={this.handleChangeName}
            placeholder="Search images and photos"
          />
          <label htmlFor={this.uniqueId} className={classes.input_label}>Search Images...</label>
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </header>
    )
  }
}

export default SearchBar