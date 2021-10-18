import classes from "./Loading.module.scss";
import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


const Loading = () => {
  return (
    <div className={classes.loading}>
      <p>Loading your request brother...</p>
      <Loader type="Oval" color="#FF00FFFF" height={80} width={80} timeout={3000}/>
    </div>
  )
}

export default Loading