import { ReactComponent as Home } from '@assets/home.svg';
import { ReactComponent as MyVideo } from '@assets/my_video.svg';
import { ReactComponent as LikeList } from '@assets/like_list.svg';
import { ReactComponent as Profile } from '@assets/profile.svg';
import { PATH } from '@constants/path';
import { useLocation, useNavigate } from 'react-router-dom';
import BottomUpModal from '@components/bottomUpModal/BottomUpModal';
import { useState } from 'react';
import { useAuth } from '@hooks/useAuth';
import classNames from 'classnames';
import SelectUploadTypeOfFeedModal from '@components/selectUploadTypeOfFeedModal/SelectUploadTypeOfFeedModal';
import ScrollTopButton from '../scrollTopButton/ScrollTopButton';
import { SFooter, SLoginModalContent } from './Footer.style';
import UploadFeedButton from './UploadFeedButton';

interface FooterProps {
  hiddenUpButton?: boolean;
}

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

function Footer({ hiddenUpButton }: FooterProps) {
  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const [selectUploadTypeOfFeedModalVisible, setSelectUploadTypeOfFeedModal] =
    useState<boolean>(false);
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
  function onClickUploadFeedButton() {
    if (!user) {
      setLoginModalVisible(true);
      return;
    }

    setSelectUploadTypeOfFeedModal(true);
  }

  function onCloseLoginModal() {
    setLoginModalVisible(false);
  }

  function onCloseUploadFeedModal() {
    setSelectUploadTypeOfFeedModal(false);
  }

  return (
    <>
      {!hiddenUpButton && <ScrollTopButton />}
      <SFooter>
        {footerItemList.map((fi, idx) => {
          if (fi.key === 'empty') {
            return <div key={fi.key} className="empty" />;
          }
          return (
            <div
              key={fi.key}
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
        <UploadFeedButton onClick={onClickUploadFeedButton} />
      </SFooter>
      {/* 로그인 모달 */}
      <BottomUpModal
        visible={loginModalVisible}
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
      {/* 영상 등록 방식 선택 모달 */}
      <SelectUploadTypeOfFeedModal
        visible={selectUploadTypeOfFeedModalVisible}
        onClose={onCloseUploadFeedModal}
      />
    </>
  );
}

export default Footer;
