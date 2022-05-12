import { useState, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '@components/signUpForm/SignUpForm';
import { ReactComponent as ArrowLeft } from '@assets/arrowleft.svg';
import {
  SSignUpModal,
  SSignUpModalOuter,
  SSignUpModalYesOrNo,
  SHeader,
} from './SignUp.style';

// modal type
interface ModalProps {
  setModalState: Dispatch<SetStateAction<boolean>>;
}

// modal
function ModalWindow({ setModalState }: ModalProps) {
  const pageMove = useNavigate();
  const handelModal = () => {
    setModalState(prev => !prev);
  };
  return (
    <SSignUpModalOuter>
      <SSignUpModal>
        <div>회원가입을 종료하시겠습니까?</div>
        <SSignUpModalYesOrNo>
          <button
            className="leftBtn"
            type="button"
            onClick={() => {
              pageMove('/');
            }}
          >
            예
          </button>
          <button className="rightBtn" type="button" onClick={handelModal}>
            아니오
          </button>
        </SSignUpModalYesOrNo>
      </SSignUpModal>
    </SSignUpModalOuter>
  );
}

// header props
interface HeaderProps {
  step: number;
}

// header
function SignUpHeader({ step }: HeaderProps) {
  const [modalState, setModalState] = useState(false);
  const handleBack = () => {
    setModalState(prev => !prev);
  };
  return (
    <>
      {modalState ? <ModalWindow setModalState={setModalState} /> : null}
      <SHeader step={step}>
        <ArrowLeft className="backBtn" onClick={handleBack} />
        <div className="bar">
          <div className="per" />
        </div>
      </SHeader>
    </>
  );
}

function SignUpPage() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <SignUpHeader step={step} />
      <SignUpForm step={step} setStep={setStep} />
    </div>
  );
}

export default SignUpPage;
