import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  render(){
    return (
      <div className={classNames('react-spinner',this.props.cssClass)}>
        Hello React!
      </div>
    );
  }
}
