import React from 'react';
import { demoForm } from '../../store/fixtures';
import { FormBuilder } from './FormBuilder';

export function Builder() {
  return (
    <div>
      <FormBuilder item={demoForm} />
    </div>
  );
}
