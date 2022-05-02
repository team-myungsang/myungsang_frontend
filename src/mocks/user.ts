import { User } from '@src/models/user';

export function mockUser(): Promise<User> {
  return new Promise(res => {
    res({
      id: 1,
      email: 'tjdwns4850@gmail.com',
      nickname: 'curlyjun',
    });
  });
}
