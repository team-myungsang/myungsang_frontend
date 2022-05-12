import { setBodyScroll } from '@utils/scroll';
import { ReactElement, useEffect, useState } from 'react';
import { SOverlay, SBottomUpModal } from './BottomUpModal.style';

interface BottomUpModalProps {
  content: ReactElement;
  visible: boolean;
}

function BottomUpModal({ content, visible }: BottomUpModalProps) {
  const [close, setClose] = useState<boolean>(true);

  useEffect(() => {
    if (visible) {
      setBodyScroll(false);
      setClose(false);
    } else {
      setTimeout(() => {
        setBodyScroll(true);
        setClose(true);
      }, 400);
    }
  }, [visible]);

  if (!visible && close) return null;

  return (
    <>
      <SOverlay visible={visible} />
      <SBottomUpModal visible={visible}>
        <div className="modalWrapper">
          <div className="contentWrapper">{content}</div>
        </div>
      </SBottomUpModal>
    </>
  );
}

export default BottomUpModal;
