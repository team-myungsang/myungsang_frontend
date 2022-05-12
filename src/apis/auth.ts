/* eslint-disable no-use-before-define */
import { mockLogin, mockSilentRefresh } from '@mocks/auth';
import { User } from '@models/user';
import { getRefreshTokenCookie, setRefreshTokenCookie } from '@utils/cookie';
import axios from 'axios';
import { getUser } from './user';

export interface LoginResponse {
  msg: string;
  userId: number;
  accessToken: string;
}

interface LogoutResponse {
  message: string;
}

interface SignUpResponse {
  email: string;
  nickname: string;
  password: string;
<<<<<<< HEAD
=======
}

function loginSuccess({
  access_token: accessToken,
  refresh_token: refreshToken,
  refresh_expires_in: refreshExpiresIn,
}: LoginResponse): void {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  setRefreshTokenCookie(refreshToken, refreshExpiresIn);

  if (refreshExpiresIn - 60000 < 0) {
    setTimeout(silentRefresh, 60000);
    return;
  }

  setTimeout(silentRefresh, refreshExpiresIn - 60000);
>>>>>>> 0b6a8cd7dc9be8d5732ddf1d57130c05dfa141b8
}

// function loginSuccess({ accessToken, refreshToken, refreshExpiresIn }): void {
//   axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

//   setRefreshTokenCookie(refreshToken, refreshExpiresIn);

//   if (refreshExpiresIn - 60000 < 0) {
//     setTimeout(silentRefresh, 60000);
//     return;
//   }

//   setTimeout(silentRefresh, refreshExpiresIn - 60000);
// }

export async function login(data: {
  email: string;
  password: string;
}): Promise<User> {
  try {
    const res = await axios.post<LoginResponse>('/login', data, {
      withCredentials: true,
    });
    console.log(res.headers['set-cookie']);
    console.log(res.data);

    // loginSuccess(res.data);
    // const user = await getUser(mockData.user_id);
    // return user;
    throw Error('dtd');
  } catch (error) {
    /** @todo error handling */
    throw new Error('onLogin Error');
  }
}

export async function silentRefresh(): Promise<User | undefined> {
  const refreshToken = getRefreshTokenCookie();

  if (!refreshToken) {
    return undefined;
  }
  // const res = await axios.post<LoginResponse>('/refresh', {
  //   refresh_token: refreshTokenId,
  // });

  // onLoginSuccess(res.data);
  const mockData = await mockSilentRefresh();

  // loginSuccess(mockData);
  // const user = await getUser(mockData.user_id);

  // return user;
  return undefined;
}

export async function logout() {
  const refreshToken = getRefreshTokenCookie();

  const res = await axios.post<LogoutResponse>('/logout', {
    refresh_token: refreshToken,
  });

  console.log(res.data.message);
}

export async function signUpSubmit({
  email,
  nickname,
  password,
}: SignUpResponse) {
  const data = {
    email,
    name: nickname,
    password,
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  const res = await axios.post('/register', data, { headers });
  return res.data.msg;
}
