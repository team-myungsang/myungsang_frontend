import { Feed } from '@models/feed';
import { ReactComponent as More } from '@assets/more.svg';
import { ReactComponent as Like } from '@assets/like.svg';
import { ReactComponent as View } from '@assets/view.svg';
import dayjs from 'dayjs';
import { countFormatter } from '@utils/format';
import { Link } from 'react-router-dom';
import { PATH } from '@constants/path';
import React from 'react';
import { SFeed } from './FeedItem.style';

interface FeedItemProps {
  feed: Feed;
}

function FeedItem({ feed }: FeedItemProps) {
  const onClickMoreBtn = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    /** @todo 더 보기 아이콘 클릭 로직 필요 */
    alert('more button click');
  };
  return (
    <Link to={`${PATH.WATCH}${feed.id}`}>
      <SFeed>
        <div className="feedHeader">
          {/* Avatar */}
          <div className="avatar">
            <img src={feed.user.file?.fullPath} alt={`${feed.id}_avatar`} />
          </div>

          {/* Nickname */}
          <div className="nickName">{feed.user.nickname}</div>

          {/* More Button */}
          <div className="moreBtn" onClick={onClickMoreBtn} aria-hidden>
            <More />
          </div>
        </div>
        <div className="feedThumb">
          <img src={feed.thumbPath} alt={`${feed.id}_thumb`} />
        </div>
        <div className="feedFooter">
          <div className="feedTitle">{feed.title}</div>
          <div className="feedInfoWrapper">
            <div className="feedInfoItem">
              <Like />
              {countFormatter(feed.like)}개
            </div>
            <div className="feedInfoItem">
              <View />
              {countFormatter(feed.view)}회
            </div>
            <div className="feedInfoItem">
              {dayjs.unix(feed.createdAt).fromNow()}
            </div>
          </div>
        </div>
      </SFeed>
    </Link>
  );
}

export default FeedItem;
