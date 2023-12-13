import { Button } from '@mui/material';

interface ButtonProps {
  title: React.ReactNode;
}
export const BasicButton: React.FC<ButtonProps> = ({ title, ...props }) => (
  <Button variant="contained">{title}</Button>
);
