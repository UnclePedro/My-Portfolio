import { default as _ReactPlayer } from 'react-player/lazy';
// eslint-disable-next-line import/no-unresolved
import { ReactPlayerProps } from 'react-player/types/lib';
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

function VideoPlayer(props: { url: string; width: string; height: string }) {
  return (
    <>
      <div className={'sm:mt-4 px-4 flex justify-center'}>
        <ReactPlayer url={props.url} width={props.width} height={props.height} controls />
      </div>
    </>
  );
}

export default VideoPlayer;
