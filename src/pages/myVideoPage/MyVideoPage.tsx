import BottomUpModal from '@components/bottomUpModal/BottomUpModal';
import FeedItem from '@components/feedItem/FeedItem';
import Footer from '@components/footer/Footer';
import { Feed } from '@models/feed';
import { ReactComponent as Trash } from '@assets/trash.svg';
import { ReactComponent as Edit } from '@assets/edit.svg';
import { useEffect, useState } from 'react';
import { deleteFeed, getMyVideos } from '@apis/video';
import SkeletonFeedItem from '@components/feedItem/SkeletonFeedItem';
import EmptyMyVideo from '@components/emptyMyVideo/EmptyMyVideo';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@constants/path';
import {
  SEditFeedModalContent,
  SMyVideoPageWrapper,
} from './MyVideoPage.style';

function MyVideoPage() {
  const [selectedFeedId, setSelectedFeedId] = useState<number>();
  const [feedList, setFeedList] = useState<Feed[]>();
  const [editFeedModalVisible, setEditFeedModalVisible] =
    useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    getMyVideos().then(fl => setFeedList(fl));

    return () => {
      setFeedList(undefined);
      setSelectedFeedId(undefined);
    };
  }, []);

  function onClickMoreButton(feed: Feed) {
    setSelectedFeedId(feed.id);
    setEditFeedModalVisible(true);
  }

  function onClickEditButton() {
    alert('아직 개발중입니다.');
    /** @todo 수정 페이지 개발 필요 */
    // navigate(`${PATH.UPLOAD}/${selectedFeedId}`, {
    //   state: {
    //     selectedFeed: feedList?.find(f => f.id === selectedFeedId),
    //   },
    // });
  }

  async function onClickDeleteFeedButton() {
    try {
      if (selectedFeedId) {
        await deleteFeed(selectedFeedId);
        alert('삭제되었습니다.');
        getMyVideos().then(fl => setFeedList(fl));
      }
    } catch (error) {
      alert('삭제 도중 오류가 발생했습니다.');
    } finally {
      setSelectedFeedId(undefined);
      setEditFeedModalVisible(false);
    }
  }

  function onCloseEditFeedModal() {
    setEditFeedModalVisible(false);
  }

  return (
    <SMyVideoPageWrapper>
      <h1>마이비디오</h1>
      {feedList ? (
        feedList.length === 0 ? (
          <EmptyMyVideo />
        ) : (
          feedList.map(feed => (
            <FeedItem
              key={`feed_${feed.id}`}
              type="my"
              feed={feed}
              onClickEditButton={onClickMoreButton}
            />
          ))
        )
      ) : (
        Array.from(Array(10)).map((_, index) => (
          <SkeletonFeedItem key={`skeleton_${index}`} />
        ))
      )}
      <Footer />
      <BottomUpModal
        visible={editFeedModalVisible}
        content={
          <SEditFeedModalContent>
            <button
              type="button"
              className="editButton"
              onClick={onClickEditButton}
            >
              <Edit />
              수정하기
              <div />
            </button>
            <button
              type="button"
              className="deleteButton"
              onClick={onClickDeleteFeedButton}
            >
              <Trash />
              삭제하기
              <div />
            </button>
            <button
              type="button"
              className="cancelButton"
              onClick={onCloseEditFeedModal}
            >
              취소
            </button>
          </SEditFeedModalContent>
        }
      />
    </SMyVideoPageWrapper>
  );
}

export default MyVideoPage;
