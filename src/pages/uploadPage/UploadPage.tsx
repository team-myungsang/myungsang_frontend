import { useParams } from 'react-router-dom';
import { SUploadPage } from './UploadPage.style';

interface UploadPageProps {
  type: 'new' | 'edit';
}

function UploadPage({ type }: UploadPageProps) {
  const params = useParams<{ movieId: string }>();

  console.log(type);
  console.log(params.movieId);

  return (
    <SUploadPage>
      <div className="title">영상 업로드하기</div>
    </SUploadPage>
  );
}

export default UploadPage;
