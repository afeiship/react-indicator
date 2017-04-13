import ReactIndicator from 'components/react-indicator';

let instance;

export default class ReactIndicatorCtrl {
  static createInstance(inProps) {
    instance = instance || ReactIndicator.newInstance(inProps);
    return instance;
  }
  static show(inOptions,inCallback){
    instance.component.show(inOptions,inCallback);
  }
  static hide(inCallback){
    instance.component.hide(inCallback);
  }
  static destroy(){
    instance.destroy();
    instance = null;
  }
}
