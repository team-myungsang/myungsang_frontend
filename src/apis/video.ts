import { Category } from '@models/category';
import { Feed } from '@models/feed';
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
    const res = await axios.get<Feed[]>(`/main/videos?${usp.toString()}`);

    return res.data;
  } catch (error) {
    throw Error('getMainVideos Error');
  }
}

export async function getMyVideos(): Promise<Feed[]> {
  try {
    const res = await axios.get<Feed[]>('/videos/me');
    return res.data;
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
