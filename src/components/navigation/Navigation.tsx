import React from 'react'
import { Link } from 'react-router-dom';
type Props = {
    loggedInUser: string | null;
    onLogOut: ()=>void;
}

export const Navigation = (props: Props) => {
    const { loggedInUser, onLogOut } = props;
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