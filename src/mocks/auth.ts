import { LoginResponse } from '@apis/auth';

const mockLoginData = {
  user_id: 1,
  access_token: 'mockAccessToken',
  refresh_token: 'mockRefreshToken',
  // 5분
  refresh_expires_in: 60000 * 1,
  access_expires_in: 60000 * 1,
};

export function mockLogin(isSuccess: boolean = true): Promise<LoginResponse> {
  return new Promise((res, rej) => {
    if (!isSuccess) {
      rej(new Error('wrong password'));
    }

    res(mockLoginData);
  });
}

export function mockSilentRefresh(): Promise<LoginResponse> {
  return new Promise(res => {
    res(mockLoginData);
  });
}
