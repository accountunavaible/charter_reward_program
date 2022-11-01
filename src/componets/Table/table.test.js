import { render, screen } from '@testing-library/react';
import Table from '.';

it('should properly render a table, and have correct className', () => {
  const userList = [{ id: 1, username: 'test', points: 111 }];
  render(<Table usersList={userList} tableHeader={['test', 'test2', 'test3']} />);

  const tableHeader = screen.getByTestId('table-header');
  const table = screen.getByTestId('table');
  expect(tableHeader).toBeInTheDocument();
  expect(table).toBeInTheDocument();
  expect(table).toHaveClass('fl-table');
});
