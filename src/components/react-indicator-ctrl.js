import Indicator from 'components/react-indicator';

let instance;

export default class IndicatorCtrl {
  static createInstance(inProps) {
    instance = instance || Indicator.newInstance(inProps);
    return instance;
  }
  static show(){
    instance.component.show();
  }
  static hide(){
    instance.component.hide();
  }
}
