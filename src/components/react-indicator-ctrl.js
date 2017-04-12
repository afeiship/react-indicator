import ReactIndicator from 'components/react-indicator';

let instance;

export default class ReactIndicatorCtrl {
  static createInstance(inProps) {
    instance = instance || ReactIndicator.newInstance(inProps);
    return instance;
  }
  static show(inOptions){
    instance.component.show(inOptions);
  }
  static hide(){
    instance.component.hide();
  }
  static destroy(){
    instance.destroy();
    instance = null;
  }
}
