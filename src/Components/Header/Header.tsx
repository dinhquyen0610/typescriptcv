import "./Header.scss"
import { useLocation, Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

function Header() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/")
    return (
        <header className="header">
            <ul className="nav__list">
                <li className={splitLocation[1] === "" ? "nav__item nav__item--primary" : "nav__item"}>
                    <Link to="/"><HomeIcon/>Giới thiệu</Link>
                </li>
                <li className={splitLocation[1] === "Skill" ? "nav__item nav__item--primary" : "nav__item"}>
                    <Link to="/Skill"><i className="fa fa-cogs"></i>Kỹ năng</Link>
                </li>
                <li className={splitLocation[1] === "CareerGoals" ? "nav__item nav__item--primary" : "nav__item"}>
                    <Link to="/CareerGoals">Mục tiêu nghề nghiệp</Link>
                </li>
                <li className={splitLocation[1] === "ChangeInfo" ? "nav__item nav__item--primary" : "nav__item"}>
                    <Link to="/ChangeInfo">Thay đổi thông tin</Link>
                </li>
            </ul>
            <div className="menu"><MenuIcon />
                <ul className="menu__list">
                    <li className={splitLocation[1] === "" ? "menu__item menu__item--selection" : "menu__item"}>
                        <Link to="/">Giới thiệu</Link>
                    </li>
                    <li className={splitLocation[1] === "Skill" ? "menu__item menu__item--selection" : "menu__item"}>
                        <Link to="/Skill">Kỹ năng</Link>
                    </li>
                    <li className={splitLocation[1] === "CareerGoals" ? "menu__item menu__item--selection" : "menu__item"}>
                        <Link to="/CareerGoals" >Mục tiêu nghề nghiệp</Link>
                    </li>
                    
                </ul>
            </div>


        </header>
    )
}
export default Header;