import { render, screen } from '@testing-library/react';
import UserReportList from '.';

it('should render un order list correctly on the screen with correct className', () => {
  render(
    <UserReportList whichToShow={false} transcationList={[]} loadCount={0} monthlyReport={[]} setLoadCount={() => console.log('set')} />
  );
  const ulElement = screen.getByTestId('unorder-list');
  expect(ulElement).toBeInTheDocument();
  expect(ulElement).toHaveClass('App_main-ul');
});
