import VideoPlayer from './VideoPlayer';

function VideoWall(props: { url3: string; url2: string; url1: string }) {
  return (
    <>
      <div className={'mt-6'}>
        <VideoPlayer url={props.url1} width={'650px'} height={'366px'} />
        <div className={'flex justify-center'}>
          <VideoPlayer url={props.url2} width={'500px'} height={'281px'} />
          <VideoPlayer url={props.url3} width={'500px'} height={'281px'} />
        </div>
      </div>
    </>
  );
}

export default VideoWall;
