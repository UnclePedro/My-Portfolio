import VideoPlayer from './VideoPlayer';

function VideoWall(props: { url3: string; url2: string; url1: string }) {
  return (
    <>
      <div className={'my-12'}>
        <VideoPlayer url={props.url1} width={'500px'} height={'281px'} />
        <div className={'flex flex-col xl:flex-row justify-center'}>
          <VideoPlayer url={props.url2} width={'500px'} height={'281px'} />
          <VideoPlayer url={props.url3} width={'500px'} height={'281px'} />
        </div>
      </div>
    </>
  );
}

export default VideoWall;
