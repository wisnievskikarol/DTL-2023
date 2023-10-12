import React, { useState } from 'react';
import styles from './DiscussSection.module.css';


const Dropdownv2 = ({title, description}) => {

	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
    	setIsClicked(!isClicked);
  	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.title}>
				{isClicked ? <img className={styles.triangle} src="/Triangle.png" /> : <img className={styles.triangle} src="/ReversedTriangle.png" /> }
				<p className={styles.titleContent} onClick={handleClick}>[Rozwiń]</p>
				<p className={styles.titlev2} onClick={handleClick}>Sekcja dyskusji</p>
				
			</div>
			<p className={styles.description}>{isClicked &&
				<div className={styles.discussContainer}>

				</div>
			}</p>
		</div>
	)


}

export default Dropdownv2;