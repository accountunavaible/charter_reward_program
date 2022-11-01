import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserHeader from '../componets/UserHeader';
import UserReportList from '../componets/UserReportList';
import memoryUtil from '../utils/memory.util';

export default function User() {
  const navigate = useNavigate();
  const [transcationList, setTranscationList] = useState([]);
  const [whichToShow, setWhichToShow] = useState(false);
  const [monthlyReport, setMonthlyReport] = useState([]);
  const [loadCount, setLoadCount] = useState(3);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const user = memoryUtil.getUser();
    fetch(`http://127.0.0.1:3001/user/${user.id}`)
      .then(res => res.json())
      .then(data => {
        setMonthlyReport(data.monthlyReport);
        setTranscationList(data.transcation);
        setPoints(data.totalPoints);
      });
  }, []);

  const handleLogOut = () => {
    memoryUtil.removeUser();
    alert('bye bye');
    navigate('/login');
  };

  const handleChangeReportType = type => {
    if (type === 'history') {
      setWhichToShow(false);
    } else {
      setLoadCount(3); // if you still want full list when coming back, remove this
      setWhichToShow(true);
    }
  };

  return (
    <div className="App">
      <UserHeader
        memoryUtil={memoryUtil}
        handleLogOut={handleLogOut}
        handleChangeReportType={handleChangeReportType}
        points={points}
        whichToShow={whichToShow}
      />
      <main className="App_main">
        <UserReportList
          whichToShow={whichToShow}
          transcationList={transcationList}
          loadCount={loadCount}
          monthlyReport={monthlyReport}
          setLoadCount={setLoadCount}
        />
      </main>
    </div>
  );
}
