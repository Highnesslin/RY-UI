import React from 'react';
import FieldContext from '../hook/FieldContext';
import useForm from '../hook/useForm';

import './Form.less';

function Form({ onFinish, onFinishFailed, children }, ref) {
  const [formInstance] = useForm();

  React.useImperativeHandle(ref, () => formInstance);

  formInstance.setCallbacks({
    onFinish,
    onFinishFailed,
  });

  const onSubmit = e => {
    e.preventDefault();
    formInstance.submit();
  };

  return (
    <form onSubmit={onSubmit} className="ry-form">
      <FieldContext.Provider value={formInstance}>{children}</FieldContext.Provider>
    </form>
  );
}

export default React.forwardRef(Form);
