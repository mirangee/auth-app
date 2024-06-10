import { useContext } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import { AuthContext } from '../store/auth-context';
import { Alert } from 'react-native';

const LoginScreen = () => {
  // loginHandler로 전달되는 매개값은 3개(email, password, name)지만
  // name은 login에서 사용하지 않기 때문에 email, password만 구조분해할당
  const { authenticate } = useContext(AuthContext);
  const loginHandler = async ({ email, password }) => {
    console.log('loginHandler email: ', email);

    try {
      const token = await login(email, password);
      console.log('token: ', token);
      authenticate(token);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};

export default LoginScreen;
