import { HiMagnifyingGlass } from 'react-icons/hi2';
import { useState } from 'react';
const SearchFilter = ({ filterSpecificFood }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    filterSpecificFood(searchTerm);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="search flex-fill d-flex align-items-center"
    >
      <div className="input-group">
        <input
          value={searchTerm}
          type="text"
          className="form-control rounded-end pe-5 border-success"
          placeholder="جستجوی فست فود"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <HiMagnifyingGlass className="position-absolute top-50 translate-middle-y me-3 text-muted" />
      </div>
    </form>
  );
};

export default SearchFilter;
