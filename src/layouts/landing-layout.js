import LandingNavbar from '../shared/landing-navbar';
import { Outlet } from 'react-router-dom';

const LandingLayout = () => {
  return (
    <>
      <div className="absolute inset-0 flex justify-center items-center">
        <LandingNavbar/>
        <Outlet/>
      </div>
    </>
  );
};

export default LandingLayout;
