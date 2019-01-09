import React from 'react'
import './NavComponent.css'

const NavComponent = props => {

    return(
        <div className='navbar'>
            <nav className='navigation'>
                <div className='navigation__group'>
                    <div className='navigation__header'>
                        <h1 className='navigation__heading'>Document Manager</h1>
                    </div>
                    <ul className='navigation-list'>
                        <li className='navigation-item'>
                            <a href='#' className='navigation-link'> Project List </a>
                        </li>
                        <li className='navigation-item'>
                            <a href='#' className='navigation-link'> New Project </a>
                        </li>
                        <li className='navigation-item'>
                            <a href='#' className='navigation-link active'> User List </a>
                        </li>
                        <li className='navigation-item'>
                            <a href='#' className='navigation-link'> New User </a>
                        </li>
                    </ul>
                </div>
                <div className='navigation__footer'>
                    <a href='#' className='navigation-link'>Logout</a>
                </div>
            </nav>
        </div>
    )

}

export default NavComponent;