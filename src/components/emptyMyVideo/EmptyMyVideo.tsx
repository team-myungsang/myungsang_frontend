import SelectUploadTypeOfFeedModal from '@components/selectUploadTypeOfFeedModal/SelectUploadTypeOfFeedModal';
import { useState } from 'react';
import { SEmptyMyVideo } from './EmptyMyVideo.style';

function EmptyMyVideo() {
  const [selectUploadTypeOfFeedModalVisible, setSelectUploadTypeOfFeedModal] =
    useState<boolean>(false);

  function onCloseUploadFeedModal() {
    setSelectUploadTypeOfFeedModal(false);
  }
  return (
    <>
      <SEmptyMyVideo>
        <div className="desc">
          아직 업로드된 영상이 없습니다.
          <br />
          영상을 업로드해보세요!
        </div>
        <button
          onClick={() => {
            setSelectUploadTypeOfFeedModal(true);
          }}
          type="button"
        >
          영상 만들어보기
        </button>
      </SEmptyMyVideo>
      <SelectUploadTypeOfFeedModal
        visible={selectUploadTypeOfFeedModalVisible}
        onClose={onCloseUploadFeedModal}
      />
    </>
  );
}

export default EmptyMyVideo;
