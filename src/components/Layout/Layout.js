import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className={'container'}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
