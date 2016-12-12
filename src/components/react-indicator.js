import './style.scss';
import classNames from 'classnames';
import appendToDocument from 'react-append-to-document';
import Spinner from 'react-spinner';
import {Backdrop} from 'react-backdrop';

class Indicator extends React.Component{
  static propTypes = {
    visible:React.PropTypes.bool,
    text:React.PropTypes.string,
    cssClass:React.PropTypes.string
  }

  static defaultProps = {
    visible:false,
    text:'加载中...',
    cssClass:'',
    backdropStyle:{
      opacity:0.5
    }
  }

  constructor(props){
    super(props);
    this.state={
      visible:props.visible
    }
  }


  static newInstance(inProps){
    return appendToDocument(Indicator,inProps,{
      className:'indicator-container'
    });
  }

  componentWillReceiveProps(nextProps){
    this.state({
      visible:nextProps.visible
    })
  }

  show(){
    this.setState({visible:true});
  }
  hide(){
    this.setState({visible:false});
  }

  render(){
    return (
      <div data-visible={this.state.visible} className={classNames('react-indicator',this.props.cssClass)}>
        <div className="react-indicator-wrapper">
          <Spinner cssClass="spin"/>
          <span className="text">{this.props.text}</span>
        </div>
        <Backdrop visible={this.state.visible} style={this.props.backdropStyle}  />
      </div>
    );
  }
}


export default Indicator;
