import { SEmptyMyVideo } from '@components/emptyMyVideo/EmptyMyVideo.style';

function EmptyLikeList() {
  return (
    <SEmptyMyVideo>
      <div className="desc">아직 관심 동영상이 없습니다.</div>
    </SEmptyMyVideo>
  );
}

export default EmptyLikeList;
