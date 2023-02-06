import React, {useEffect} from 'react'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch } from 'react-redux'
import './menu.css'

export function HeaderMenu() {
    const dispatch = useDispatch();
    //const selector

    //useEffect(() => {})

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div>
            <MenuIcon 
            className='header-menu' 
            fontSize="large"
            style={{color: '#484D45'}}    
        
            onClick={handleClick} />
            <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    width: '20ch',
                }
            }}

            >
                <div className="open-menu">
                <h3>Testing Menu</h3>
                <h3>Top</h3>
                <h3>Communities</h3>
                </div>
            </Menu>

        </div>
)}