import React from "react";
import classes from "./Api.module.scss"
import RenderHits from "../HitsItemsRender/HitsRender";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../Loader/Loading";
import MainScreen from "../MainScreenContent/MainScreen";
import Modal from "../Modal/Modal";
import {ReactComponent as CloseBtn} from "../../icons/close.svg";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";


class ApiResults extends React.Component {

  state = {
    hits: null,
    loading: false,
    showModal: false,
    page: 1,
    largeImage: '',
    showLoadMoreBtn: false
  }
  api = {
    hitsTags: "",
    KEY: '23101955-6369c6792be6f6752905e3e3e',
    BASE_URL: 'https://pixabay.com/api/',
    orientation: 'all',
    imgType: 'all'
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
  }

  getImages = () => {
    const {BASE_URL, imgType, orientation, KEY} = this.api
    const nextTag = this.props.hitsTags
    const {page} = this.state
    this.setState({loading: true, hits: null, showLoadMoreBtn: false})
    fetch(`${BASE_URL}?image_type=${imgType}&orientation=${orientation}&page=${page}&per_page=12&key=${KEY}&q=${nextTag}`)
      .then(response => response.json())
      .then(hits => {
        if (!hits.hits.length) {
          toast("Nothing found!")
        }
        if (hits.hits.length > 0 && hits.hits.length >= 12) {
          this.setState({hits})
          this.setState({showLoadMoreBtn: true})
          this.setState(prevState => ({
            page: prevState.page + 1
          }))
        }
      })
      .finally(() =>
        this.setState({loading: false})
      )
  }

  componentDidUpdate(prevProps, prevState) {
    const prevTag = prevProps.hitsTags
    const nextTag = this.props.hitsTags
    if (prevTag !== nextTag) {
      this.getImages()
      this.setState({showLoadMoreBtn: false})
    }
  }

  handleGalleryItem = fullImageUrl => {
    this.setState({
      largeImage: fullImageUrl,
      showModal: true,
    });
  };

  // loadMore = () => {
  //   this.setState((prevState) => {
  //     return {
  //       page: prevState.page + 1
  //     }
  //   })
  // }

  render() {
    const {loading, hits, showModal, largeImage, showLoadMoreBtn} = this.state;
    const {hitsTags} = this.props;

    return (
      <div className={classes.information_container}>
        <ToastContainer position="top-right" autoClose={3500} hideProgressBar={false} newestOnTop={false} closeOnClick
                        rtl={false} theme="dark" pauseOnFocusLoss={false} draggable pauseOnHover/>
        {loading && (<Loading/>)}
        {!hitsTags && (<MainScreen/>)}
        {hits && (<RenderHits onImageClick={this.handleGalleryItem} hits={hits.hits}/>)}
        {showModal && (<Modal closeModal={this.toggleModal}>
          <img className={classes.modal_img} src={largeImage} alt="modal"/>
          <button className={classes.close_btn} onClick={this.toggleModal}>
            <CloseBtn width={40} height={40}/>
          </button>
        </Modal>)}
        {showLoadMoreBtn && <LoadMoreButton onClick={this.getImages}/>}
      </div>
    )
  }
}

export default ApiResults