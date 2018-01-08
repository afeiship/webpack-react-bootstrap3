import AppBase from 'components/scripts/index';
import React, {Component} from 'react';
import reactLogo from 'images/react_logo.svg';
import snipImg from 'images/Snip20170830_1.png';



export default class Home extends Component {

  static fetchData() {
    return {
      test: 1234,
      name: 'fei'
    }
  } // will be used for server side rendering

  _onClick = e => {
    console.log('update local!');
    AppBase.$.local = {
      ts: Date.now()
    };
  };

  render() {
    console.log('render home!');
    const {test, name} = Home.fetchData();
    return (
      <div className="home-view">
        <h1>Home Page {test} - {name}</h1>
        <button className="btn btn-primary" onClick={this._onClick}>Test button</button>
        <img src={reactLogo} alt=""/>
        <img src={snipImg} alt=""/>
      </div>
    );
  }
}
