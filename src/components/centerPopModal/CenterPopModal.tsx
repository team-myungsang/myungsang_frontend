import { Dispatch, SetStateAction } from 'react';
import { SModalBox, SModalLayout } from './CenterPopModal.style';

interface CenterPopModalProps {
  form: {
    title: string;
    leftText: string;
    rightText: string;
  };
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

function CenterPopModal({ form, setIsModal }: CenterPopModalProps) {
  const { title, leftText, rightText } = form;
  const onLeftClick = () => setIsModal(false);
  const onRightClick = () => setIsModal(false); // 부모에서 함수를 가져온다.
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
