function Table({ usersList, tableHeader }) {
  return (
    <div className="table-wrapper">
      <table className="fl-table" data-testid="table">
        <thead>
          <tr data-testid='table-header'>
            {tableHeader.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {usersList.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
