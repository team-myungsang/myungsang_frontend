import { useState } from 'react';
import { SVideo } from './Video.style';

interface VideoProps {
  videoUrl: string;
}

function Video({ videoUrl }: VideoProps) {
  const [time, setTime] = useState(0);
  const onLoadedMetadata = (e: any) => {
    setTime(Math.floor(e.target.duration));
    // console.log(e.target.duration);
  };

  const onStartClick = (e: any) => {
    e.get(0).play();
  };

  return (
    <div>
      <SVideo controls onLoadedMetadata={onLoadedMetadata}>
        <source src={videoUrl} />
      </SVideo>
      {/* <div id="video-controls" className="controlWrap">
        <div className="controller">
          <div className="control-btn">
            <button type="button" onClick={onStartClick}>
              시작
            </button>
          </div>
          <div className="control-range">
            <div className="duration">
              <div className="duration-amount">{time}</div>
            </div>
            <input
              type="range"
              id="seek-bar"
              value="0"
              style={{ display: 'none' }}
            />
            <span className="currentTime" />
            <span className="totalTime" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Video;
