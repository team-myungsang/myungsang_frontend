import { PATH } from '@constants/path';
import LikeListPage from '@pages/likeListPage/LikeListPage';
import LoginPage from '@pages/loginPage/LoginPage';
import MainPage from '@pages/mainPage/MainPage';
import MyVideoPage from '@pages/MyVideoPage';
import ProfilePage from '@pages/ProfilePage';
import SignUpPage from '@pages/signUpPage/SignUpPage';
import WatchPage from '@pages/WatchPage';
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
      <Route path={PATH.PROFILE} element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
