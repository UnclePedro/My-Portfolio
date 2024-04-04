import ReactPlayer from 'react-player';

function VideoPlayer(props: { url: string; width: string; height: string }) {
  return (
    <>
      <div className={'mt-4 mx-4 sm:px-4 flex justify-center'}>
        <ReactPlayer url={props.url} width={props.width} height={props.height} controls />
      </div>
    </>
  );
}

export default VideoPlayer;
