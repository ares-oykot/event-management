import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Triangle } from 'react-loader-spinner'
const PrivetRouteContact = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="flex justify-center mt-[30vh]">
            <Triangle
                height="200"
                width="200"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to="/login" state={location.pathname}></Navigate>
    );
};
PrivetRouteContact.propTypes = {
    children: PropTypes.node
}
export default PrivetRouteContact;