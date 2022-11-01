import { render, screen, fireEvent } from '@testing-library/react';
import UserHeader from '.';

it('should render user header properly and correct className', () => {
  render(
    <UserHeader
      memoryUtil={{
        getUser() {
          return { username: 'test' };
        }
      }}
      handleLogOut={() => console.log('logout')}
      handleChangeReportType={() => console.log('handleChangeReportType')}
      points={100}
      whichToShow={false}
    />
  );
  const userHeader = screen.getByTestId('user-header');
  expect(userHeader).toBeInTheDocument();
  expect(userHeader).toHaveClass('App_header');
});

it('should render a h1 element with correct username pass in with rewards', () => {
  render(
    <UserHeader
      memoryUtil={{
        getUser() {
          return { username: 'test' };
        }
      }}
      handleLogOut={() => console.log('logout')}
      handleChangeReportType={() => console.log('handleChangeReportType')}
      points={100}
      whichToShow={false}
    />
  );

  const h1Element = screen.getByText('test Rewards');
  expect(h1Element).toBeInTheDocument();
});

it('should have logout button clickable', () => {
  render(
    <UserHeader
      memoryUtil={{
        getUser() {
          return { username: 'test' };
        }
      }}
      handleLogOut={() => console.log('logout')}
      handleChangeReportType={() => console.log('handleChangeReportType')}
      points={100}
      whichToShow={false}
    />
  );

  const logoutElement = screen.getByText('LogOut');
  expect(logoutElement).toBeInTheDocument();
  expect(fireEvent.click(logoutElement)).toBeTruthy();
});

it('should print out correct points when points are pass in', () => {
  render(
    <UserHeader
      memoryUtil={{
        getUser() {
          return { username: 'test' };
        }
      }}
      handleLogOut={() => console.log('logout')}
      handleChangeReportType={() => console.log('handleChangeReportType')}
      points={100}
      whichToShow={false}
    />
  );

  const pointElement = screen.getByText('100');
  expect(pointElement).toBeInTheDocument();
  expect(pointElement).toHaveClass('points_container_div');
});

it('should display active className on history when whichToShow props set to false', () => {
  render(
    <UserHeader
      memoryUtil={{
        getUser() {
          return { username: 'test' };
        }
      }}
      handleLogOut={() => console.log('logout')}
      handleChangeReportType={() => console.log('handleChangeReportType')}
      points={100}
      whichToShow={false}
    />
  );

  const historySpan = screen.getByText('History');
  expect(historySpan).toBeInTheDocument();
  expect(historySpan).toHaveClass('active');
});

it('should display active className on Monthly Report when whichToShow props set to true', () => {
  render(
    <UserHeader
      memoryUtil={{
        getUser() {
          return { username: 'test' };
        }
      }}
      handleLogOut={() => console.log('logout')}
      handleChangeReportType={() => console.log('handleChangeReportType')}
      points={100}
      whichToShow={true}
    />
  );

  const monthlyReportSpan = screen.getByText('Monthly Report');
  expect(monthlyReportSpan).toBeInTheDocument();
  expect(monthlyReportSpan).toHaveClass('active');
});
