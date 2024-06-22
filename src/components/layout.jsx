import { Outlet, Link } from 'react-router-dom';
import { Menu } from 'antd';

export default function Layout() {
  const pageList = [
    {
      label: <Link to="/changeLog">Change Log</Link>,
      key: 'blog'
    },
    {
      label: <Link to="/lists">Lists</Link>,
      key: 'lists'
    },
    {
      label: <Link to="/full">Full</Link>,
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
