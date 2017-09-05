import 'styles/index';
import reactLogo from 'images/react_logo.svg';
import snipImg from 'images/Snip20170830_1.png';

export default class extends React.Component {

  _onClick = e => {
    console.log('img!');
  };

  _onClick2 = e => {
    console.log('from bootstrap 3.3.7!');
  };

  _onClick3 = e => {
    console.log('We are customized by afei');
  };

  render() {
    return <div className="app">
      <h1>Hello World Fei!</h1>
      <p>Foo to the bar</p>
      <button type="button" className="btn btn-primary" onClick={this._onClick2}>Success!!!</button>
      <button type="button" className="btn btn-success" onClick={this._onClick3}>Success!!!</button>
      <img src={reactLogo} onClick={this._onClick}/>
      <p className="tc">
        <img src={snipImg} alt=""/>
      </p>
    </div>;
  }
};