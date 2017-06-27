import ReactIndicator from 'components/react-indicator';

let instance;

export default class ReactIndicatorCtrl {

  static createInstance(inProps) {
    instance = instance || ReactIndicator.newInstance(inProps);
    return instance;
  }
  static show(inOptions){
    return instance.component.show(inOptions);
  }
  static hide(){
    return instance.component.hide();
  }
  static destroy(){
    instance.destroy();
    instance = null;
  }

}
