import Indicator from 'components/react-indicator';

let instance;

export default class IndicatorCtrl {
  static createInstance(inProps) {
    instance = instance || Indicator.newInstance(inProps);
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
