import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  FormEvent,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpSubmit } from '@apis/auth';
import { ReactComponent as CloseCircleFiiled } from '@assets/close_circle_filled.svg';
import { ReactComponent as Check } from '@assets/check.svg';
import { ReactComponent as Success } from '@assets/success.svg';
import { SSignUpForm, SSignUpPasswordCheck } from './SignUpForm.style';

interface SignUpFormProps {
  setStep: Dispatch<SetStateAction<number>>;
  step: number;
}

function SignUpForm({ step, setStep }: SignUpFormProps) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  });
  const { email, password, confirmPassword, nickname } = form;
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState({
    english: false,
    number: false,
  });
  const { english, number } = isPassword;
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPass, setIsPass] = useState(false);
  const pageMove = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    const checkEng = /[a-zA-Z]/;
    const checkNum = /[0-9]/;
    setIsPassword({
      ...isPassword,
      english: checkEng.test(password),
      number: checkNum.test(password),
    });
    setIsConfirmPassword(password !== '' && password === confirmPassword);
    setIsNickname(nickname.length >= 2);
  }, [email, password, confirmPassword, nickname]);

  useEffect(() => {
    setIsPass(isEmail && isPassword && isConfirmPassword && isNickname);
  }, [isEmail, isPassword, isConfirmPassword, isNickname]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (step === 3) {
        const msg = await signUpSubmit({ email, password, nickname });
        if (msg === 'Register succeed') {
          setStep(prev => prev + 1);
        } else if (msg === 'Same name exists') {
          window.alert('이미 존재하는 닉네임입니다.');
          pageMove('/login');
        } else {
          window.alert('이미 가입된 이메일입니다.');
          pageMove('/login');
        }
      } else {
        setStep(prev => prev + 1);
      }
    } catch (error: any) {
      window.alert(`Error: ${error.message}`);
      pageMove('/login');
    }
  };

  const onProfile = () => {
    pageMove('/profile');
  };

  return (
    <div>
      {step === 1 && (
        <SSignUpForm onSubmit={onSubmit}>
          <div className="title">
            <div>로그인에 사용할</div>
            <div>이메일을 입력해주세요.</div>
          </div>
          <div className="inputWrap">
            <input
              type="text"
              id="email"
              name="email"
              onChange={onChange}
              placeholder="이메일 입력"
              value={email}
              className={isEmail ? 'active' : ''}
            />
            <CloseCircleFiiled
              className="resetBtn"
              onClick={() => {
                setForm({
                  ...form,
                  email: '',
                });
              }}
            />
          </div>
          <button
            className={`${isEmail && 'active'} signUpBtn`}
            type="submit"
            disabled={!isEmail}
          >
            다음
          </button>
        </SSignUpForm>
      )}
      {step === 2 && (
        <SSignUpForm onSubmit={onSubmit}>
          <div className="title">
            <div>로그인에 사용할</div>
            <div>비밀번호를 입력해주세요.</div>
          </div>
          <div className="inputWrap">
            <input
              type="password"
              name="password"
              onChange={onChange}
              placeholder="비밀번호 입력"
              value={password}
              className={english && number ? 'active' : ''}
            />
            <CloseCircleFiiled
              className="resetBtn"
              onClick={() => {
                setForm({
                  ...form,
                  password: '',
                });
              }}
            />
          </div>
          <SSignUpPasswordCheck>
            <div className={`${english ? 'active' : ''} isEnglish`}>
              <div>영문포함</div>
              <Check />
            </div>
            <div className={`${number ? 'active' : ''} isNumber`}>
              <div>숫자포함</div>
              <Check />
            </div>
          </SSignUpPasswordCheck>
          <div className="inputWrap">
            <input
              type="password"
              name="confirmPassword"
              onChange={onChange}
              placeholder="비밀번호 확인"
              value={confirmPassword}
              className={isConfirmPassword ? 'active' : ''}
            />
            <CloseCircleFiiled
              className="resetBtn"
              onClick={() => {
                setForm({
                  ...form,
                  confirmPassword: '',
                });
              }}
            />
          </div>
          <SSignUpPasswordCheck>
            <div className={`${isConfirmPassword ? 'active' : ''} isSame`}>
              <div>비밀번호 일치</div>
              <Check />
            </div>
          </SSignUpPasswordCheck>
          <button
            className={`${
              english && number && isConfirmPassword && 'active'
            } signUpBtn`}
            type="submit"
            disabled={!(english && number && isConfirmPassword)}
          >
            다음
          </button>
        </SSignUpForm>
      )}
      {step === 3 && (
        <SSignUpForm onSubmit={onSubmit}>
          <div className="title">
            <div>활동 닉네임을</div>
            <div>입력해주세요.</div>
          </div>
          <div className="inputWrap">
            <input
              type="text"
              name="nickname"
              onChange={onChange}
              placeholder="닉네임"
              value={nickname}
              className={isNickname ? 'active' : ''}
            />
            <CloseCircleFiiled
              className="resetBtn"
              onClick={() => {
                setForm({
                  ...form,
                  nickname: '',
                });
              }}
            />
          </div>
          <button
            className={`${isNickname && 'active'} signUpBtn`}
            type="submit"
            disabled={!isNickname}
          >
            가입
          </button>
        </SSignUpForm>
      )}
      {step === 4 && (
        <SSignUpForm onSubmit={onSubmit} className="profileWrap">
          <div className="title last">
            <Success />
            <div className="success">회원가입 완료!</div>
            <div className="description">
              <div>GG타운 가입이 완료되었습니다.</div>
              <div>프로필을 등록해주세요.</div>
            </div>
          </div>
          <button
            className="signUpBtn profile"
            type="button"
            onClick={onProfile}
          >
            프로필 등록하러 가기
          </button>
        </SSignUpForm>
      )}
    </div>
  );
}
export default SignUpForm;
