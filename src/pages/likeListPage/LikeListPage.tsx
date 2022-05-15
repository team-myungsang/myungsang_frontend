import { getLikeVideos } from '@apis/video';
import EmptyLikeList from '@components/emptyLikeList/EmptyLikeList';
import FeedItem from '@components/feedItem/FeedItem';
import SkeletonFeedItem from '@components/feedItem/SkeletonFeedItem';
import Footer from '@components/footer/Footer';
import { PATH } from '@constants/path';
import { useAuth } from '@hooks/useAuth';
import { Feed } from '@models/feed';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SLikeListPage } from './LikeListPage.style';

function LikeListPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [feedList, setFeedList] = useState<Feed[]>();

  useEffect(() => {
    getLikeVideos()
      .then(fl => setFeedList(fl))
      .catch(() => {
        alert('관심 영상을 가져오는 도중 오류가 발생했습니다.');
      });
  }, []);

  useEffect(() => {
    if (!user) {
      navigate(PATH.LOGIN);
    }
  }, [user]);

  return (
    <SLikeListPage>
      <div className="likeList__Header">
        <h1>관심영상</h1>
        <div className="desc">
          좋아요 표시한 동영상
          {feedList && (
            <div className="videoCount">
              {feedList.length === 0
                ? '동영상 없음'
                : `동영상 ${feedList.length}개`}
            </div>
          )}
        </div>
      </div>
      {feedList ? (
        feedList.length === 0 ? (
          <EmptyLikeList />
        ) : (
          feedList.map(feed => (
            <FeedItem key={`feed_${feed.id}`} type="default" feed={feed} />
          ))
        )
      ) : (
        Array.from(Array(10)).map((_, index) => (
          <SkeletonFeedItem key={`skeleton_${index}`} />
        ))
      )}
      <Footer />
    </SLikeListPage>
  );
}

export default LikeListPage;
