import React, { Component } from 'react';
import { RYField, RYForm, RYInput, RYFormButton, RYSwitch } from '..';

export default class classComp extends Component {
  rules = {
    phone: { required: true, message: '请输入手机号！' },
    code: { required: true, message: '请输入验证码！' },
  };
  formRef = React.createRef();

  componentDidMount() {
    this.formRef.current.setFieldValue('phone', '17866673125');
  }

  onFinish = state => {
    console.log('success', state);
  };

  onFinishFailed = err => {
    console.log('err', err);
  };

  render() {
    return (
      <RYForm ref={this.formRef} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
        <RYField name="phone" rules={this.rules.phone}>
          <RYInput placeholder="please input your phone" />
        </RYField>
        <RYField name="code" rules={this.rules.code}>
          <RYInput placeholder="please input your code" />
        </RYField>
        <RYField>
          <RYSwitch />
        </RYField>
        <RYField>
          <RYFormButton type="primary">login</RYFormButton>
        </RYField>
      </RYForm>
    );
  }
}
