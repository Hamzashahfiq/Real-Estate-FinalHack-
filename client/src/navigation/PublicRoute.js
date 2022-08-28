import {
    Navigate,
    Outlet,
} from 'react-router-dom';

const PublicRoute = ({
    isAllowed,
    redirectPath = '/addPropertyInput',
    children,
}) => {
    if (isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default PublicRoute;