import React from 'react';

import './Button.less';

export default function Button({ children }) {
  return (
    <div className="btn btn__primary ">
      {/* btn__secondary */}
      <p>{children}</p>
    </div>
  );
}
