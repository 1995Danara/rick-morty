import React , {useState, useEffect, ChangeEvent} from 'react';
import debounce from 'lodash/debounce';

interface SearchInputProps {
    onSearch: (request: string) => void;
}

const SearchInput = ({onSearch} :SearchInputProps) => {
const [request, setRequest] = useState <string> ('');


const debounceSearch = debounce ((query:string) => {
    if(query.length > 2) {
      onSearch(query);
    }
}, 300);

const handleInputChange = (event: ChangeEvent <HTMLInputElement>) => {
  const value = event.target.value
  setRequest(value);
  debounceSearch(value);
};

useEffect(() => {
  return () => {
    debounceSearch.cancel();
  };
}, [debounceSearch]);

return (
  <div>
    <input
      type="text"
      value={request}
      onChange={handleInputChange}
      placeholder="RICK"
    />
  </div>
);
};

export default SearchInput;