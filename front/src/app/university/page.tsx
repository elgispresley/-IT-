import React from 'react'
import TheDatabase from '@/components/theDatabase/TheDatabase'
import styles from '../styles/university/University.module.scss'
import TheList from '@/components/theList/TheList'
import TheTextBase from '@/components/theTextBase/TheTextBase'
import Layout from "@/components/layout/Layout";

const PageUniversity = () => {
	return (
		<Layout>
			<section className={styles.wrapperDatabase}>
				<TheDatabase />
			</section>
			<section className={styles.wrapperList}>
				<TheList />
			</section>
			<section className={styles.wrapperText}>
				<TheTextBase />
			</section>
		</Layout>
	)
}

export default PageUniversity