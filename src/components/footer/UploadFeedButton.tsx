import { ReactComponent as Plus } from '@assets/plus.svg';
import React from 'react';
import { SUploadFeedButton } from './Footer.style';

interface UploadFeedButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

function UploadFeedButton({ ...rest }: UploadFeedButtonProps) {
  return (
    <SUploadFeedButton {...rest}>
      <Plus />
    </SUploadFeedButton>
  );
}

export default UploadFeedButton;
