import { render, screen } from '@testing-library/react';

import Footer from '.';

describe('Tests for Footer component', () => {
  it('should contain', () => {
    render(<Footer />);

    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });
});
