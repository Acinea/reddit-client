import logo from '../../reddit-logo.png';
import { useLocation } from 'react-router-dom';
import { Link} from 'react-router-dom';
import './header.css';

export function Header() {
    return (
        <div className="header-container">
            <Link to='/' className='header-link' >
                <img src={logo} alt="Reddit Logo" className="header-logo" />
                <h1 className="header-title">Kenne<span className="header-ddit">-ddit</span></h1>
            </Link>
        </div>
    )
}