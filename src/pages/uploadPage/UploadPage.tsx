import { getCategories, uploadFeed, uploadFiles } from '@apis/video';
import { ReactComponent as Back } from '@assets/back.svg';
import { ReactComponent as ImgUpload } from '@assets/img_upload.svg';
import { ReactComponent as FileUpload } from '@assets/file_upload.svg';
import classNames from 'classnames';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Category } from '@models/category';
import { SUploadPage } from './UploadPage.style';

interface UploadPageProps {
  type: 'new' | 'edit';
}

function UploadPage({ type }: UploadPageProps) {
  const navigate = useNavigate();
  const params = useParams<{ movieId: string }>();
  const [searchParams] = useSearchParams();
  const {
    handleSubmit,
    register,
    formState: { isDirty, isValid },
  } = useForm<{
    link: string;
    title: string;
    content: string;
  }>({ mode: 'all' });
  const [categoryList, setCategoryList] = useState<Category[]>();
  const [selectedCategories, setSelectedCategories] = useState<
    Record<string, boolean>
  >({});

  const videoInputRef = useRef<HTMLInputElement>(null);
  const [videoFile, setVideoFile] = useState<File>();
  const [videoUrl, setVideoUrl] = useState<any>();

  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const [thumbFile, setThumbFile] = useState<File>();
  const [thumbUrl, setThumbUrl] = useState<any>();

  const uploadType = searchParams.get('ut');

  useEffect(() => {
    getCategories().then(cl => setCategoryList(cl));

    return () => {
      setCategoryList(undefined);
      setSelectedCategories({});
    };
  }, []);

  function onClickVideoInput() {
    videoInputRef?.current?.click();
  }

  function onChangeVideoInput(e: ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;
    if (!files?.length) return;
    const file = files[0];

    setVideoFile(file);
    setVideoUrl(URL.createObjectURL(file));
  }

  function onClickThumbailInput() {
    thumbnailInputRef?.current?.click();
  }

  function onChangeThumbnailInput(e: ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;
    if (!files?.length) return;
    const file = files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setThumbFile(file);
      setThumbUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function onClickCategoryItem(key: number) {
    setSelectedCategories(prev => ({ ...prev, [key]: !prev[key.toString()] }));
  }

  console.log(selectedCategories);

  const onSubmit = handleSubmit(async data => {
    try {
      if (!thumbFile || !videoFile) {
        throw new Error('썸네일or비디오 파일 없음');
      }
      if (uploadType === 'embed') {
        alert('임베드 업로드는 현재 준비중입니다.');
        return;
      }
      const formData = new FormData();
      formData.append('thumbnail_file', thumbFile);
      formData.append('video_file', videoFile);

      const categoryKeyList = Object.entries(selectedCategories)
        .filter(([_, isSelected]) => isSelected)
        .map(([key, _]) => ({ id: Number(key) }));

      const feedId = await uploadFeed({
        title: data.title,
        content: data.content,
        categories: categoryKeyList,
      });

      await uploadFiles({
        id: feedId,
        formData,
      });
    } catch (error) {
      alert(data);
    }
  });

  return (
    <SUploadPage>
      <div className="uploadPage__Header">
        <div>
          <Back
            onClick={() => {
              navigate(-1);
            }}
            className="backButton"
          />
        </div>
        <div className="title">
          {uploadType === 'embed' ? '임베드 업로드하기' : '직접 업로드하기'}
        </div>
      </div>

      <form onSubmit={onSubmit}>
        {uploadType === 'embed' ? (
          <>
            <label htmlFor="link">영상 임베드 링크</label>
            <input
              id="link"
              type="url"
              {...register('link', { required: true })}
            />
          </>
        ) : (
          <>
            <label htmlFor="video">영상 업로드</label>
            <input
              ref={videoInputRef}
              id="video"
              type="file"
              accept="video/mp4,video/mkv, video/x-m4v,video/*"
              onChange={onChangeVideoInput}
            />
            <div
              className={classNames('videoBox', { isFile: videoFile })}
              onClick={onClickVideoInput}
              role="button"
              tabIndex={0}
            >
              <FileUpload />
              {videoUrl && (
                <video width={320} height={240} controls>
                  <source src={videoUrl} type={videoFile?.type} />
                </video>
              )}
            </div>
          </>
        )}

        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          {...register('title', { required: true })}
        />

        <label htmlFor="content">설명</label>
        <textarea id="content" {...register('content', { required: true })} />

        <label htmlFor="thumbnail">썸네일 이미지</label>
        <input
          ref={thumbnailInputRef}
          id="thumbnail"
          type="file"
          accept="image/*"
          onChange={onChangeThumbnailInput}
        />
        <div
          className={classNames('thumbnailBox', {
            isImg: !!thumbUrl,
          })}
          onClick={onClickThumbailInput}
          role="button"
          tabIndex={0}
        >
          <ImgUpload />
          {thumbUrl && <img src={thumbUrl} alt="" />}
        </div>

        <label htmlFor="categories">영상 카테고리 선택</label>
        <div className="categoriesWrapper">
          {categoryList?.map(c => (
            <span
              key={`categoryItem_${c.id}`}
              className={classNames('categoryItem', {
                selected: selectedCategories[c.id.toString()],
              })}
              onClick={() => onClickCategoryItem(c.id)}
              role="button"
              tabIndex={0}
            >
              {c.title}
            </span>
          ))}
        </div>

        <div>
          <button
            type="submit"
            disabled={!isDirty || !isValid || !thumbFile || !videoFile}
          >
            영상 업로드하기
          </button>
        </div>
      </form>
    </SUploadPage>
  );
}

export default UploadPage;
