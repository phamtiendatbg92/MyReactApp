import React from 'react';
import MyLink from './MyLink';
import "../css/Header.css";
class Header extends React.Component {
    render() {
        return (
            <div className='header-mainframe'>
                <MyLink to='/'>Manage Product </MyLink>
                <MyLink to='/config' > Config</MyLink>
            </div>

        );
    }

}

export default Header;