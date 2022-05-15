import { User } from './user';

/** @todo 추후에 피드 모델 업데이트 필요 */
export interface Feed {
  id: number;
  user: User;
  title: string;
  likeCnt: number;
  view: number;
  createdAt: number;
  updatedAt: number;
  thumbPath: string;
}
