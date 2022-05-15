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
}

interface ProfileRequest {
  data: any;
}

interface ProfileResponse {
  nickname: string;
  email: string;
}

interface LikeCntResponse {
  videoId: number;
  userId: number;
}

interface UserProps {
  id: number;
  email: string;
  password: string;
}

interface GetMovieProps {
  movieId: number;
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

export async function getProfile() {
  const headers = {
    'Content-Type': 'application/json',
  };
  // /users/me 로 교체해야함.
  const res = await axios.get<ProfileRequest, any>('/users/1', {
    headers,
  });
  return res.data;
}

export async function submitProfile({ email, nickname }: ProfileResponse) {
  const data = {
    email,
    name: nickname,
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  const res = await axios.post('/', data, { headers });
  return res.data.msg;
}

export async function getMovie({ movieId }: GetMovieProps) {
  const headers = {
    'Content-Type': 'application/json',
  };
  const res = await axios.get(`/videos/${movieId}`, { headers });
  console.log(res.data);

  return res.data;
}

export async function IncreaseLikeCnt({ videoId, userId }: LikeCntResponse) {
  const data = {
    videoId,
    userId,
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  const res = await axios.post('/increaseLikeCnt', data, { headers });
  console.log(res);
}
export async function DecreaseLikeCnt({ videoId, userId }: LikeCntResponse) {
  const data = {
    videoId,
    userId,
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  const res = await axios.post('/DecreaseLikeCnt', data, { headers });
  console.log(res);
}

export async function UserLogout({ id, email, password }: UserProps) {
  const data = {
    id,
    email,
    password,
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  const res = await axios.post('/logout', data, { headers });
  setRequestHeader('');

  console.log(res.data.message);
}
