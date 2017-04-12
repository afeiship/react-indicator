# react-indicator
> Indicator component for react.


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## properties:
```javascript
static propTypes = {
  className:PropTypes.string,
  visible:PropTypes.bool,
  text:PropTypes.string,
  backdrop:PropTypes.bool,
  backdropStyle:PropTypes.object
};
```

## usage:
```jsx
class App extends React.Component{
  componentWillMount(){
    this._indicator= ReactIndicatorCtrl.createInstance({
      visible:false,
      text:'loading...'
    })
  }
  _click1(){
    ReactIndicatorCtrl.show({text:'loading2...'});
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

```
