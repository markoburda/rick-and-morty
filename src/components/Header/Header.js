import './Header.scss';
import Search from "../Search";

const Header = () => {
    return <div className="Header">
        <Search className='Header__search'/>
    </div>
};

export default Header;