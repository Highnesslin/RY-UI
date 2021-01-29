import React from 'react';

import './Button.less';

// secondary primary
const BTN_TYPE = ['secondary', 'primary'];
export default function Button({ type, children }) {
  const className = BTN_TYPE.includes(type) ? `ry-form-btn ${type}` : 'ry-form-btn';
  return (
    <div className={className}>
      <p>{children}</p>
    </div>
  );
}
