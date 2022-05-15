/* eslint-disable no-use-before-define */
import { User } from '@models/user';
import { getAccessTokenCookie, setAccessTokenCookie } from '@utils/cookie';
import axios from 'axios';
import { getMe, getUser } from './user';

export interface LoginResponse {
  msg: string;
  userId: number;
  expTime: number;
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
  movieId: string | undefined;
}

interface HandelNicknameProps {
  id: number;
  nickname: string;
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
function setRequestHeader(accessToken: string): void {
  axios.defaults.headers = { accessToken: `${accessToken}` } as any;
}

export async function login(data: {
  email: string;
  password: string;
}): Promise<User> {
  try {
    const res = await axios.post<LoginResponse>('/login', data);

    setRequestHeader(res.data.accessToken);
    setAccessTokenCookie(res.data.accessToken, res.data.expTime);
    const user = await getUser(res.data.userId);
    return user;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message);
    }
    throw new Error('onLogin Error');
  }
}

export async function checkAccessToken(): Promise<User | undefined> {
  const accessToken = getAccessTokenCookie();

  if (!accessToken) {
    return undefined;
  }

  setRequestHeader(accessToken);

  const user = await getMe();

  return user;
}

export async function logout() {
  const refreshToken = getAccessTokenCookie();

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
  const res = await axios.get<ProfileRequest, any>('/users/me', {
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
  const res = await axios.post('/decreaseLikeCnt', data, { headers });
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

export async function handleNickname({ id, nickname }: HandelNicknameProps) {
  const data = {
    id,
    name: nickname,
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  const res = await axios.post('/updateName', data, { headers });
  console.log(res);
}
