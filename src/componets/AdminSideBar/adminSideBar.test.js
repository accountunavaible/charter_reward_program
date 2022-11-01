import { render, screen, fireEvent } from '@testing-library/react';
import AdminSideBar from '.';

it('should render ADMIN title and correct className for AdminSideBar component', () => {
  render(<AdminSideBar />);
  const sidebarTitle = screen.getByText(/ADMIN/);
  expect(sidebarTitle).toBeInTheDocument();
  expect(sidebarTitle).toHaveClass('admin_div-sidebar-logo');
});

it('should render Li with logout text, and able to click', () => {
  render(<AdminSideBar memoryUtil={{ removeUser() {} }} navigate={() => console.log('testing')} />);
  const liWithClick = screen.getByText('Log Out');
  expect(liWithClick).toBeInTheDocument();
  expect(fireEvent.click(liWithClick)).toBeTruthy();
});
