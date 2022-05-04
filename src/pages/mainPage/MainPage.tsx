import FeedItem from '@components/feedItem/FeedItem';
import { mockFeed } from '@mocks/feed';
import { SMainPageWrapper } from './MainPage.style';

function MainPage() {
  return (
    <SMainPageWrapper>
      <FeedItem feed={mockFeed} />
      <FeedItem feed={mockFeed} />
      <FeedItem feed={mockFeed} />
    </SMainPageWrapper>
  );
}

export default MainPage;
