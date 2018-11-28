import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import UploadProduct from './Components/UploadProduct';
import ConfigStore from './Components/ConfigStore';
import Login from './Components/Login/js/LoginForm';
class App extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    
    const {isAuthen} = this.props;
    if (isAuthen) {
      return (
        <Router>
          <div>
            <Header>This is header !!</Header>
            <Route exact path="/" component={UploadProduct} />
            <Route path="/config" component={ConfigStore} />
          </div>
        </Router>
      );
    } else {
        return (<Login />);
    }
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    isAuthen: state.authenReducer.isAuthen,
  };
}
const mapDispatchToProps = {
  //TextChanged,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
