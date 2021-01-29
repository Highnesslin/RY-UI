import React, { useCallback, useRef } from 'react';
import { RYField, RYForm, RYInput, RYFormButton, RYSwitch } from '..';

export default function RYFormExample() {
  const { current: rules } = useRef({
    phone: { required: true, message: '请输入手机号！' },
    code: { required: true, message: '请输入验证码！' },
  });

  const onFinish = useCallback(state => {
    console.log('success', state);
  }, []);

  const onFinishFailed = useCallback(err => {
    console.log('err', err);
  }, []);

  return (
    <RYForm onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
        <RYFormButton type="secondary">login</RYFormButton>
      </RYField>
    </RYForm>
  );
}
