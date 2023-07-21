import React from 'react'
import logo from '../images/Airplane.svg'
function NavBar() {
    return (
        <div className='nav-bar'>
            <nav className='nav-items'>
                <img src={logo} alt='logo' className='svg-logo'/>
                <h4 className='page-title'>my travel guide</h4>
            </nav>
        </div>
    )
}

export default NavBar