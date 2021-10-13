import classes from "./Hits.module.scss"

const Hit = ({id, largeImageURL, webformatURL, comments, downloads, tags, views, pageURL, likes}) => {
  return (
    <li id={id} className={classes.img_list} data-url={largeImageURL}>
      <a className={classes.img_list_link}>
        <img src={webformatURL} alt={tags} className="main-img"/>
      </a>
      <div className={classes.statistics}>
        <p className={classes.statistics_item}>
          <i className="material-icons icon">thumb_up</i>
          {likes}
        </p>
        <p className={classes.statistics_item}>
          <i className="material-icons icon">visibility</i>
          {views}
        </p>
        <p className={classes.statistics_item}>
          <i className="material-icons icon">comment</i>
          {comments}
        </p>
        <p className={classes.statistics_item}>
          <i className="material-icons icon">cloud_download</i>
          {downloads}
        </p>
        <a href={pageURL} className={classes.statistics_item && classes.home_page_link} target="_blank">
          <i className="material-icons icon">home</i>
          link to home page
        </a>
      </div>
    </li>

  )
}
export default Hit