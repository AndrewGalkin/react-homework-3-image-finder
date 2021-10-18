import React from "react";
import classes from "./LoadMoreButton.module.scss"

const LoadMoreButton = ({onClick}) => {

  return (
    <div className={classes.btn_container}>
      <button className={classes.load_more_btn} onClick={onClick} type="button">
        Load More
      </button>
    </div>
  )

}

export default LoadMoreButton