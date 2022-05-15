import { Dispatch, SetStateAction } from 'react';
import { SModalBox, SModalLayout } from './CenterPopModal.style';

interface CenterPopModalProps {
  form: {
    title: string;
    leftText: string;
    rightText: string;
  };
  handleLogout: Function;
  setIsCenterModal: Dispatch<SetStateAction<boolean>>;
}

function CenterPopModal({
  form,
  setIsCenterModal,
  handleLogout,
}: CenterPopModalProps) {
  const { title, leftText, rightText } = form;
  const onLeftClick = () => setIsCenterModal(false);
  const onRightClick = async () => {
    await handleLogout();
  };
  console.log(title, leftText, rightText);
  return (
    <SModalLayout>
      <SModalBox>
        <div>{title}</div>
        <div>
          <input type="submit" value={leftText} onClick={onLeftClick} />
          <input type="submit" value={rightText} onClick={onRightClick} />
        </div>
      </SModalBox>
    </SModalLayout>
  );
}

export default CenterPopModal;
