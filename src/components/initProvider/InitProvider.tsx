import { ReactElement, useEffect, useState } from 'react';
import { useAuth } from '@src/hooks/useAuth';
import Onboarding from '@components/onboarding/Onboarding';

interface InitProviderProps {
  children: ReactElement;
}

function InitProvider({ children }: InitProviderProps) {
  const { isInitialized } = useAuth();
  const [onBoardingFinished, setOnBoardingFinished] = useState<boolean>(false);

  const onBoardingHolding = () => {
    setTimeout(() => {
      setOnBoardingFinished(true);
    }, 2000);
  };

  useEffect(() => {
    onBoardingHolding();
  }, []);

  if (!onBoardingFinished && !isInitialized) {
    return <Onboarding />;
  }
  return children;
}

export default InitProvider;
