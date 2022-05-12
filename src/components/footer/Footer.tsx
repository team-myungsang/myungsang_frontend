import { ReactComponent as Home } from '@assets/home.svg';
import { ReactComponent as MyVideo } from '@assets/my_video.svg';
import { ReactComponent as LikeList } from '@assets/like_list.svg';
import { ReactComponent as Profile } from '@assets/profile.svg';
import { PATH } from '@constants/path';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BottomUpModal from '@components/bottomUpModal/BottomUpModal';
import { useState } from 'react';
import { useAuth } from '@hooks/useAuth';
import classNames from 'classnames';
import ScrollTopButton from '../scrollTopButton/ScrollTopButton';
import { SFooter, SLoginModalContent } from './Footer.style';
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
  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  function onClickFooterItem(to: string) {
    if (to !== PATH.MAIN && !user) {
      setLoginModalVisible(true);
      return;
    }
    navigate(to);
  }

  function onCloseLoginModal() {
    setLoginModalVisible(false);
  }

  return (
    <>
      <ScrollTopButton />
      <SFooter>
        {footerItemList.map(fi => {
          if (fi.key === 'empty') {
            return <div className="empty" />;
          }
          return (
            <div
              onClick={() => onClickFooterItem(fi.key)}
              role="button"
              tabIndex={0}
            >
              <div
                className={classNames('footerItem', {
                  selected: location.pathname === fi.key,
                })}
              >
                {fi.icon}
                {fi.value}
              </div>
            </div>
          );
        })}
        <AddVideoButton />
      </SFooter>
      <BottomUpModal
        visible={loginModalVisible}
        onClose={onCloseLoginModal}
        content={
          <SLoginModalContent>
            <div className="desc">로그인 후 이용 가능합니다.</div>
            <button
              className="loginButton"
              type="button"
              onClick={() => {
                navigate(PATH.LOGIN);
              }}
            >
              로그인하기
            </button>
            <button
              className="closeButton"
              type="button"
              onClick={onCloseLoginModal}
            >
              닫기
            </button>
          </SLoginModalContent>
        }
      />
    </>
  );
}

export default Footer;
