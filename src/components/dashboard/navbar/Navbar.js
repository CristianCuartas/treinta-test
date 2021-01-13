import React, { useState } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse, Button, NavLink} from "reactstrap";
import { useHistory } from 'react-router-dom';
import {useAuth} from './../../../contexts/AuthContext';
import logoNav from "./../../../assets/img/logoNav.png"
import navIconInfo from "./../../../assets/img/navIconInfo.png"
import navIconLogout from "./../../../assets/img/navIconLogout.png"
import navIconSettings from "./../../../assets/img/navIconSettings.png"
import navIconMap from "./../../../assets/img/navIconMap.png"


const NavbarComponent = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();
    const {logout} = useAuth();

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = async () => {
        setError('')
        try {
            await logout();
            history.push('/login')
        } catch (error) {
            setError('Failed to log out')
        }
    }

    const styleIconsNavItem = {
        width:'15px',
        height:'15px'
    }

    return (
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src={logoNav} alt="" style={{ height:'60px'}}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav 
           className="mr-auto"
           navbar
           >
            <NavItem>           
                <NavLink href="/business-map">
                <img src={navIconMap} alt={"icon-nav-item-map"} style={styleIconsNavItem}/> Business Map
                </NavLink>
            </NavItem>
            <NavItem>           
                <NavLink href="/about-treinta">
                <img src={navIconInfo} alt={"icon-nav-item-info"} style={styleIconsNavItem}/> About Treinta
                </NavLink>
            </NavItem>
            <NavItem>           
                <NavLink href="/profile">
                <img src={navIconSettings} alt={"icon-nav-item-settings"} style={styleIconsNavItem}/> Profile settings
                </NavLink>
            </NavItem>
            <NavItem>
                <Button color="link" onClick={handleLogout}>
                <img src={navIconLogout} alt={"icon-nav-item-logout"} style={styleIconsNavItem}/> Log out 
                </Button>
            </NavItem>        
          </Nav>
        </Collapse>
      </Navbar>    
    )
}

export default NavbarComponent;