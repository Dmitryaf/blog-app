import { fireEvent, screen } from '@testing-library/react';
import componentRender from 'shared/lib/componentRender/componentRender';

import Sidebar from './Sidebar';

describe('Sidebar test', () => {
  test('Sidebar', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar collapsed', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    const btnToggle = screen.getByTestId('sidebar-toggle');
    fireEvent.click(btnToggle);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
