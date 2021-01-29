import React from 'react';

import './Button.less';

const BTN_TYPE = ['primary', 'success', 'caution', 'error', 'info'];
export default function Button({ type = '', children }) {
  const className = BTN_TYPE.includes(type) ? `ry-btn ${type}` : 'ry-btn';

  return <button className={className}>{children}</button>;
}
