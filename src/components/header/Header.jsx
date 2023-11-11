// Header.js

import React, { useState } from 'react';
import Sliders from '../../assets/icons/sliders.svg';
import Down from '../../assets/icons/down.svg';
import './header.css';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedGrouping, setSelectedGrouping] = useState('');
  const [selectedSorting, setSelectedSorting] = useState('');

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleGroupingChange = (event) => {
    setSelectedGrouping(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSelectedSorting(event.target.value);
  };

  return (
    <div className='header'>
      <div className="header_innerContainer">
        <div className="headerMenuItem" onClick={toggleMenu}>
          <img src={Sliders} alt="" className='header_menu_icon' />
          <p>Display</p>
          <img src={Down} alt="" className='header_menu_icon' />
        </div>

        {openMenu && (
          <div className='headerMenuInner'>
            <div className='headerMenuInnerMenu'>
              <label>Grouping</label>
              <select value={selectedGrouping} onChange={handleGroupingChange}>
                <option value="Status">By Status</option>
                <option value="Priority">By Priority</option>
                <option value="User">By User</option>
              </select>
            </div>
            <div className='headerMenuInnerMenu'>
              <label>Sorting</label>
              <select value={selectedSorting} onChange={handleSortingChange}>
                <option value="Priority">By Priority</option>
                <option value="Title">By Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
