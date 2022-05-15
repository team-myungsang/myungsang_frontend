import { SSkeletonFeedItem } from './FeedItem.style';

function SkeletonFeedItem() {
  return (
    <SSkeletonFeedItem>
      <div className="feedHeader">
        <div className="avatar" />
        <div className="nickName" />
      </div>

      <div className="feedThumb" />
      <div className="feedFooter">
        <div className="title" />
        <div className="infoWrapper">
          <div className="infoItem" />
          <div className="infoItem" />
          <div className="infoItem" />
        </div>
      </div>
    </SSkeletonFeedItem>
  );
}

export default SkeletonFeedItem;
