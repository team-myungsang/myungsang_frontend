import { LoginResponse } from '@apis/auth';

const mockLoginData = {
  msg: 'Login Success',
  userId: 1,
  expTime: 12000000,
  accessToken: 'mockAccessToken',
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
