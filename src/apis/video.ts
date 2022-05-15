import { Category } from '@models/category';
import { Feed, ResponseFeed, serializeFeed } from '@models/feed';
import { File } from '@models/file';
import { User } from '@models/user';
import axios from 'axios';

interface UploadFeedResponse {
  id: number;
}

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await axios.get<Category[]>('/categories');
    return res.data;
  } catch (error) {
    throw Error('getCategories Error');
  }
}

export async function getMainVideos(categoryId?: string): Promise<Feed[]> {
  try {
    const usp = new URLSearchParams();
    if (categoryId) {
      usp.set('category_id', categoryId);
    }
    const res = await axios.get<ResponseFeed[]>(
      `/main/videos?${usp.toString()}`,
    );

    const feedList = res.data.map(f => serializeFeed(f));

    return feedList;
  } catch (error) {
    throw Error('getMainVideos Error');
  }
}

export async function getMyVideos(): Promise<Feed[]> {
  try {
    const res = await axios.get<ResponseFeed[]>('/videos/me');

    const feedList = res.data.map(f => serializeFeed(f));
    return feedList;
  } catch (error) {
    throw Error('getMainVideos Error');
  }
}
export async function getLikeVideos(): Promise<Feed[]> {
  try {
    const res = await axios.get<{ videos: ResponseFeed[] }>('/getInterestFeed');

    const feedList = res.data.videos.map(f => serializeFeed(f));
    return feedList;
  } catch (error) {
    throw Error('getMainVideos Error');
  }
}
export async function getVideo(feedId: number): Promise<Feed> {
  try {
    const res = await axios.get<ResponseFeed>(`/videos/${feedId}`);

    return serializeFeed(res.data);
  } catch (error) {
    throw Error('getMainVideos Error');
  }
}

export async function uploadFeed({
  title,
  content,
}: {
  title: string;
  content: string;
  categories?: { id: number }[];
}): Promise<number> {
  try {
    const res = await axios.post<UploadFeedResponse>('/videos', {
      title,
      content,
    });

    return res.data.id;
  } catch (error) {
    console.log(error);
    throw new Error('uploadFeed Error');
  }
}

export async function uploadFiles({
  id,
  formData,
}: {
  id: number;
  formData: FormData;
}) {
  try {
    const res = await axios.post(`/videos/${id}/upload_file`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(res.data);
  } catch (error) {
    throw new Error('uploadFiles Error');
  }
}

export async function deleteFeed(feedId: number) {
  try {
    const res = await axios.delete(`/videos/${feedId}`);
    console.log(res.data.msg);
  } catch (error) {
    throw new Error('deleteFeed Error');
  }
}
