import FeedItem from '@components/feedItem/FeedItem';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { mockFeed } from '@mocks/feed';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SMainPageWrapper } from './MainPage.style';

function MainPage() {
  const location = useLocation();

  useEffect(() => {
    const sp = new URLSearchParams(location.search);
    const category = sp.get('c');
    /** @todo call api */
    console.log(category);
  }, [location.search]);

  return (
    <SMainPageWrapper>
      <Header />
      {Array.from(Array(10)).map((_, i) => (
        <FeedItem key="feed" feed={mockFeed} />
      ))}
      <Footer />
    </SMainPageWrapper>
  );
}

export default MainPage;
