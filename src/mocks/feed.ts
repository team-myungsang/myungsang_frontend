import { Feed } from '@models/feed';
import thumbPath from '@mocks/assets/tmp_thumbnail.jpg';
import dayjs from 'dayjs';
import { feedUser01 } from './user';

export const mockFeed: Feed = {
  id: 1,
  user: feedUser01,
  title:
    '무조건 알아야할 남자 명품 시계 브랜드와 주요 모델! [ft. 플렉스, 오메가, 까르띠에, 태그호이어]',
  like: 2600,
  view: 53000,
  createdAt: dayjs('2022-04-01').unix(),
  updatedAt: dayjs('2022-04-01').unix(),
  thumbPath,
};
