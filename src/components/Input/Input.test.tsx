import { fireEvent, render, screen } from '@testing-library/react';
import Input from '.';

describe('Tests for Input component', () => {
  it('should contain an input', () => {
    render(<Input name="e-mail" title="E-mail / Username" type="text" />);
    expect(screen.getByLabelText('e-mail')).toBeInTheDocument();
  });

  it('should contain an input title', () => {
    render(<Input name="user" title="E-mail / Username" type="text" />);
    expect(screen.getByText('E-mail / Username')).toBeInTheDocument();
  });

  it('should display a span error', () => {
    render(<Input name="user" title="E-mail / Username" type="text" />);
    const input = screen.getByLabelText('user');
    fireEvent.blur(input);
    expect(screen.getByText('User não encontrado')).toBeInTheDocument();
  });
});
