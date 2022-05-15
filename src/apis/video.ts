import axios from 'axios';

interface UploadFeedResponse {
  id: number;
}

export async function uploadFeed({
  title,
  content,
}: {
  title: string;
  content: string;
}): Promise<number> {
  try {
    const res = await axios.post<UploadFeedResponse>('/video', {
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
  videoFile,
  thumbnailFile,
}: {
  id: number;
  videoFile: FormData;
  thumbnailFile: FormData;
}) {
  try {
    const res = await axios.post(`/videos/${id}/upload_file`, {
      video_file: videoFile,
      thumbnail_file: thumbnailFile,
    });

    console.log(res.data);
  } catch (error) {
    throw new Error('uploadFiles Error');
  }
}
