/* eslint-disable no-use-before-define */
import { mockLogin, mockSilentRefresh } from '@mocks/auth';
import { User } from '@models/user';
import { getRefreshTokenCookie, setRefreshTokenCookie } from '@utils/cookie';
import axios from 'axios';
import { getUser } from './user';

export interface LoginResponse {
  user_id: number;
  access_token: string;
  refresh_token: string;
  access_expires_in: number;
  refresh_expires_in: number;
}

interface LogoutResponse {
  message: string;
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
}

export async function login(data: {
  email: string;
  password: string;
}): Promise<User> {
  try {
    // const res = await axios.post<LoginResponse>('/login', data);
    // onLoginSuccess(res.data);
    const mockData = await mockLogin();
    loginSuccess(mockData);
    const user = await getUser(mockData.user_id);
    return user;
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

  loginSuccess(mockData);
  const user = await getUser(mockData.user_id);

  return user;
}

export async function logout() {
  const refreshToken = getRefreshTokenCookie();

  const res = await axios.post<LogoutResponse>('/logout', {
    refresh_token: refreshToken,
  });

  console.log(res.data.message);
}
