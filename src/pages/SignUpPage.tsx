import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SignUpBtn,
  SignUpModal,
  SignUpModalOuter,
  SignUpModalYesOrNo,
  InputWrap,
  Form,
  Header,
  BackBtn,
} from '../components/testComponent/SignUp.style';

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
    <SignUpModalOuter>
      <SignUpModal>
        <div>회원가입을 종료하시겠습니까?</div>
        <SignUpModalYesOrNo>
          <button
            className="leftBtn"
            type="button"
            onClick={() => {
              pageMove('/MAIN');
            }}
          >
            예
          </button>
          <button className="rightBtn" type="button" onClick={handelModal}>
            아니오
          </button>
        </SignUpModalYesOrNo>
      </SignUpModal>
    </SignUpModalOuter>
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
      <Header>
        <BackBtn onClick={handleBack}>뒤로</BackBtn>
        <h2>회원가입</h2>
      </Header>
    </>
  );
}

// SignUpForm
function SignUpForm() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  });
  const { email, password, confirmPassword, nickname } = form;
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPass, setIsPass] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    const emailRegexp =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    setIsEmail(emailRegexp.test(email));
    const passwordRegexp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/;
    setIsPassword(passwordRegexp.test(password));
    setIsConfirmPassword(password === confirmPassword);
    setIsNickname(nickname.length >= 2);
  }, [email, password, confirmPassword, nickname]);

  useEffect(() => {
    setIsPass(isEmail && isPassword && isConfirmPassword && isNickname);
  }, [isEmail, isPassword, isConfirmPassword, isNickname]);

  const pageMove = useNavigate();
  const signUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (isPass) {
      pageMove('/LOGIN', { state: true });
    } else {
      window.alert('다시 입력해주세요');
      e.preventDefault();
    }
  };

  return (
    <Form action="" method="POST" onSubmit={signUpSubmit}>
      <InputWrap htmlFor="email">
        이메일
        <input
          type="text"
          id="email"
          name="email"
          onChange={onChange}
          placeholder="이메일을 입력해주세요."
          value={email}
        />
        {email.length >= 1 &&
          (isEmail ? (
            <div className="good">좋아요</div>
          ) : (
            <div className="bad">잘못된 이메일입니다.</div>
          ))}
      </InputWrap>
      <InputWrap htmlFor="password">
        패스워드
        <input
          type="password"
          id="password"
          name="password"
          onChange={onChange}
          placeholder="패스워드를 입력해주세요."
          value={password}
        />
        {password.length >= 1 &&
          (isPassword ? (
            <div className="good">좋아요</div>
          ) : (
            <div className="bad">잘못된 패스워드입니다.</div>
          ))}
      </InputWrap>
      <InputWrap htmlFor="confirmPassword">
        패스워드 확인
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={onChange}
          placeholder="패스워드를 다시 입력해주세요."
          value={confirmPassword}
        />
        {confirmPassword.length >= 1 &&
          (isConfirmPassword ? (
            <div className="good">좋아요</div>
          ) : (
            <div className="bad">패스워드가 일치하지 않습니다.</div>
          ))}
      </InputWrap>
      <InputWrap htmlFor="nickname">
        닉네임
        <input
          type="text"
          id="nickname"
          name="nickname"
          onChange={onChange}
          placeholder="닉네임을 입력해주세요."
          value={nickname}
        />
        {nickname.length >= 1 &&
          (isNickname ? (
            <div className="good">좋아요</div>
          ) : (
            <div className="bad">2글자 이상 입력해주세요</div>
          ))}
      </InputWrap>
      <SignUpBtn type="submit" value="가입" />
    </Form>
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
