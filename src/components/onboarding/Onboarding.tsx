import onBoardingImg from '@assets/tmp_ob.png';
import { SOnboarding } from './Onboarding.style';

function Onboarding() {
  return (
    <SOnboarding>
      <img src={onBoardingImg} alt="onBoardingImg" />
    </SOnboarding>
  );
}

export default Onboarding;
