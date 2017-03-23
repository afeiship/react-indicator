import './style.scss';
import React from 'react';
import classNames from 'classnames';
import appendToDocument from 'react-append-to-document';
import Spinner from 'react-spinner';
import {ReactBackdrop} from 'react-backdrop';

class Indicator extends React.Component{
  static propTypes = {
    className:React.PropTypes.string,
    visible:React.PropTypes.bool,
    text:React.PropTypes.string,
    backdrop:React.PropTypes.bool,
    backdropStyle:React.PropTypes.object
  }

  static defaultProps = {
    className:'',
    visible:false,
    backdrop:true,
    text:null,
    backdropStyle:{
      opacity:0.5
    }
  }

  constructor(props){
    super(props);
    const {className, visible, backdrop, text, backdropStyle} = props;
    this.state = {
      className, visible, backdrop, text, backdropStyle
    };
  }

  static newInstance(inProps){
    return appendToDocument(Indicator,inProps,{
      className:'indicator-container'
    });
  }

  show(inOptions={}){
    let props = this.props;
    this.setState(
      Object.assign({},props,inOptions,{visible:true})
    );
  }

  hide(){
    this.setState({visible:false});
  }

  render(){
    const {className, text, backdrop ,visible, backdropStyle} = this.state;
    return (
      <div data-visible={visible} className={classNames('react-indicator',className)}>
        <div className="react-indicator-wrapper">
          <Spinner cssClass="spin" color="#FFF" width="2px"/>
          {text && <span className="text">{text}</span>}
        </div>
        {backdrop && <ReactBackdrop visible={visible} style={backdropStyle}  />}
      </div>
    );
  }
}


export default Indicator;
