import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../context/auth.context';
import { useAuth } from '../../hooks/auth.hook';



export const Navigation = () => {
    // const {loggedInUser,onLogOut} = useContext(AuthContext);
    const {loggedInUser,onLogOut} = useAuth();
    return (
        <nav>
            {!loggedInUser &&
                <ul>
                    <li><Link to='/auth/login'>login</Link></li>
                    <li><Link to='/auth/register'>register</Link> </li>
                </ul>
            }
            {loggedInUser &&
                <ul>
                    <li><button onClick={onLogOut}>Log Out</button></li>
                </ul>}
        </nav>
    )
}