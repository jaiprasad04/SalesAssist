// import { IoIosSearch } from "react-icons/io";
// import { FaRegUser } from "react-icons/fa";
// import { CiBookmark } from "react-icons/ci";
// import { BiShoppingBag } from "react-icons/bi";

import './index.css'

const Header = () => {
    return (
        <nav className="header-container">
            <div className="header-responsive-container">
                <div className="nav-container">
                    <h1 className="header-name">TANN TRIM</h1>
                    <div className="icons-container">
                        <img src={process.env.PUBLIC_URL + '/assets/search.png'} alt='' className="icon" />
                        <img src={process.env.PUBLIC_URL + '/assets/Frame 52.png'} alt='' className="icon" />
                        <img src={process.env.PUBLIC_URL + '/assets/Frame 53.png'} alt='' className="icon" />
                        <img src={process.env.PUBLIC_URL + '/assets/Frame 54.png'} alt='' className="icon" />
                    </div>
                </div>
                <ul className="header-list">
                    <li className="header-list-item">Bags</li>
                    <li className="header-list-item">Travel</li>
                    <li className="header-list-item">Accesories</li>
                    <li className="header-list-item">Gifting</li>
                    <li className="header-list-item">Jewelery</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header