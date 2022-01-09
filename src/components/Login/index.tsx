import Input from '../Input';
import { Container, Texture } from './styles';
import logo from '../../assets/kolabslogo.svg';
import Button from '../Button';

function Login() {
  return (
    <>
      <Texture />
      <Container>
        <img src={logo} alt="Kolabs Logo" />
        <h1>Login</h1>
        <Input name="e-mail" title="E-mail / Username" type="text" />
        <Input name="senha" title="Senha" type="password" />
        <Button />
      </Container>
    </>
  );
}

export default Login;
