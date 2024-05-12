import React from 'react'
import TheDatabase from '@/components/theDatabase/TheDatabase'
import styles from '../styles/university/University.module.scss'
import TheList from '@/components/theList/TheList'
import TheTextBase from '@/components/theTextBase/TheTextBase'

const PageUniversity = () => {
	return (
		<>
			<section className={styles.wrapperDatabase}>
				<TheDatabase />
			</section>
			<section className={styles.wrapperList}>
				<TheList />
			</section>
			<section className={styles.wrapperText}>
				<TheTextBase />
			</section>
		</>
	)
}

export default PageUniversity