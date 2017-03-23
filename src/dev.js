import {Indicator,IndicatorCtrl} from './main';


class App extends React.Component{
  componentWillMount(){
    this._indicator= IndicatorCtrl.createInstance({
      visible:false,
      text:'loading...'
    })
  }
  _click1(){
    IndicatorCtrl.show({text:'loading2...'});
    setTimeout(function(){
      IndicatorCtrl.hide();
    },1000)
  }

  _click2(){
    IndicatorCtrl.show({text:'测试中...',backdropStyle:{opacity:0.01}});
    setTimeout(function(){
      IndicatorCtrl.hide();
    },2000)
  }

  render(){
    return (
      <div className="hello-indicator">
        <button onClick={this._click1.bind(this)}>show indicator1</button>
        <button onClick={this._click2.bind(this)}>show indicator2</button>
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
