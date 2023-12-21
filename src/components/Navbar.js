import React, {useState} from 'react'

import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='./Hero'>Home</a></li>
                    <li><a href='./Featured'>Features</a></li>
                    <li><a href='./Footer'>About us</a></li>
                    <li><a href='./Login'>Login</a></li>
                    <li><a href='./Signup'>Signup</a></li>
                </ul>
                </div>

        </div>
    )
}

export default Navbar