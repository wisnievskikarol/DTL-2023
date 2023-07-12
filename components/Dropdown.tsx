import React, { useState } from 'react';
import styles from './Dropdown.module.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <button onClick={toggleDropdown} className={styles.dropbtn}>
          <img className={styles.dropdownImage} src="favicon.png" alt="dropdown" />
        </button>
        {!isOpen && (
          <div className={styles.carousel}>
            <div>Zapomniałem co miałem tu wpisać - chyba jakąś informację o możliwości inwestycji</div>
          </div>
        )}
        {isOpen && (
          <div className={styles.contentDivWhite}>
            test
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
