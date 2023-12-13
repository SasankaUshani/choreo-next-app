// components/Search.tsx
import React, { ChangeEvent } from 'react';

interface SearchResult {
  id: number;
  name: string;
}

interface SearchProps {
  onSearch: (results: SearchResult[]) => void;
}

const FilterSearchComponent: React.FC<{}> = () => {
  //   const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      //   const response = await fetch(`/api/search?query=${searchQuery}`);
      //   const results = await response.json();
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        // value={searchQuery}
        // onChange={handleInputChange}
      />
    </div>
  );
};

export default FilterSearchComponent;
