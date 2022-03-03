import React, { useState } from 'react';

import Header from './components/Header';
import Layout from './components/Layout';
import SearchTextContext from './context/SearchTextContext';

import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="App">
      <SearchTextContext.Provider value={{ value: searchValue, setValue: setSearchValue }}>
        <Header />
        <Layout />
      </SearchTextContext.Provider>
    </div>
  );
}

export default App;
