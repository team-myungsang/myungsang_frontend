import dayjs from 'dayjs';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getAccessTokenCookie = () => cookies.get('GGT_AUT');

export const setAccessTokenCookie = (
  accessTokenId: string,
  expiresIn: number,
) => {
  cookies.set('GGT_AUT', accessTokenId, {
    expires: dayjs().add(expiresIn, 'ms').toDate(),
  });
};
