import { Outlet, NavLink } from 'react-router-dom';
import { Menu } from 'antd';

export default function Layout() {
  const pageList = [
    {
      label: <NavLink to="/">Change Log</NavLink>,
      key: 'blog'
    },
    {
      label: <NavLink to="/lists">Lists</NavLink>,
      key: 'lists'
    },
    {
      label: <NavLink to="/full">Full</NavLink>,
      key: 'full'
    }
  ];

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <Menu mode="horizontal" items={pageList} />
      </div>

      <Outlet />
    </>
  );
}
