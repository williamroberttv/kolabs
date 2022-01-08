import { render, screen } from '@testing-library/react';

import Button from '.';

describe('Tests for button component', () => {
  it('Should contain a button', () => {
    render(<Button />);

    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });
});
