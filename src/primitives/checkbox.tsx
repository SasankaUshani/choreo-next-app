import Checkbox from '@mui/material/Checkbox';

interface CheckBoxProps {
  label: React.ReactNode;
  alignRight?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}
export const CheckboxComponent: React.FC<CheckBoxProps> = ({
  label,
  alignRight, //use this to align checkbox with css
  ...props
}) => (
  <>
    <Checkbox />
    {label}
  </>
);

import * as React from 'react';
