import { useContext } from "react";
import { MyContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(MyContext)
    const location = useLocation()
    console.log(location)

    if(user){
        return children
    }
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;