import {  Outlet } from "react-router-dom";

const GuestLayout = () => {
    return (
        <div>
            <div>
            <h1>This is GuestLayout Page !</h1>
            </div>
            <Outlet />
        </div>
        
    )
}

export default GuestLayout;