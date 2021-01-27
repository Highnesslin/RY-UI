import { cloneElement, Component } from 'react';
import FieldContext from '../FieldContext';

import './Field.less';

export default class Field extends Component {
  static contextType = FieldContext;
  state = {
    err: '',
  };

  componentDidMount() {
    if (this.props.name) {
      this.unRegistry = this.context.registrySubs(this);
    }
  }
  componentWillUnmount() {
    if (this.unRegistry) {
      this.unRegistry();
    }
  }

  // 处理状态保存
  onStoreChange = () => {
    this.forceUpdate();
  };

  // 处理错误提示
  onError = err => {
    // 新旧必须不相同
    if (err !== this.state.err) {
      // 新旧不能都是没内容的
      if (err || this.state.err) {
        this.setState({ err });
      }
    }
  };

  getControlChildren() {
    const { getFieldValue, setFieldValue } = this.context;

    const { name, children, ...rest } = this.props;
    return name
      ? cloneElement(children, {
          ...rest,
          value: getFieldValue(name) || '',
          onChange: e => {
            setFieldValue(name, e.target.value);
          },
        })
      : cloneElement(children, {
          ...rest,
        });
  }

  render() {
    return (
      <div className="ry-input">
        {this.getControlChildren()}
        {/* <div className="search__icon">
          <ion-icon name="search"></ion-icon>
        </div> */}
      </div>
    );
  }
}
