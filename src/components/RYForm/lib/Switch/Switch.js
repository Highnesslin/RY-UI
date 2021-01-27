import React from 'react';

import './Switch.less';

export default function Switch() {
  return (
    <div className="ry-switch">
      <input id="switch-1" type="checkbox" />
      <label htmlFor="switch-1"></label>
    </div>
  );
}
