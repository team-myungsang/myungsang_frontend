import { ReactComponent as Home } from '@assets/home.svg';
import { ReactComponent as MyVideo } from '@assets/my_video.svg';
import { ReactComponent as LikeList } from '@assets/like_list.svg';
import { ReactComponent as Profile } from '@assets/profile.svg';
import { PATH } from '@constants/path';
import { Link } from 'react-router-dom';
import ScrollTopButton from '../scrollTopButton/ScrollTopButton';
import { SFooter } from './Footer.style';
import AddVideoButton from './AddVideoButton';

const footerItemList = [
  {
    key: PATH.MAIN,
    icon: <Home />,
    value: '홈',
  },
  {
    key: PATH.MY_VIDEO,
    icon: <MyVideo />,
    value: '마이비디오',
  },
  { key: 'empty' },
  {
    key: PATH.LIKE_LIST,
    icon: <LikeList />,
    value: '관심영상',
  },
  {
    key: PATH.PROFILE,
    icon: <Profile />,
    value: '프로필',
  },
];

function Footer() {
  return (
    <>
      <ScrollTopButton />
      <SFooter>
        {footerItemList.map(fi => {
          if (fi.key === 'empty') {
            return <div className="empty" />;
          }
          return (
            <Link to={fi.key}>
              <div className="footerItem">
                {fi.icon}
                {fi.value}
              </div>
            </Link>
          );
        })}
        <AddVideoButton />
      </SFooter>
    </>
  );
}

export default Footer;
