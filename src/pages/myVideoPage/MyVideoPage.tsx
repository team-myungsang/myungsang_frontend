import BottomUpModal from '@components/bottomUpModal/BottomUpModal';
import FeedItem from '@components/feedItem/FeedItem';
import Footer from '@components/footer/Footer';
import { mockFeed } from '@mocks/feed';
import { Feed } from '@models/feed';
import { ReactComponent as Trash } from '@assets/trash.svg';
import { ReactComponent as Edit } from '@assets/edit.svg';
import { useState } from 'react';
import {
  SEditFeedModalContent,
  SMyVideoPageWrapper,
} from './MyVideoPage.style';

function MyVideoPage() {
  const [editFeedModalVisible, setEditFeedModalVisible] =
    useState<boolean>(false);

  function onClickEditButton(feed: Feed) {
    setEditFeedModalVisible(true);
    console.log(feed);
  }

  function onClickDeleteFeedButton(feedId: number) {
    /** @todo call api */
  }

  function onCloseEditFeedModal() {
    setEditFeedModalVisible(false);
  }

  return (
    <SMyVideoPageWrapper>
      <h1>마이비디오</h1>
      {Array.from(Array(10)).map((_, i) => (
        <FeedItem
          key="feed"
          type="my"
          feed={mockFeed}
          onClickEditButton={onClickEditButton}
        />
      ))}
      <Footer />
      <BottomUpModal
        visible={editFeedModalVisible}
        content={
          <SEditFeedModalContent>
            <button type="button" className="editButton" onClick={() => {}}>
              <Edit />
              수정하기
              <div />
            </button>
            <button type="button" className="deleteButton" onClick={() => {}}>
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
