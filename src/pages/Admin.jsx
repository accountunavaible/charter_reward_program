import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getAllUsersData from '../api/admin.api';
import AdminSideBar from '../componets/AdminSideBar';
import Table from '../componets/Table';
import memoryUtil from '../utils/memory.util';
import '../asset/styles/admin.css';

export default function Admin() {
  const navigate = useNavigate();
  const [usersList, setUserList] = useState([]);

  useEffect(() => {
    const user = memoryUtil.getUser();
    getAllUsersData(user.id).then(data => setUserList(data.users));
  }, []);

  return (
    <div className="admin">
      <div className="admin_div-sidebar">
        <AdminSideBar memoryUtil={memoryUtil} navigate={navigate} />
      </div>
      <div className="admin_div-main">
        <Table usersList={usersList} tableHeader={['User ID', 'UserName', 'Points']} />
      </div>
    </div>
  );
}
