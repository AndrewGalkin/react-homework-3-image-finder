import classes from "./Hits.module.scss"

const Hit = ({id, onImageClick, largeImageURL, webformatURL, comments, downloads, tags, views, pageURL, likes}) => {
  const fullImage = () => onImageClick(largeImageURL);
  return (
    <li onClick={fullImage} id={id} className={classes.img_list} data-url={largeImageURL}>
      <a className={classes.img_list_link}>
        <img src={webformatURL} alt={tags}/>
      </a>
      <div className={classes.statistics}>
        <p className={classes.statistics_item}>
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className={classes.statistics_item}>
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className={classes.statistics_item}>
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className={classes.statistics_item}>
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
        <a href={pageURL} className={classes.statistics_item} target="_blank" rel="noreferrer">
          <i className="material-icons">home</i>
          link to home page
        </a>
      </div>
    </li>
  )
}
export default Hit