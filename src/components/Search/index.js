import React, { useContext, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';

import SearchTextContext from '../../context/SearchTextContext';

import './styles.css';

const Search = () => {
  const { setValue } = useContext(SearchTextContext);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const debouncedHandleChange = useMemo(() => {
    return debounce(handleChange, 300);
  }, [handleChange]);

  useEffect(() => {
    return () => {
      debouncedHandleChange.cancel();
    };
  });

  return (<input className='searchbar' placeholder='Search' onChange={debouncedHandleChange}/>)
}

export default Search;