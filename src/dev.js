import './dev.scss';

import {ReactIndicator, ReactIndicatorCtrl} from './main';

window.rt = ReactIndicatorCtrl;


class App extends React.Component{
  componentWillMount(){
    this._indicator= ReactIndicatorCtrl.createInstance({
      visible:false,
      text:'loading...'
    })
  }
  _click1(){
    ReactIndicatorCtrl.show({text:'loading1...'});
    setTimeout(function(){
      ReactIndicatorCtrl.hide();
    },1000)
  }

  _click2(){
    ReactIndicatorCtrl.show({text:'backdrop0.01...',backdropStyle:{opacity:0.01}});
    setTimeout(function(){
      ReactIndicatorCtrl.hide();
    },2000)
  }

  _click3(){
    ReactIndicatorCtrl.show({text:'no backdrop...',backdropStyle:{opacity:0.01}});
    setTimeout(function(){
      ReactIndicatorCtrl.hide();
    },1000)
  }

  render(){
    return (
      <div className="hello-indicator">
        <button onClick={this._click1.bind(this)}>show indicator1-normal</button>
        <button onClick={this._click2.bind(this)}>show indicator2-（backdropStyle:0.01）</button>
        <button onClick={this._click3.bind(this)}>show indicator3-（backdrop:false）</button>
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
