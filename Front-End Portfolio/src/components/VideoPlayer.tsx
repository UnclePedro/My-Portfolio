import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from 'react-player/types/lib';
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

function VideoPlayer(props: { url: string; width: string; height: string }) {
  return (
    <>
      <div className={'mt-4 px-8 flex flex-col justify-center'}>
        <ReactPlayer url={props.url} width={props.width} height={props.height} controls />
        <ReactPlayer url={props.url} width={props.width} height={props.height} controls />
        <ReactPlayer url={props.url} width={props.width} height={props.height} controls />
      </div>
    </>
  );
}

export default VideoPlayer;
