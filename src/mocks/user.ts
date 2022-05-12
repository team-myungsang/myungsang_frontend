import imgPath from '@mocks/assets/tmp_avatar.png';
import { User } from '@models/user';

export function mockUser(): Promise<User> {
  return new Promise(res => {
    res({
      id: 1,
      email: 'tjdwns4850@gmail.com',
      nickname: 'curlyjun',
      file: {
        id: 1,
        name: 'tmp_avatar.png',
        path: imgPath,
        extension: 'jpg',
        fullPath: imgPath,
      },
    });
  });
}

export const feedUser01: User = {
  id: 1,
  email: 'user1@gmail.com',
  nickname: '시계에 진심인 사람',
  file: {
    id: 1,
    name: 'tmp_avatar.png',
    path: imgPath,
    extension: 'jpg',
    fullPath: imgPath,
  },
};
