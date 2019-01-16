import React from 'react'
import {NavLink} from 'react-router-dom'
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
                            <NavLink className='navigation-link' to='/projects/all'> Project List </NavLink>
                        </li>
                        <li className='navigation-item'>
                            <NavLink className='navigation-link' to='/projects/new'> New Project </NavLink>
                        </li>
                        <li className='navigation-item'>
                            <NavLink className='navigation-link' to='/users/all'> User List </NavLink>
                        </li>
                        <li className='navigation-item'>
                            <NavLink className='navigation-link' to='/users/new'> New User </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='navigation__footer'>
                    <a className='navigation-link' onClick={props.onLogout} >Logout</a>
                </div>
            </nav>
        </div>
    )

}

export default NavComponent;