import { Dispatch, SetStateAction } from 'react';
import { SModalBox, SModalLayout } from './CenterPopModal.style';

interface CenterPopModalProps {
  form: {
    title: string;
    leftText: string;
    rightText: string;
  };
  setIsCenterModal: Dispatch<SetStateAction<boolean>>;
}

function CenterPopModal({ form, setIsCenterModal }: CenterPopModalProps) {
  const { title, leftText, rightText } = form;
  const onLeftClick = () => setIsCenterModal(false);
  const onRightClick = () => setIsCenterModal(false); // 부모에서 함수를 가져온다.
  console.log(title, leftText, rightText);
  return (
    <SModalLayout>
      <SModalBox>
        <div>{title}</div>
        <div>
          <input type="submit" value={leftText} onClick={onLeftClick} />
          <input type="submit" value={rightText} onClick={onLeftClick} />
        </div>
      </SModalBox>
    </SModalLayout>
  );
}

export default CenterPopModal;
