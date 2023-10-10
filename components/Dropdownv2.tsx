import React, { useState } from 'react';
import styles from './Dropdownv2.module.css';


const Dropdownv2 = ({title, description}) => {

	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
    	setIsClicked(!isClicked);
  	};

	return (
		<div>
			<div className={styles.title}>
				{isClicked ? <img className={styles.triangle} src="/Triangle.png" /> : <img className={styles.triangle} src="/ReversedTriangle.png" /> }
				<p className={styles.titleContent} onClick={handleClick}>[Rozwiń] {title}</p>
				
			</div>
			<p className={styles.description}>{isClicked && <p>{description}</p>}</p>
		</div>
	)


}

export default Dropdownv2;