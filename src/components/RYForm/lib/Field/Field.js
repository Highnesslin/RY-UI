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
      <div className="ry-field">
        {this.getControlChildren()}
        {this.props.name && (
          <div className="ry-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon s-ion-icon"
              viewBox="0 0 512 512"
            >
              <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
            </svg>
          </div>
        )}
      </div>
    );
  }
}
