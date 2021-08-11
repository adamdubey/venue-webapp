import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../SideDrawer/SideDrawer';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = (value) => {
        setDrawerOpen(value)
    }

    return (
            <AppBar
            position="fixed"
            style={{
                backgroundColor: '#2F2F2F',
                boxShadow: 'none',
                padding: '10px 0px'
            }}
        >
            <Toolbar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">Venue</div>
                    <div className="header_logo_title">Live Entertainment</div>
                </div>

                <IconButton
                    aria-label="Menu"
                    color="inherit"
                    onClick={()=> toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>

                <SideDrawer
                    open={drawerOpen}
                    onClose={(value)=> toggleDrawer(value)} 
                />
            
            </Toolbar>
        </AppBar>
    )
}

export default Header;
