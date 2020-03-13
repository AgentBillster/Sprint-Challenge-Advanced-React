import React from 'react';
import { useDarkMode } from '../hooks/darkMode'
import '../App.css'


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
   
     
      <div className="dark-mode__toggle">
        
        <div>
            <button onClick={toggleMode} data-testid="button">dark</button>
        </div>
        
        
         
      </div>

  );
};

export default Navbar;