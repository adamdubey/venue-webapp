import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../SideDrawer/SideDrawer';

const Header = () => {
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
                >
                    <MenuIcon />
                </IconButton>

                <SideDrawer />
            
            </Toolbar>
        </AppBar>
    )
}

export default Header;
