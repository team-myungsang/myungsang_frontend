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
import { ReactComponent as CheckCircleOutline } from '@assets/check_circle_outline.svg';
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
          window.alert('?????? ???????????? ??????????????????.');
          pageMove('/login');
        } else {
          window.alert('?????? ????????? ??????????????????.');
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
            <div>???????????? ?????????</div>
            <div>???????????? ??????????????????.</div>
          </div>
          <div className="inputWrap">
            <input
              type="text"
              id="email"
              name="email"
              onChange={onChange}
              placeholder="????????? ??????"
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
            ??????
          </button>
        </SSignUpForm>
      )}
      {step === 2 && (
        <SSignUpForm onSubmit={onSubmit}>
          <div className="title">
            <div>???????????? ?????????</div>
            <div>??????????????? ??????????????????.</div>
          </div>
          <div className="inputWrap">
            <input
              type="password"
              name="password"
              onChange={onChange}
              placeholder="???????????? ??????"
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
              <div>????????????</div>
              <CheckCircleOutline />
            </div>
            <div className={`${number ? 'active' : ''} isNumber`}>
              <div>????????????</div>
              <CheckCircleOutline />
            </div>
          </SSignUpPasswordCheck>
          <div className="inputWrap">
            <input
              type="password"
              name="confirmPassword"
              onChange={onChange}
              placeholder="???????????? ??????"
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
              <div>???????????? ??????</div>
              <CheckCircleOutline />
            </div>
          </SSignUpPasswordCheck>
          <button
            className={`${
              english && number && isConfirmPassword && 'active'
            } signUpBtn`}
            type="submit"
            disabled={!(english && number && isConfirmPassword)}
          >
            ??????
          </button>
        </SSignUpForm>
      )}
      {step === 3 && (
        <SSignUpForm onSubmit={onSubmit}>
          <div className="title">
            <div>?????? ????????????</div>
            <div>??????????????????.</div>
          </div>
          <div className="inputWrap">
            <input
              type="text"
              name="nickname"
              onChange={onChange}
              placeholder="?????????"
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
            ??????
          </button>
        </SSignUpForm>
      )}
      {step === 4 && (
        <SSignUpForm onSubmit={onSubmit} className="profileWrap">
          <div className="title last">
            <Success />
            <div className="success">???????????? ??????!</div>
            <div className="description">
              <div>GG?????? ????????? ?????????????????????.</div>
              <div>???????????? ??????????????????.</div>
            </div>
          </div>
          <button
            className="signUpBtn profile"
            type="button"
            onClick={onProfile}
          >
            ????????? ???????????? ??????
          </button>
        </SSignUpForm>
      )}
    </div>
  );
}
export default SignUpForm;
