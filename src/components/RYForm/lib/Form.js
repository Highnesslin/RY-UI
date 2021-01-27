import React from 'react';
import FieldContext from './FieldContext';
import useForm from './useForm';

export default function Form({ onFinish, onFinishFailed, children }) {
  const [formInstance] = useForm();

  formInstance.setCallbacks({
    onFinish,
    onFinishFailed,
  });

  const onSubmit = e => {
    e.preventDefault();
    formInstance.submit();
  };

  return (
    <FieldContext.Provider value={formInstance}>
      <form onSubmit={onSubmit} className="ry-form">
        {children}
      </form>
    </FieldContext.Provider>
  );
}
