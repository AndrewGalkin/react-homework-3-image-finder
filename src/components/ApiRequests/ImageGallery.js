import React from "react";
import classes from "./Api.module.scss"
import RenderHits from "../ItemsRender/HitsRender";


class ImageGallery extends React.Component {

  state = {
    hits: null,
    loading: false
  }
  api = {
    hitsTags: "",
    KEY: '23101955-6369c6792be6f6752905e3e3e',
    BASE_URL: 'https://pixabay.com/api/',
    page: 1,
    orientation: 'all',
    imgType: 'all'
  }


  componentDidUpdate(prevProps, prevState) {
    const prevTag = prevProps.hitsTags
    const nextTag = this.props.hitsTags

    if (prevTag !== nextTag) {
      this.setState({loading: true, hits: null})
      setTimeout(() => {
        fetch(`${this.api.BASE_URL}?image_type=${this.api.imgType}&orientation=${this.api.orientation}&page=${this.api.page}&per_page=12&key=${this.api.KEY}&q=${nextTag}`)
          .then(response => response.json())
          .then(hits => this.setState({hits}))
          .finally(() => this.setState({loading: false}))
      }, 1000)
    }
  }

  render() {
    return (
      <div className={classes.information_container}>
        {this.state.loading && (<span>
         Loading
        </span>)}
        {!this.props.hitsTags && (<span className={classes.type_something}>
          <p>Type Something in search form bro! It's empty!</p>
          <span className="material-icons">sentiment_dissatisfied</span>
          </span>)}
        {this.state.hits && (
          <RenderHits hits={this.state.hits.hits}/>
        )}
      </div>
    )
  }
}

export default ImageGallery