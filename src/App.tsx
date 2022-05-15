import { PATH } from '@constants/path';
import LikeListPage from '@pages/LikeListPage';
import LoginPage from '@pages/loginPage/LoginPage';
import MainPage from '@pages/mainPage/MainPage';
import MyVideoPage from '@pages/myVideoPage/MyVideoPage';
import ProfilePage from '@pages/profilePage/ProfilePage';
import SignUpPage from '@pages/signUpPage/SignUpPage';
import WatchPage from '@pages/watchPage/WatchPage';
import UploadPage from '@pages/uploadPage/UploadPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<MainPage />} />
      <Route path={PATH.LOGIN} element={<LoginPage />} />
      <Route path={PATH.SIGNUP} element={<SignUpPage />} />
      <Route path={`${PATH.WATCH}:movieId`} element={<WatchPage />} />
      <Route path={PATH.LIKE_LIST} element={<LikeListPage />} />
      <Route path={PATH.MY_VIDEO} element={<MyVideoPage />} />
      <Route path={PATH.UPLOAD} element={<UploadPage type="new" />} />
      <Route
        path={`${PATH.UPLOAD}/:movieId`}
        element={<UploadPage type="edit" />}
      />
      <Route path={PATH.PROFILE} element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
