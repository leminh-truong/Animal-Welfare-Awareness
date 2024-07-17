import ReactPlayer from 'react-player/youtube';
// or
// import ReactPlayer from 'react-player';
//if you want to support other video URLs
//https://surajsharma.net/blog/react-embed-videos

const EmbedVideo = (props) => {
  return (
    <ReactPlayer url={props.url} />
  );
}

export default EmbedVideo;