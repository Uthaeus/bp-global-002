import { Outlet } from "react-router";

function AuthLayout() {

    return (
        <div className="auth-layout">
            <Outlet />
        </div>
    );
}

export default AuthLayout;