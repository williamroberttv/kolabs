import { render, screen } from '@testing-library/react';

import Title from '.';

describe('Test for Title component', () => {
  it('Should contain a header', () => {
    render(<Title />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('Should contain a span', () => {
    render(<Title />);
    expect(screen.getByText('Create')).toBeInTheDocument();
  });
});
