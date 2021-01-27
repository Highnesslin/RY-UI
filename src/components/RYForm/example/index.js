import React, { useRef } from 'react';
import { Field, Form, Input } from '..';

export default function RYFormExample() {
  const { current: rules } = useRef({
    phone: { required: true, message: '请输入手机号！' },
    code: { required: true, message: '请输入验证码！' },
  });

  return (
    <Form
      onFinish={state => {
        console.log('success', state);
      }}
      onFinishFailed={err => {
        console.log('err', err);
      }}
    >
      <Field name="phone" rules={rules.phone}>
        <Input placeholder="please input your phone" />
      </Field>
      <Field name="code" rules={rules.code}>
        <Input placeholder="please input your code" />
      </Field>
      <Field>
        <button className="ry-btn">login</button>
      </Field>
    </Form>
  );
}
