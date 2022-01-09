import { useEffect, useState } from 'react';
import { Container } from './styles';

interface InputProps {
  name: string;
  title: string;
  type: string;
}

function Input({ name, title, type }:InputProps) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (name === 'user' || 'e-mail') {
      setErrorMessage('User não encontrado');
    }
    if (name === 'senha') {
      setErrorMessage('senha invalida');
    }
  }, [name]);

  return (
    <Container>
      <p>{title}</p>
      <input
        aria-label={name}
        type={type}
        onBlur={() => setError(true)}
      />
      {error && <span>{errorMessage}</span>}
    </Container>
  );
}

export default Input;
