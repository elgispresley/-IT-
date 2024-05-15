import React from 'react';
import { Metadata } from 'next'
import DirectionsUniversity from "@/components/directionsUniversity/DirectionsUniversity";
import styles from '../styles/directions/Directions.module.scss'
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
	title: 'Directions | Next App'
}


const PageDirections = () => {
	return (
		<Layout>
		<div className={styles.wrapperDirections}>
			<DirectionsUniversity/>
		</div>
		</Layout>
	);
};

export default PageDirections;
