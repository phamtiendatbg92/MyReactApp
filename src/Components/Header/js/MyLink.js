import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/MyLink.css';

class MyLink extends React.Component {
    render() {
        return (
            <NavLink to={this.props.to}
                exact
                className='link-style'
                activeClassName='active'>{this.props.children}
            </NavLink>

        );
    }
}

export default MyLink;