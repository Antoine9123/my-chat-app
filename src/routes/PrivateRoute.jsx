import {Outlet, Navigate} from 'react-router-dom';


const PrivateRoute = () => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const tokenCookie = cookies.find(cookie => cookie.startsWith('token='));
    
    return tokenCookie ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute