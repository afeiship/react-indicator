import {Indicator,IndicatorCtrl} from './main';


class App extends React.Component{
  componentWillMount(){
    this._indicator= IndicatorCtrl.createInstance({
      // cssClass:'test',
      visible:false,
      text:null
    })
  }
  _click(){
    IndicatorCtrl.show();
    setTimeout(function(){
      IndicatorCtrl.hide();
    },1000)
  }
  render(){
    return (
      <button onClick={this._click.bind(this)}>show indicator</button>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
