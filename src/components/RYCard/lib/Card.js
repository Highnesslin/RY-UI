import React from 'react';

import './Card.less';

export default function Card({ className, children }) {
  const cn = className ? `ry-card ${className}` : 'ry-card';

  return <div className={cn}>{children}</div>;
}
