import ReactPlayer from 'react-player';

function VideoPlayer(props: { url: string; width: string; height: string }) {
  return (
    <>
      <div className={'sm:mt-4 px-4 flex justify-center'}>
        <ReactPlayer url={props.url} width={props.width} height={props.height} />
      </div>
    </>
  );
}

export default VideoPlayer;
