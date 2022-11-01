function UserReportList({ whichToShow, transcationList, loadCount, monthlyReport, setLoadCount }) {
  return (
    <>
      <ul className="App_main-ul" data-testid='unorder-list'>
        {!whichToShow
          ? transcationList.slice(0, loadCount).map(item => {
              return (
                <li key={item.id}>
                  <p className="App_main-ul_title">{item.title}</p>
                  <p className="App_main-ul_date">{item.date}</p>
                  <p className="App_main-ul_price">{item.price}</p>
                </li>
              );
            })
          : monthlyReport.map(item => {
              return (
                <li key={item.id}>
                  <p className="App_main-ul_title">{item.month}</p>
                  <p className="App_main-ul_price">{item.point}</p>
                </li>
              );
            })}
      </ul>
      {!whichToShow && loadCount < transcationList.length ? (
        <button className="App_main-button" onClick={() => setLoadCount(prev => prev + 3)}>
          Load More
        </button>
      ) : (
        <p
          style={{
            fontSize: '3rem',
            textAlign: 'center'
          }}
        >
          No More Item
        </p>
      )}
    </>
  );
}

export default UserReportList;
