import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Background, Container, Form } from './styles';
// import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Crie sua conta</h2>

        <Input 
          icon={FiUser}
          type="text"
          placeholder="Name"
        />
        <Input 
          type="text"
          placeholder="E-mail"
          icon={FiMail}
        />
        <Input 
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />

        <Button 
          label="Entrar"
        />

        <div className="backToLogin">
        <FiArrowLeft />
          <a to="/">
          Voltar para o Login
          </a>
        </div>

      </Form>

      <Background />
    </Container>
  );
}