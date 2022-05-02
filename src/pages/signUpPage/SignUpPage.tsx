import SignUpForm from '@components/signUpForm/SignUpForm';
import { useState, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SSignUpModal,
  SSignUpModalOuter,
  SSignUpModalYesOrNo,
  SHeader,
  SBackBtn,
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

// header
function SignUpHeader() {
  const [modalState, setModalState] = useState(false);
  const handleBack = () => {
    setModalState(prev => !prev);
  };
  return (
    <>
      {modalState ? <ModalWindow setModalState={setModalState} /> : null}
      <SHeader>
        <SBackBtn onClick={handleBack}>뒤로</SBackBtn>
        <h2>회원가입</h2>
      </SHeader>
    </>
  );
}

function SignUpPage() {
  return (
    <div>
      <SignUpHeader />
      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
