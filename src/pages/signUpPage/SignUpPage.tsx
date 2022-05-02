import SignUpForm from '@components/signUpForm/SignUpForm';
import { useState, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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

// header
function SignUpHeader() {
  const [bgPer, setBgPer] = useState<number>(1);
  const [bgPerTotal, setBgPerTotal] = useState<number>(3);
  const [modalState, setModalState] = useState(false);
  const handleBack = () => {
    setModalState(prev => !prev);
  };
  return (
    <>
      {modalState ? <ModalWindow setModalState={setModalState} /> : null}
      <SHeader>
        <FontAwesomeIcon
          className="backBtn"
          onClick={handleBack}
          icon={faArrowLeft}
        />
        <div className="bar">
          <div className="per" />
        </div>
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
