import logoSrc from '@assets/logo.png';
import { PATH } from '@constants/path';
import { Link } from 'react-router-dom';
import { SNotFoundPage } from './NotFoundPage.style';

function NotFoundPage() {
  return (
    <SNotFoundPage>
      <Link to={PATH.MAIN}>
        <img src={logoSrc} alt="logo" />
      </Link>
      <h1>404</h1>
    </SNotFoundPage>
  );
}

export default NotFoundPage;
