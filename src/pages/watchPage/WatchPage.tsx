import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoShare from '@components/MovieShare/movieShare';
import { ReactComponent as GGTOWN } from '@assets/ggtown_logo.svg';
import { ReactComponent as Watch } from '@assets/watch.svg';
import { ReactComponent as Like } from '@assets/like.svg';
import { ReactComponent as LikeAction } from '@assets/like_action.svg';
import { ReactComponent as Save } from '@assets/save.svg';
import { ReactComponent as ArrowDown } from '@assets/arrow_down.svg';
import { getMovie } from '@apis/auth';
import {
  SDescription,
  SFeedback,
  SHeader,
  SMain,
  SMemo,
  STitle,
  SUser,
  SVideo,
  SVideoSample,
  SWatchNDate,
} from './WatchPage.style';

function WatchPage() {
  const [heart, setHeart] = useState(false);
  const [heartCount, setHeartCount] = useState(200);
  const [memo, setMemo] = useState(false);
  const [video, setVideo] = useState(null);
  const PageMove = useNavigate();

  const changeHeart = () => {
    setHeart(prev => !prev);
    if (heart) {
      setHeartCount(prev => prev - 1);
    } else {
      setHeartCount(prev => prev + 1);
    }
  };
  const onDescription = () => {
    setMemo(prev => !prev);
  };

  useEffect(() => {
    console.log(getMovie());
  }, []);

  return (
    <div>
      <SHeader>
        <button
          className="left"
          type="button"
          onClick={() => {
            PageMove('/');
          }}
        >
          <GGTOWN />
        </button>
      </SHeader>
      {video ? (
        <SVideo>
          <source src={video} />
        </SVideo>
      ) : (
        <SVideoSample>로딩중...</SVideoSample>
      )}
      <SMain>
        <STitle>
          무조건 알아야할 남자 명품 시계 브랜드와 주요 모델! [ft. 플렉스,
          오메가, 까르띠에, 태그호이어]
        </STitle>
        <SWatchNDate>
          <div className="watch">
            <Watch className="icon" />
            <div className="count">10만회</div>
          </div>
          <div className="date">10개월 전</div>
        </SWatchNDate>
        <SFeedback>
          <div className="like">
            {heart ? (
              <LikeAction onClick={changeHeart} />
            ) : (
              <Like onClick={changeHeart} />
            )}
            <div>{heartCount}개</div>
          </div>
          <hr />
          <div className="share">
            <KakaoShare />
            <div>공유</div>
          </div>
          <hr />
          <div className="save">
            <Save />
            <div>저장</div>
          </div>
        </SFeedback>
      </SMain>
      <SUser>
        <div className="profile">.</div>
        <div>시계에 진심인 사람</div>
      </SUser>
      <SDescription onClick={onDescription}>
        <div className="left">설명</div>
        <ArrowDown className="right" />
      </SDescription>
      {memo && (
        <SMemo>
          설명문을 집어넣는 공간입니다. 자동으로 줄바꿈도 됩니다. 설명을 누르면
          나타나기도하고 사라지기도합니다.
        </SMemo>
      )}
    </div>
  );
}

export default WatchPage;
