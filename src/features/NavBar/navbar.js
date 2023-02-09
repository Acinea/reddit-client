import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import RocketIcon from '@mui/icons-material/Rocket'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import NewReleasesIcon from '@mui/icons-material/NewReleases'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import './navbar.css'

export function NavBar() {
    const [activeButton, setActiveButton] = useState('');

    const handleClick = (e) => {
        const name  = e.target.id
        console.log(name)
        setActiveButton(name)
        console.log(activeButton)
    }

    return (
        <nav className='nav-container'>
            <ul className='nav-list'>
                <li className='nav-list-item' >
                    <NavLink to='/best' className={activeButton === "1" ? "active-button" : "nav-list-link"}  >
                        <RocketIcon  id="1" className='nav-list-icon' fontSize='large' state="best" onClick={handleClick}/>
                        <span id="1" className='nav-title' onClick={handleClick}>Best</span>
                    </NavLink>
                </li>
                <li className='nav-list-item' >
                    <NavLink to='/hot' className={activeButton === "2" ? "active-button" : "nav-list-link"} >
                        <WhatshotIcon id="2" className='nav-list-icon' fontSize='large' onClick={handleClick}/>
                        <span id="2" className='nav-title' onClick={handleClick}>Hot</span>
                    </NavLink>
                </li>
                <li className='nav-list-item'  >
                    <NavLink to='/new' className={activeButton === "3" ? "active-button" : "nav-list-link"} onClick={handleClick}>
                        <NewReleasesIcon id="3" className='nav-list-icon' fontSize='large' />
                        <span id="3" className='nav-title' onClick={handleClick}>New</span>
                    </NavLink>
                </li>
                <li className='nav-list-item'>
                    <NavLink to='/top' className={activeButton === "4" ? "active-button" : "nav-list-link"} >
                        <LeaderboardIcon id="4" className='nav-list-icon' fontSize='large' onClick={handleClick}/> 
                        <span id="4" className='nav-title' onClick={handleClick}>Top</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}