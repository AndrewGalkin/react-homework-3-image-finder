import Hit from "./HitsItem";
import classes from "./Hits.module.scss"

function RenderHits({hits}) {
  return (
    <ul className={classes.gallery}>
      {hits.map(hit => (
        <Hit
          key={hit.id}
          largeImageURL={hit.largeImageURL}
          webformatURL={hit.webformatURL}
          comments={hit.comments}
          downloads={hit.downloads}
          tags={hit.tags}
          views={hit.views}
          pageURL={hit.pageURL}
          likes={hit.likes}
        />
      ))}
    </ul>
  )
}

export default RenderHits