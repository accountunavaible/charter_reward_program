function UserHeader({ memoryUtil, handleLogOut, handleChangeReportType, points, whichToShow }) {
  return (
    <header className="App_header" data-testid="user-header">
      <div className="App_header_div-info">
        <span />
        <h1>{memoryUtil.getUser().username} Rewards</h1>
        <span onClick={handleLogOut}>LogOut</span>
      </div>
      <div className="App_header_div-points">
        <div className="points_container">
          <h2>Current Points</h2>
          <div className="points_container_div">{points}</div>
        </div>
      </div>
      <nav className="App_header-nav">
        <span className={`${whichToShow ? '' : 'active'}`} onClick={() => handleChangeReportType('history')}>
          History
        </span>
        <span />
        <span className={`${whichToShow ? 'active' : ''}`} onClick={() => handleChangeReportType('report')}>
          Monthly Report
        </span>
      </nav>
    </header>
  );
}

export default UserHeader;
