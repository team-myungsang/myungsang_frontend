import { PATH } from '@constants/path';
import { useAuth } from '@hooks/useAuth';
import logoSrc from '@assets/logo.png';
import { ReactComponent as RightCircleOutline } from '@assets/right_circle_outline.svg';
import { ReactComponent as CloseCircleFilled } from '@assets/close_circle_filled.svg';

import { ReactComponent as Back } from '@assets/back.svg';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { SLoginPageWrapper } from './LoginPage.style';

interface LoginFormData {
  email: string;
  password: string;
}

function LoginPage() {
  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { isDirty, isValid },
  } = useForm<LoginFormData>({ mode: 'onChange' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async data => {
    await login(data);
  });

  return (
    <SLoginPageWrapper>
      <div>
        <Back
          onClick={() => {
            navigate(-1);
          }}
          className="backButton"
        />
      </div>

      <div className="logoWrapper">
        <img className="logo" src={logoSrc} alt="logo" />
      </div>
      <div className="subTitle">EVERYTHING YOU LOVE IS HERE</div>

      <form onSubmit={onSubmit}>
        <label htmlFor="email">이메일</label>
        <div className="inputWrapper">
          <input
            id="email"
            type="email"
            placeholder="예) ggtown@town.co.kr"
            {...register('email', {
              required: true,
              pattern: {
                value:
                  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
                message: '이메일 형식이 다릅니다.',
              },
            })}
          />
          {watch('email')?.length > 0 && (
            <CloseCircleFilled
              onClick={() => {
                resetField('email');
              }}
            />
          )}
        </div>

        <label htmlFor="password">비밀번호</label>
        <div className="inputWrapper">
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: '6자이상 입력',
              },
            })}
          />
          {watch('password')?.length > 0 && (
            <CloseCircleFilled
              onClick={() => {
                resetField('password');
              }}
            />
          )}
        </div>

        <div>
          <button type="submit" disabled={!isDirty || !isValid}>
            로그인
          </button>
        </div>

        <div className="signupWrapper">
          <Link to={PATH.SIGNUP}>이메일로 회원가입</Link>
          <RightCircleOutline />
        </div>
      </form>
    </SLoginPageWrapper>
  );
}

export default LoginPage;
