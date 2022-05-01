import dayjs from 'dayjs';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getRefreshTokenCookie = () => cookies.get('GGT_AUT');

export const setRefreshTokenCookie = (
  refreshTokenId: string,
  expiresIn: number,
) => {
  cookies.set('GGT_AUT', refreshTokenId, {
    expires: dayjs().add(expiresIn, 'ms').toDate(),
  });
};
