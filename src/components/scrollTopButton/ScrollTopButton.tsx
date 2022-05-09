import { ReactComponent as Top } from '@assets/top.svg';
import { SScrollTopButton } from './ScrollTopButton.style';

function ScrollTopButton() {
  return (
    <SScrollTopButton onClick={() => window.scrollTo(0, 0)}>
      <Top />
    </SScrollTopButton>
  );
}

export default ScrollTopButton;
