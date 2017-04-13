import './style.scss';
import React,{PureComponent} from 'react';
import classNames from 'classnames';
import appendToDocument from 'react-append-to-document';
import ReactSpinner from 'react-spinner';
import ReactVisible from 'react-visible';
import {ReactBackdrop} from 'react-backdrop';
import PropTypes from 'prop-types';

export default class ReactIndicator extends ReactVisible{
  static propTypes = {
    text:PropTypes.string,
    backdrop:PropTypes.bool,
    backdropStyle:PropTypes.object
  };

  static defaultProps = {
    backdrop:true,
    text:null,
    backdropStyle:{
      opacity:0.5
    }
  };

  constructor(props){
    super(props);
    const {backdrop, text,visible, backdropStyle} = props;
    this.state = {
      backdrop, text, backdropStyle,visible,
      hidden:!visible,
      animating:false
    };
  }

  static newInstance(inProps){
    return appendToDocument(ReactIndicator,inProps,{
      className:'indicator-container'
    });
  }

  show(inOptions,inCallback){
    this.setState( Object.assign({...this.props},inOptions,{visible:true}), ()=>{
      super.show(inCallback);
    });
  }

  render(){
    const {className, text, backdrop ,visible,hidden, backdropStyle} = this.state;
    return (
      <div
      hidden ={hidden}
      data-visible={visible}
      onTransitionEnd = {this._onTransitionEnd}
      className={classNames('react-indicator',className)}>
        <div className="react-indicator-wrapper">
          <ReactSpinner className="spin" color="#FFF" width="2px"/>
          {text && <span className="text">{text}</span>}
        </div>
        {backdrop && <ReactBackdrop visible={visible} style={backdropStyle}  />}
      </div>
    );
  }
}
