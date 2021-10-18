import classes from "./Modal.module.scss";
import React from "react";
import {createPortal} from "react-dom";

const modalRoot = document.querySelector("#modal-root")

class Modal extends React.Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal()
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal()
    }
  };

  render() {
    return createPortal(
      <div className={classes.modal}>
        <div className={classes.modal_overlay} onClick={this.handleBackdropClick}>
        </div>
        <div className={classes.large_img_container}>
          {this.props.children}
        </div>

      </div>,
      modalRoot
    )


  }


}

export default Modal