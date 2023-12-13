import Label from '@/primitives/label';
import { ProductCard } from './productCard';

export interface MatrixProps {
  content: string;
}

export const VerticalMatrixComponent: React.FC<MatrixProps> = ({
  content,
  ...props
}: MatrixProps) => {
  return (
    <div>
      Vertical Matrix Component
      <Label
        className="custom-label"
        title="Your search returned 6793 cd4 Antibodies across 73 suppliers."
      />
      <ProductCard />
    </div>
  );
};
