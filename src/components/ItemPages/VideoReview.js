import classes from "./ItemPage.module.css";

function VideoReview(props) {

  return (
    <div className={classes.videoReview}>
      <p>{props.children}</p>
      <iframe
        src={props.link}
        title="Відео-Огляд"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
export default VideoReview;
