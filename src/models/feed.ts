import { Category } from './category';
import { File } from './file';

import { User } from './user';

export interface ResponseFeed {
  id: number;
  user: User;
  title: string;
  content: string;
  thumbnail_file?: File;
  video_file?: File;
  categories: Category[];
  likeCnt: number;
  view: number;
  path: number;
  liked: boolean;
  created_at: string;
  updated_at: string;
}

export interface Feed {
  id: number;
  user: User;
  title: string;
  content: string;
  thumbnailFile?: File;
  videoFile?: File;
  categories: Category[];
  likeCnt: number;
  view: number;
  path: number;
  liked: boolean;
  createdAt: string;
  updatedAt: string;
}

export function serializeFeed(feed: ResponseFeed): Feed {
  const {
    id,
    user,
    title,
    content,
    categories,
    likeCnt,
    liked,
    view,
    path,
    video_file: videoFile,
    thumbnail_file: thumbnailFile,
    created_at: createdAt,
    updated_at: updatedAt,
  } = feed;
  return {
    id,
    user,
    title,
    content,
    thumbnailFile,
    videoFile,
    categories,
    likeCnt,
    view,
    path,
    liked,
    createdAt,
    updatedAt,
  };
}
