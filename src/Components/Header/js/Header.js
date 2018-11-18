import React from 'react';
import MyLink from './MyLink';
import "../css/Header.css";
import { connect } from 'react-redux';
import {MANAGE_PRODUCT} from 'Constants';
import { withRouter } from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (
            <div className='header-mainframe'>
                <MyLink to='/'>{this.props.manageProduct}</MyLink>
                <MyLink to='/config' > Config</MyLink>
            </div>

        );
    }

}

function mapStateToProps(state) {
    console.log(state);
    return {
      manageProduct: state.language.header_catagory[MANAGE_PRODUCT],
    };
  }
  const mapDispatchToProps = {
    //TextChanged,
  };
  
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));