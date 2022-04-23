import { PATH } from '@constants/path';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { LoginPageWrapper } from './LoginPage.style';

interface LoginFormData {
  email: string;
  password: string;
}

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = handleSubmit(data => {
    /** @todo Call api */
    console.log(data);
  });
  return (
    <LoginPageWrapper>
      <h1>로그인</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          placeholder="등록하신 이메일을 입력해주세요."
          {...register('email', { required: true })}
        />
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register('password', { required: true })}
        />
        {(errors.email || errors.password) && (
          <div className="errMsg">이메일 또는 패스워드를 입력해주세요.</div>
        )}
        <div>
          <button type="submit">로그인</button>
        </div>
        <div>
          <Link to={PATH.SIGNUP}>회원가입</Link>
        </div>
      </form>
    </LoginPageWrapper>
  );
}

export default LoginPage;
