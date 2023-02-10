import { NavLink } from 'react-router-dom';
import RocketIcon from '@mui/icons-material/Rocket'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import NewReleasesIcon from '@mui/icons-material/NewReleases'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import './navbar.css'

export function NavBar() {

    return (
        <nav className='nav-container'>
            <ul className='nav-list'>
                <li className='nav-list-item' >
                    <NavLink to='/best' className={ ({isActive}) => isActive ? "active-button" : "nav-list-link"}  >
                        <RocketIcon className='nav-list-icon' fontSize='large' />
                        <span className='nav-title'>Best</span>
                    </NavLink>
                </li>
                <li className='nav-list-item' >
                    <NavLink to='/hot' className={ ({isActive}) => isActive ? "active-button" : "nav-list-link"} >
                        <WhatshotIcon className='nav-list-icon' fontSize='large' />
                        <span className='nav-title' >Hot</span>
                    </NavLink>
                </li>
                <li className='nav-list-item'  >
                    <NavLink to='/new' className={ ({isActive}) => isActive ? "active-button" : "nav-list-link"} >
                        <NewReleasesIcon id="3" className='nav-list-icon' fontSize='large' />
                        <span className='nav-title'>New</span>
                    </NavLink>
                </li>
                <li className='nav-list-item'>
                    <NavLink to='/top' className={ ({isActive}) => isActive ? "active-button" : "nav-list-link"} >
                        <LeaderboardIcon className='nav-list-icon' fontSize='large' /> 
                        <span className='nav-title'>Top</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}