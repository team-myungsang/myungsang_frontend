import FeedItem from '@components/feedItem/FeedItem';
import Footer from '@components/footer/Footer';
import { SLikeListPage } from './LikeListPage.style';

function LikeListPage() {
  return (
    <SLikeListPage>
      <div className="likeList__Header">
        <h1>관심영상</h1>
        <div className="desc">좋아요 표시한 동영상</div>
      </div>

      {/* {Array.from(Array(10)).map((_, i) => (
        <FeedItem key="feed" type="default" feed={mockFeed} />
      ))} */}

      <Footer />
    </SLikeListPage>
  );
}

export default LikeListPage;
