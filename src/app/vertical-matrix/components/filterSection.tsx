import { CheckboxComponent } from '@/primitives/checkbox';
import Title from '@/primitives/title';
import FilterSearchComponent from './filterSearchComponent';

interface FilterOption {
  value: string;
  count: number;
}

interface Filter {
  hasSearch: boolean;
  title: string;
  options: FilterOption[];
}

interface FiltersProps {
  filters: Filter[];
}

export const FilterSection: React.FC<FiltersProps> = ({ filters }) => {
  const handleSearch = (query: string) => {
    // Perform search logic here using the query
    console.log(`Searching for: ${query}`);
  };
  return (
    <div>
      {filters.map((filterOption) => (
        <>
          <Title as="h3" text={filterOption.title} />
          {filterOption.hasSearch && <FilterSearchComponent />}
          {filterOption.options.map((option) => (
            <>
              <CheckboxComponent label={`${option.value} (${option.count})`} />
              <br />
            </>
          ))}
          <br />
        </>
      ))}
    </div>
  );
};
