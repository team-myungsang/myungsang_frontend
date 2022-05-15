import { ReactElement, useEffect, useState } from 'react';
import { useAuth } from '@src/hooks/useAuth';
import Onboarding from '@components/onboarding/Onboarding';

interface InitProviderProps {
  children: ReactElement;
}

function InitProvider({ children }: InitProviderProps) {
  const { isInitialized } = useAuth();
  const [onBoardingFinished, setOnBoardingFinished] = useState<boolean>(false);
  const [onBordingStep, setOnBordingStep] = useState<1 | 2>(1);

  const onBoardingHolding = () => {
    setTimeout(() => {
      setOnBordingStep(2);
      setTimeout(() => {
        setOnBoardingFinished(true);
      }, 2000);
    }, 1000);
  };

  useEffect(() => {
    onBoardingHolding();
  }, []);

  if (!onBoardingFinished && !isInitialized) {
    return <Onboarding step={onBordingStep} />;
  }
  return children;
}

export default InitProvider;
