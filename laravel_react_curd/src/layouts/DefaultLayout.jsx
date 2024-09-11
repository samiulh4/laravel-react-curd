import {  Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <div>
            <div>
            <h1>This is DefaultLayout Page !</h1>
            </div>
            <Outlet />
        </div>
        
    )
}

export default DefaultLayout;