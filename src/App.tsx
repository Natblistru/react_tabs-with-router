import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { useEffect } from 'react';

//
export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/home') {
      navigate('/', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Header />

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
