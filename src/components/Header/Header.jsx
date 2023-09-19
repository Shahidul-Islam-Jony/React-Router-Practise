import { NavLink } from "react-router-dom";
// import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="mb-4">
                <NavLink className="mr-7 text-2xl font-semibold text-blue-500" to='/home'>Home</NavLink>
                <NavLink className="mr-7 text-2xl font-semibold text-blue-500" to='/phones'>Phones</NavLink>
                <NavLink className="mr-7 text-2xl font-semibold text-blue-500" to='/about'>About</NavLink>
                <NavLink className="mr-7 text-2xl font-semibold text-blue-500" to='/contact'>Contact</NavLink>
                <NavLink className="mr-7 text-2xl font-semibold text-blue-500" to='/users'>Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;