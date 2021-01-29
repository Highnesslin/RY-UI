import { useRef } from 'react';

class FormStore {
  constructor() {
    this.store = {};
    this.subs = {};
    this.callbacks = {};
  }
  getFieldsValue() {
    return this.store;
  }
  getFieldValue(name) {
    return this.store[name];
  }
  setFieldValue(key, name) {
    Object.assign(this.store, {
      [key]: name,
    });

    // 更新
    this.subs[key].onStoreChange();
  }

  registrySubs(sub) {
    this.subs[sub.props.name] = sub;

    return () => {
      delete this.subs[sub.name];
      delete this.store[sub.name];
    };
  }

  setCallbacks(callbacks) {
    this.callbacks = {
      ...this.callbacks,
      ...callbacks,
    };
  }

  // 校验所有
  validateAll() {
    let err = [];
    // return err;
    Object.values(this.subs).forEach(sub => {
      const errMsg = this.validate(sub);
      if (errMsg) {
        err.push(errMsg);
      }
    });
    return err;
  }

  // 校验单个
  validate(sub) {
    const {
      name,
      rules: { required, message },
    } = sub.props;

    // 是必填项 但是 没有填写
    if (required && !this.store[name]) {
      sub.onError(message);
      return message;
    } else {
      sub.onError();
    }
  }

  submit() {
    const { onFinish, onFinishFailed } = this.callbacks;

    const err = this.validateAll();

    if (err.length === 0) {
      onFinish(this.getFieldsValue());
    } else {
      onFinishFailed(err, this.getFieldsValue());
    }
  }

  getForm() {
    return {
      getFieldsValue: this.getFieldsValue.bind(this),
      getFieldValue: this.getFieldValue.bind(this),
      setFieldValue: this.setFieldValue.bind(this),
      registrySubs: this.registrySubs.bind(this),
      setCallbacks: this.setCallbacks.bind(this),
      submit: this.submit.bind(this),
    };
  }
}

export default function useForm(store) {
  const form = useRef();
  if (!form.current) {
    if (!store) {
      form.current = new FormStore().getForm();
    } else {
      form.current = store;
    }
  }

  return [form.current];
}
