import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate} from "react-router-dom";
import { Triangle } from 'react-loader-spinner'

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
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
        <Navigate to="/login"></Navigate>
    );
};

export default PrivetRoute;