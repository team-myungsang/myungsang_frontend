import { Feed } from '@models/feed';
import { ReactComponent as More } from '@assets/more.svg';
import { ReactComponent as Like } from '@assets/like.svg';
import { ReactComponent as View } from '@assets/view.svg';
import profileSrc from '@assets/profile.png';
import dayjs from 'dayjs';
import { countFormatter } from '@utils/format';
import { Link } from 'react-router-dom';
import { PATH } from '@constants/path';
import React from 'react';
import { SFeed } from './FeedItem.style';

interface FeedItemProps {
  type: 'default' | 'my';
  feed: Feed;
  onClickEditButton?: (feed: Feed) => void;
}

function FeedItem({ type, feed, onClickEditButton }: FeedItemProps) {
  function handleEditButtonClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    if (onClickEditButton) {
      onClickEditButton(feed);
    }
  }

  return (
    <Link to={`${PATH.WATCH}${feed.id}`}>
      <SFeed>
        {type === 'default' && (
          <div className="feedHeader">
            {/* Avatar */}
            <div className="avatar">
              {feed.user.file?.fullPath ? (
                <img src={feed.user.file?.fullPath} alt={`${feed.id}_avatar`} />
              ) : (
                <img src={profileSrc} alt="default_profile" />
              )}
            </div>

            {/* Nickname */}
            <div className="nickName">{feed.user.nickname}</div>
          </div>
        )}
        <div className="feedThumb">
          <img src={feed.thumbPath} alt={`${feed.id}_thumb`} />
        </div>
        <div className="feedFooter">
          <div className="feedTitle">{feed.title}</div>
          <div className="feedInfoWrapper">
            <div className="feedInfoItem">
              <Like />
              {countFormatter(feed.likeCnt)}개
            </div>
            <div className="feedInfoItem">
              <View />
              {countFormatter(feed.view)}회
            </div>
            <div className="feedInfoItem">
              {dayjs(feed.createdAt).fromNow()}
            </div>
          </div>
        </div>

        {type === 'my' && (
          <div
            className="editButton"
            onClick={handleEditButtonClick}
            role="button"
            tabIndex={0}
          >
            <More />
          </div>
        )}
      </SFeed>
    </Link>
  );
}

export default FeedItem;
