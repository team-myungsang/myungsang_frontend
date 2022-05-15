import onBoardingImg1 from '@assets/onboarding_1.png';
import onBoardingImg2 from '@assets/onboarding_2.png';
import { SOnboarding } from './Onboarding.style';

interface OnboardingStepProps {
  step: 1 | 2;
}

function Onboarding({ step }: OnboardingStepProps) {
  return (
    <SOnboarding step={step}>
      <img
        src={step === 1 ? onBoardingImg1 : onBoardingImg2}
        alt="onBoardingImg"
      />
    </SOnboarding>
  );
}

export default Onboarding;
