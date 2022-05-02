import onBoardingImg from '@assets/tmp_ob.gif';
import { SOnboarding } from './Onboarding.style';

function Onboarding() {
  return (
    <SOnboarding>
      <img src={onBoardingImg} alt="onBoardingImg" />
    </SOnboarding>
  );
}

export default Onboarding;
