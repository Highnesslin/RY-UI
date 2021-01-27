import React, { useRef } from 'react';
import { RYField, RYForm, RYInput, RYButton, RYSwitch } from '..';

export default function RYFormExample() {
  const { current: rules } = useRef({
    phone: { required: true, message: '请输入手机号！' },
    code: { required: true, message: '请输入验证码！' },
  });

  return (
    <RYForm
      onFinish={state => {
        console.log('success', state);
      }}
      onFinishFailed={err => {
        console.log('err', err);
      }}
    >
      <RYField name="phone" rules={rules.phone}>
        <RYInput placeholder="please input your phone" />
      </RYField>
      <RYField name="code" rules={rules.code}>
        <RYInput placeholder="please input your code" />
      </RYField>
      <RYField>
        <RYSwitch />
      </RYField>
      <RYField>
        <RYButton>login</RYButton>
      </RYField>
    </RYForm>
  );
}
