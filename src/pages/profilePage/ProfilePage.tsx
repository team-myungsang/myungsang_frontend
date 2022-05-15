import {
  getProfile,
  submitProfile,
  handleNickname,
  UserLogout,
} from '@apis/auth';
import { ReactComponent as ProfileImg } from '@assets/profile_image.svg';
import { ReactComponent as ProfileEdit } from '@assets/profile_edit.svg';
import CenterPopModal from '@components/centerPopModal/CenterPopModal';
import BottomUpModal from '@components/bottomUpModal/BottomUpModal';
import { SAccountModalContent } from '@components/footer/Footer.style';
import Footer from '@components/footer/Footer';
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import {
  SForm,
  SInputBox,
  SLayout,
  SProfileAccountBox,
  SProfileBox,
} from './ProfilePage style';

interface InputProps {
  value: string;
  title: string;
  setValue: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
}

interface MainProps {
  setInitNickname: Dispatch<SetStateAction<string>>;
}

interface HeaderProps {
  initNickname: string;
}

interface AccountProps {
  setIsCenterModal: Dispatch<SetStateAction<boolean>>;
  setIsBottomModal: Dispatch<SetStateAction<boolean>>;
  form: Object;
  setForm: Dispatch<
    SetStateAction<{
      title: string;
      leftText: string;
      rightText: string;
    }>
  >;
}

function ProfileHeader({ initNickname }: HeaderProps) {
  return (
    <SProfileBox>
      <div>
        <ProfileImg />
        <ProfileEdit />
      </div>
      <div>{`${initNickname}님`}</div>
    </SProfileBox>
  );
}

function MyInput({ value, title, setValue, disabled }: InputProps) {
  const [newValue, setNewValue] = useState(value);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewValue(e.target.value);
  };

  const onBlur = () => setValue(newValue);
  return (
    <SInputBox>
      <label>
        {title}
        <input
          type="text"
          value={newValue}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
        />
        <ProfileEdit />
      </label>
    </SInputBox>
  );
}

function ProfileMain({ setInitNickname }: MainProps) {
  const [logOn, setlogOn] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [isNickname, setIsNickname] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    const emailRegexp =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    setIsEmail(emailRegexp.test(email));
    setIsNickname(nickname.length >= 2);
  }, [nickname, email]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await submitProfile({ email, nickname });
      if (result === true) {
        window.alert('변경완료');
      } else if (result === '이메일 중복') {
        window.alert('이메일 중복발생');
      } else {
        window.alert('닉네임 중복발생');
      }
    } catch (error: any) {
      window.alert(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    const get = async () => {
      const result = await getProfile();
      setNickname(result.name);
      setEmail(result.email);
      setId(result.id);
      setInitNickname(result.name);
      setlogOn(true);
    };
    get();
  }, []);

  const onClick = async () => {
    const res = await handleNickname({ id, nickname });
  };

  return (
    <SForm onSubmit={onSubmit}>
      {logOn && (
        <div>
          <MyInput value={nickname} title="닉네임" setValue={setNickname} />
          <MyInput value={email} title="이메일" setValue={setEmail} disabled />
        </div>
      )}
      <button
        type="submit"
        onClick={onClick}
        disabled={!(isNickname && isEmail)}
      >
        수정
      </button>
    </SForm>
  );
}

function ProfileAccount({
  setIsCenterModal,
  setIsBottomModal,
  setForm,
  form,
}: AccountProps) {
  const onClick = (e: MouseEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    if (value === '로그아웃') {
      setIsCenterModal(true);
      setForm({
        ...form,
        title: '로그아웃 하시겠습니까?',
        leftText: '취소',
        rightText: '확인',
      });
    } else {
      setIsBottomModal(true);
    }
  };
  return (
    <SProfileAccountBox>
      <input type="submit" value="로그아웃" onClick={onClick} />
      <input type="submit" value="계정관리" onClick={onClick} />
    </SProfileAccountBox>
  );
}

function ProfilePage() {
  const [initNickname, setInitNickname] = useState('');
  const [isCenterModal, setIsCenterModal] = useState(false);
  const [isBottomModal, setIsBottomModal] = useState(false);
  const [form, setForm] = useState({
    title: '',
    leftText: '',
    rightText: '',
  });

  const onCloseBottomModal = () => setIsBottomModal(false);
  const handleLogout = async () => {
    console.log('로그아웃');
  };

  return (
    <SLayout>
      {isCenterModal && (
        <CenterPopModal
          form={form}
          setIsCenterModal={setIsCenterModal}
          handleLogout={handleLogout}
        />
      )}
      <ProfileHeader initNickname={initNickname} />
      <ProfileMain setInitNickname={setInitNickname} />
      <ProfileAccount
        setIsCenterModal={setIsCenterModal}
        setIsBottomModal={setIsBottomModal}
        form={form}
        setForm={setForm}
      />
      <Footer hiddenUpButton />
      <BottomUpModal
        content={
          <SAccountModalContent>
            <div className="title">계정관리</div>
            <input type="button" value="회원탈퇴" />
            <input type="button" value="닫기" onClick={onCloseBottomModal} />
          </SAccountModalContent>
        }
        visible={isBottomModal}
      />
    </SLayout>
  );
}

export default ProfilePage;
