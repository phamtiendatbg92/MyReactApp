import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {TextChanged} from './Actions/myAction';
let x = 1;
class App extends Component {
  
  constructor(props){
    super(props);
    this.props = props;
  }
  onBtnClick(){
    console.log("hello");
    let str = "hello_ " + x;
    x ++;
    this.props.TextChanged(str.toString());
  }
  render() {
    console.log(this.props.text);
    return (
      <div>
        <input type="text"/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
      text: state.myRe.text,
  };
}
const mapDispatchToProps = {
  TextChanged,
 };


export default connect(mapStateToProps, {TextChanged})(App);
