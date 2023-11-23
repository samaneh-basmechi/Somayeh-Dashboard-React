import LandingNavbar from './landing-navbar';
import { Outlet } from 'react-router-dom';

const LandingLayout = () => {
  return (
    <>
      <div className="absolute inset-0 flex justify-center items-center dark:bg-gray-800">
        <LandingNavbar/>
        <Outlet/>
      </div>
    </>
  );
};

export default LandingLayout;
