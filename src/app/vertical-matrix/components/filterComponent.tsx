import Label from '@/primitives/label';
import { ProductCard } from './productCard';
import { FilterSection } from './filterSection';

const filters = [
  {
    hasSearch: true,
    title: 'Citations/ Reviews',
    options: [
      {
        value: 'Products with Citations',
        count: 1065,
      },
      {
        value: 'Products with Figures',
        count: 8,
      },
      {
        value: 'Products with Reviews',
        count: 147,
      },
    ],
  },
  {
    hasSearch: false,
    title: 'Size/ Quantity',
    options: [
      {
        value: 'Trial Size',
        count: 41,
      },
    ],
  },
  {
    hasSearch: false,
    title: 'Antibody Type',
    options: [
      {
        value: 'Biosimilar Antibody',
        count: 52,
      },
      {
        value: 'Primary Antibody',
        count: 4477,
      },
      {
        value: 'Secondary Antibody',
        count: 50,
      },
      {
        value: 'Isotype Control',
        count: 5,
      },
    ],
  },
];
export const FilterComponent: React.FC<{}> = ({ ...props }) => {
  return (
    <div>
      FilterComponent
      <FilterSection filters={filters} />
    </div>
  );
};
