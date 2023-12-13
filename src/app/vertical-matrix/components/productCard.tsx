import { BasicButton } from '@/primitives/button';
import { CheckboxComponent } from '@/primitives/checkbox';
import ImageThumbnail from '@/primitives/image-thumbnail';
import Label from '@/primitives/label';
import Title from '@/primitives/title';
import Link from 'next/link';

const sampleProductLabels = [
  { title: 'Applications', value: 'Immunohistochemistry (IHC)' },
  { title: 'Reactivity', value: 'Human (Hu)' },
  { title: 'Conjugate/Tag', value: 'unconjugated' },
  { title: 'Quantity', value: '1 mg' },
];
export const ProductCard: React.FC<{}> = ({ ...props }) => {
  let id = '1';
  return (
    <div>
      ProductCard
      <Link href={`/product-detail/${id}`}>
        <Title as="h1" text="Anti-human CD4 mAb (CD4-1), azide free" />
      </Link>
      <ImageThumbnail
        src="https://media.biocompare.com/m/37/images/anti-woodchuck-ifn-gamma-mab-mt247-purified-17807109-400x300.jpg"
        alt="sample image"
      />
      {sampleProductLabels.map((item) => (
        <>
          <Label title={item.title} value={item.value} />
          <br />
        </>
      ))}
      <BasicButton title="Supplier page" />
      <CheckboxComponent label="Compare Product" alignRight />
    </div>
  );
};
