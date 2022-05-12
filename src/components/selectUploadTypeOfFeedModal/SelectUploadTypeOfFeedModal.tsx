import BottomUpModal from '@components/bottomUpModal/BottomUpModal';
import { ReactComponent as UploadEmbed } from '@assets/upload_embed.svg';
import { ReactComponent as UploadDirect } from '@assets/upload_direct.svg';
import { Link } from 'react-router-dom';
import { PATH } from '@constants/path';
import { SSelectUploadTypeOfFeedModalContent } from './SelectUploadTypeOfFeedModal.style';

interface SelectUploadTypeOfFeedModalProps {
  visible: boolean;
  onClose: () => void;
}

function SelectUploadTypeOfFeedModal({
  visible,
  onClose,
}: SelectUploadTypeOfFeedModalProps) {
  return (
    <BottomUpModal
      visible={visible}
      content={
        <SSelectUploadTypeOfFeedModalContent>
          <div className="title">영상 업로드하기</div>
          <div className="uploadButtonsWrapper">
            <Link
              to={{
                pathname: PATH.UPLOAD,
                search: 'ut=embed',
              }}
            >
              <div className="uploadButton">
                <span className="iconWrapper">
                  <UploadEmbed />
                </span>
                임베드 업로드하기
              </div>
            </Link>

            <div className="divider" />

            <Link
              to={{
                pathname: PATH.UPLOAD,
                search: 'ut=direct',
              }}
            >
              <div className="uploadButton">
                <span className="iconWrapper">
                  <UploadDirect />
                </span>
                직접 업로드하기
              </div>
            </Link>
          </div>

          <button type="button" onClick={onClose}>
            닫기
          </button>
        </SSelectUploadTypeOfFeedModalContent>
      }
    />
  );
}

export default SelectUploadTypeOfFeedModal;
