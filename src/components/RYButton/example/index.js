import React from 'react';
import Button from '../lib/Button';

export default function Example() {
  const types = ['primary', 'success', 'caution', 'error', 'info'];
  return (
    <div>
      <p>Button</p>
      <hr />
      {types.map(type => (
        <Button key={type} type={type}>
          {type}
        </Button>
      ))}
    </div>
  );
}
