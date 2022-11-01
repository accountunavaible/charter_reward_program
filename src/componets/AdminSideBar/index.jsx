function AdminSideBar({ memoryUtil, navigate }) {
  return (
    <>
      <div className="admin_div-sidebar-logo">ADMIN</div>
      <ul className="admin_div-sidebar-nav">
        <li
          onClick={() => {
            memoryUtil.removeUser();
            // alert('bye bye');
            navigate('/login');
          }}
        >
          Log Out
        </li>
      </ul>
    </>
  );
}

export default AdminSideBar;
