import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UploadProduct from './Components/UploadProduct';
import ConfigStore from './Components/ConfigStore';
class App extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <Router>
            <div>
              <Header>This is header !!</Header>

              <Route exact path="/" component={UploadProduct} />
              <Route path="/config" component={ConfigStore} />
            </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //text: state.myRe.text,
  };
}
const mapDispatchToProps = {
  //TextChanged,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
