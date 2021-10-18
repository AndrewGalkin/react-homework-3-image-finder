import React from "react";
import classes from "./SearchBar.module.scss";
import shortid from "shortid"
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class SearchBar extends React.Component {

  state = {
    search: ""
  }

  uniqueId = shortid.generate()

  handleChangeName = (event) => {
    this.setState({search: event.currentTarget.value.toLowerCase()})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.search.trim() === "") {
      toast("Your form is empty!")
      return
    }
    this.props.onSubmit(this.state.search)
    this.setState({search: ""})

  }

  render() {
    const {search} = this.state
    return (
      <header className={classes.Searchbar}>
        <form onSubmit={this.handleSubmit} className={classes.search_form}>
          <input
            className={classes.input_field}
            type="text"
            autoComplete="off"
            id={this.uniqueId}
            autoFocus
            value={search}
            onChange={this.handleChangeName}
            placeholder="Search images and photos"
          />
          <label htmlFor={this.uniqueId} className={classes.input_label}>Search Images...</label>
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick
                        rtl={false} theme="dark" pauseOnFocusLoss={false} draggable pauseOnHover/>
      </header>
    )
  }
}

export default SearchBar