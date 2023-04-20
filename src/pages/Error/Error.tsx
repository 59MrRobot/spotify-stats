import React, { useEffect, useState } from 'react'
import './Error.scss';
import { useLocation, useNavigate, useRouteError } from 'react-router-dom';

export const Error: React.FC = React.memo(
  () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);
    const error: any = useRouteError();

    useEffect(() => {
      const isAccessToken = location.pathname.indexOf("access_token") >= 0;

      if (isAccessToken) {
        let token = window.localStorage.getItem("token");
      
        if (!token && isAccessToken) {
          token = location.pathname.split("&").find(elem => elem.startsWith("access_token"))!.split("=")[1];
  
          window.localStorage.setItem("token", token);
          navigate("/");
        }
      } else {
        setShowError(true);
      }

    }, [location.pathname, navigate])

    return (
      <div className="error">
        <div className="error__wrapper">
          <h1>Oops!</h1>

          <p>Sorry, an unexpected error has occurred.</p>
          
          <p>
            <i>{error.statusText || error.message}</i>
          </p>

          <p className="error__link" onClick={() => navigate('/')}>
            Go back home.
          </p>
        </div>
      </div>
    )
  }
);