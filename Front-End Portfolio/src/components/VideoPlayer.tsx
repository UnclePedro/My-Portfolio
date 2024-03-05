import ReactPlayer from 'react-player';

function VideoPlayer(props: { url: string; width: string; height: string }) {
  return (
    <>
      <div className={'font-poppins flex justify-center p-6 rounded-lg'}>
        <ReactPlayer url={props.url} width={props.width} height={props.height} controls />
      </div>
    </>
  );
}

export default VideoPlayer;
