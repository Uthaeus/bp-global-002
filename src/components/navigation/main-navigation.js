import { NavLink, Link } from "react-router-dom";

function MainNavigation() {

    return (
        <div className="main-navigation">
            <div className="main-navigation-left">
                <Link to='/'>Logo Here</Link>
            </div>

            <div className="main-navigation-right">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>

                <NavLink to='/auth/login'>Login</NavLink>
                <NavLink to='/auth/signup'>Sign Up</NavLink>
            </div>
        </div>
    );
}

export default MainNavigation;