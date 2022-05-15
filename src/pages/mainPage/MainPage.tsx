import { getMainVideos } from '@apis/video';
import FeedItem from '@components/feedItem/FeedItem';
import SkeletonFeedItem from '@components/feedItem/SkeletonFeedItem';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { Feed } from '@models/feed';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SMainPageWrapper } from './MainPage.style';

function MainPage() {
  const [feedList, setFeedList] = useState<Feed[]>();
  const location = useLocation();

  useEffect(() => {
    const sp = new URLSearchParams(location.search);
    const category = sp.get('c') || undefined;

    getMainVideos(category).then(fl => setFeedList(fl));

    return () => {
      setFeedList(undefined);
    };
  }, [location.search]);

  return (
    <SMainPageWrapper>
      <Header />
      {feedList
        ? feedList.map(feed => (
            <FeedItem key={`feed_${feed.id}`} type="default" feed={feed} />
          ))
        : Array.from(Array(10)).map(_ => <SkeletonFeedItem />)}
      <Footer />
    </SMainPageWrapper>
  );
}

export default MainPage;
