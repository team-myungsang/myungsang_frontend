import { ReactElement, useEffect, useState } from 'react';
import { Overlay, SBottomUpModal } from './BottomUpModal.style';

interface BottomUpModalProps {
  content: ReactElement;
  visible: boolean;
}

function BottomUpModal({ content, visible }: BottomUpModalProps) {
  const [close, setClose] = useState<boolean>(true);

  useEffect(() => {
    if (visible) {
      setClose(false);
    } else {
      setTimeout(() => {
        setClose(true);
      }, 400);
    }
  }, [visible]);

  if (!visible && close) return null;

  return (
    <>
      <Overlay />
      <SBottomUpModal visible={visible}>
        <div className="modalWrapper">
          <div className="contentWrapper">{content}</div>
        </div>
      </SBottomUpModal>
    </>
  );
}

export default BottomUpModal;
