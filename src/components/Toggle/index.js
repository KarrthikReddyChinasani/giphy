import React from 'react';
import Toggle from 'react-toggle';
import { FaSun, FaMoon } from 'react-icons/fa';
import "react-toggle/style.css";
import "./styles.css";

const ToggleCheck = ({ onChange, name, value }) => {
  return (
    <Toggle
      name={name}
      value={value}
      onChange={onChange}
      className='custom-classname'
      icons={{
        checked: <FaSun size={12} color="#FCE570"/>,
        unchecked: <FaMoon size={12} color="#FFFFFF"/>,
      }}
    />
  )
}

export default ToggleCheck;