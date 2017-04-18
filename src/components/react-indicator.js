import './style.scss';
import React,{PureComponent} from 'react';
import classNames from 'classnames';
import appendToDocument from 'react-append-to-document';
import ReactSpinner from 'react-spinner';
import {ReactBackdrop} from 'react-backdrop';
import PropTypes from 'prop-types';

export default class ReactIndicator extends ReactBackdrop{
  static propTypes = {
    zIndex:PropTypes.number,
    text:PropTypes.string,
    backdrop:PropTypes.bool,
    backdropStyle:PropTypes.object
  };

  static defaultProps = {
    zIndex:1000,
    backdrop:true,
    text:null,
    backdropStyle:{
      position:'fixed',
      opacity:0.5,
      zIndex:999
    }
  };

  constructor(props){
    super(props);
    const {backdrop, text, backdropStyle} = props;
    this.state = {
      backdrop, text, backdropStyle,
      visible:false,
      hidden:true,
      animating:false
    };
  }

  static newInstance(inProps){
    return appendToDocument(ReactIndicator,inProps,{
      className:'react-indicator-container'
    });
  }

  show(inOptions,inCallback){
    this.setState( Object.assign({...this.props},inOptions), ()=>{
      super.show(inCallback);
    });
  }

  render(){
    const {zIndex} = this.props;
    const {className, text, backdrop ,visible,hidden, backdropStyle} = this.state;
    return (
      <div
      hidden ={hidden}
      data-visible={visible}
      onTransitionEnd = {this._onTransitionEnd}
      className={classNames('react-indicator',className)}>
        <div className="react-indicator-wrapper" style={{zIndex:zIndex}}>
          <ReactSpinner className="spin" color="#FFF" width="2px"/>
          {text && <span className="text">{text}</span>}
        </div>
        {backdrop && <ReactBackdrop className="react-indicator-backdrop" visible={visible} style={backdropStyle}  />}
      </div>
    );
  }
}
