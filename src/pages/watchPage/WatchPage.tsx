import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoShare from '@components/MovieShare/movieShare';
import { ReactComponent as GGTOWN } from '@assets/ggtown_logo.svg';
import { ReactComponent as Watch } from '@assets/watch.svg';
import { ReactComponent as Like } from '@assets/like.svg';
import { ReactComponent as LikeAction } from '@assets/like_action.svg';
import { ReactComponent as Save } from '@assets/save.svg';
import { ReactComponent as ArrowDown } from '@assets/arrow_down.svg';
import { DecreaseLikeCnt, getMovie, IncreaseLikeCnt } from '@apis/auth';
import Video from '@components/video/Video';
import {
  SDescription,
  SFeedback,
  SHeader,
  SMain,
  SMemo,
  STitle,
  SUser,
  SVideoSample,
  SWatchNDate,
} from './WatchPage.style';

function WatchPage() {
  const [isHeart, setIsHeart] = useState(false);
  const [memo, setMemo] = useState(false);
  const [likeCnt, setLikeCnt] = useState(0);
  const [data, setData] = useState({
    content: '',
    createdAt: '',
    title: '',
    view: 0,
    videoUrl: '',
    videoId: 0,
    userId: 0,
  });
  const PageMove = useNavigate();
  const { content, createdAt, title, view, videoUrl, videoId, userId } = data;

  const handleHeartClick = () => {
    setIsHeart(prev => !prev);
    if (isHeart) {
      setLikeCnt(prev => prev - 1);
    } else {
      setLikeCnt(prev => prev + 1);
    }
  };
  const handleMemoClick = () => {
    setMemo(prev => !prev);
  };

  useEffect(() => {
    const get = async () => {
      const result = await getMovie();
      setData({
        ...data,
        content: result.content,
        createdAt: result.created_at,
        title: result.title,
        view: result.view,
        videoUrl: result.video_file.fullPath,
        videoId: result.id,
        userId: result.user.id,
      });
      setIsHeart(result.liked);
      setLikeCnt(result.likeCnt);
    };
    get();
  }, []);

  useEffect(() => {
    if (!isHeart) {
      IncreaseLikeCnt({ videoId, userId });
    } else {
      DecreaseLikeCnt({ videoId, userId });
    }
  }, [likeCnt]);

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
      {videoUrl ? (
        <Video videoUrl={videoUrl} />
      ) : (
        <SVideoSample>로딩중...</SVideoSample>
      )}
      <SMain>
        <STitle>{title}</STitle>
        <SWatchNDate>
          <div className="watch">
            <Watch className="icon" />
            <div className="count">{view}회</div>
          </div>
          <div className="date">{createdAt.slice(0, 10)}</div>
        </SWatchNDate>
        <SFeedback>
          <div className="like">
            {isHeart ? (
              <LikeAction onClick={handleHeartClick} />
            ) : (
              <Like onClick={handleHeartClick} />
            )}
            <div>{likeCnt}개</div>
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
      <SDescription onClick={handleMemoClick}>
        <div className="left">설명</div>
        <ArrowDown className="right" />
      </SDescription>
      {memo && <SMemo>{content}</SMemo>}
    </div>
  );
}

export default WatchPage;
