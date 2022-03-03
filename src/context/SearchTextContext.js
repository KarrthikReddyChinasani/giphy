import React from 'react';

const SearchTextContext = React.createContext({
  value: "",
  setValue: () => {}
});

export default SearchTextContext;