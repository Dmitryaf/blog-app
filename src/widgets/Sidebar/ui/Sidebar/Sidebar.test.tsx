import { fireEvent, screen } from '@testing-library/react';
import renderWithTranslation from 'shared/lib/renderWithTranslation/renderWithTranslation';

import Sidebar from './Sidebar';

describe('Sidebar test', () => {
  test('Sidebar', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar collapsed', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    const btnToggle = screen.getByTestId('sidebar-toggle');
    fireEvent.click(btnToggle);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
