import { useStateContext } from "../contexts/ContextProvider";
import { Navigate, Outlet } from "react-router-dom";

const GuestLayout = () => {
    const { token } = useStateContext();
    if (token) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <h1>This Is Guest Layout</h1>
            <Outlet />
        </div>
    );
};

export default GuestLayout;
