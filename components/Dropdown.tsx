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
            <div>Wybierz projekt, który Cię interesuje...</div>
          </div>
        )}
        {isOpen && (
          <div className={styles.contentDivWhite}>
            ...i wejdź w cyfrową ekonomię 4.0
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
