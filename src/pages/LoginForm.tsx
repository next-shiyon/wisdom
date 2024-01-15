import { loginUser } from '../api/user';
import PageInfo from '../components/PageInfo';
import Button from '../components/shared/Button';
import { LoginFormContainer } from '../styles/components/LoginForm.styled';
import googleLogo from '../assets/images/google-logo.png';
import { Flex } from '../styles/Flex.styled';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../api/utils';

export default function LoginForm() {
  const navigate = useNavigate();

  // TODO: 로그인 유저 정보 전역으로 관리하기
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) navigate('/');
  });

  return (
    <LoginFormContainer>
      <PageInfo
        title={'습관 관리 서비스 Wisdom💫'}
        description={'습관을 기록하고 관리함으로써 더 나은 나에게 가까워지기'}
      />
      <Button variant="outline" onClick={() => loginUser()}>
        <Flex $gap={16}>
          <img src={googleLogo} alt="google logo" width={24} height={24} />
          Login with Google Authentication
        </Flex>
      </Button>
    </LoginFormContainer>
  );
}
