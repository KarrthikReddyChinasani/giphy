import React, { useEffect, useState } from 'react';
import Search from '../Search';
import ToggleCheck from '../Toggle';
import './styles.css';

const Header = () => {
  const [theme, setTheme] = useState("light");

  const onThemeChange = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.style.setProperty('--background-color', '#000000');
      document.documentElement.style.setProperty('--text-color', '#FFFFFF');
      document.documentElement.style.setProperty('--header-color', '#333333');
      document.documentElement.style.setProperty('--search-bar-color', '#666666');
      document.documentElement.style.setProperty('--monochrome-contrast', '#FFFFFF');
      document.documentElement.style.setProperty('--shadow', '255, 255, 255');
    }
    if(theme === "light") {
      document.documentElement.style.setProperty('--background-color', '#FFFFFF');
      document.documentElement.style.setProperty('--text-color', '#000000');
      document.documentElement.style.setProperty('--header-color', '#999999');
      document.documentElement.style.setProperty('--search-bar-color', '#e6e6e6');
      document.documentElement.style.setProperty('--monochrome-contrast', '#000000');
      document.documentElement.style.setProperty('--shadow', '0, 0, 0');
    }
  }, [theme])

  return (
    <div className='header'>
      <div className='left'></div>
      <div className='center'>
        <Search />
      </div>
      <div className='right'>
        <ToggleCheck onChange={onThemeChange} name="theme" value={theme} />
      </div>
    </div>)
}

export default Header;