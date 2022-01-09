import { screen, render } from '@testing-library/react';
import Login from '.';

describe('Tests for Login component', () => {
  it('Should contain a Kolabs logo', () => {
    render(<Login />);

    expect(screen.getByAltText('Kolabs Logo')).toBeInTheDocument();
  });

  it('Should contain a Header', () => {
    render(<Login />);

    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('Should contain an input for user', () => {
    render(<Login />);

    expect(screen.getByLabelText('e-mail')).toBeInTheDocument();
  });

  it('Should contain an input for password', () => {
    render(<Login />);

    expect(screen.getByLabelText('senha')).toBeInTheDocument();
  });

  it('Should contain a button', () => {
    render(<Login />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
