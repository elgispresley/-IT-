import React from 'react';
import { Metadata } from 'next'
import DirectionsUniversity from "@/components/directionsUniversity/DirectionsUniversity";
import styles from '../styles/directions/Directions.module.scss'

export const metadata: Metadata = {
	title: 'Directions | Next App'
}


const PageDirections = () => {
	return (
		<div className={styles.wrapperDirections}>
			<DirectionsUniversity/>
		</div>
	);
};

export default PageDirections;
