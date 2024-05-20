import "./Header.css"
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";
import Home from "./Home";
import { useState } from "react";
import Signup from "./Signup";

const Header = () => {
    const [visibleSingup, setVisibleSingup] = useState(false);
    const handelVisibleSign = () => {
        setVisibleSingup(!visibleSingup);
    }

    return (
        <>
            <nav className="navbar bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand bName">ServiceIT</a>
                    <div className="headerRight">
                        <form className="d-flex fCon" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <FaSearch />
                        </form>
                        <a onClick={handelVisibleSign} className="signin">SingIn</a>
                    </div>
                    {visibleSingup && <Signup handelVisibleSign={handelVisibleSign} />}
                </div>
            </nav>

        </>
    )
}

export default Header