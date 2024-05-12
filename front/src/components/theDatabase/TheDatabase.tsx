import React from 'react'
import Link from 'next/link'
import styles from './TheDatabase.module.scss'

const TheDatabase = () => {
	return (
		<div className={styles.contentDataBase}>
			<div className={styles.images}></div>
			<div className={styles.info}>
				<h2 className={styles.text}>Базы данных и их <br /> управление </h2>
				<h2>
					<span
						className={styles.text2}>включая</span> <span
					className={styles.sql}>SQL</span> <span className={styles.text2}>и</span> <span
					className={styles.sql}>NaSQL</span>
				</h2>
				<Link className={styles.link} href={'/'}>Начать</Link>
			</div>
		</div>
	)
}

export default TheDatabase