import React from 'react';
import './SortDropdown.css';
import { useDataContext } from '../ContextApi/DataContext';

const SortDropdown = () => {
    const {setSort} = useDataContext();
    const onSortChange =(e)=>{
        setSort(e.target.value);
    }
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort">Sort:</label>
      <select id="sort" name='sort' onChange={onSortChange}>
        <option value="">Select</option>
        <option value="rating">Sort by Rating</option>
        <option value="title">Sort by Title</option>
      </select>
    </div>
  );
};

export default SortDropdown;
