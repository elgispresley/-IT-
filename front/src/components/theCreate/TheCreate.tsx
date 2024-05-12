import React from 'react'
import styles from './TheCreate.module.scss'

const TheCreate = () => {
	return (
		<>
			<h1 className={styles.nameHeader}>Создавай свое <span className={styles.text}>Будущее</span> Cегодня!</h1>
			<p className={styles.textFuture}>
				Отделение ИТ в Бишкекском техническом колледже!
			</p>
		</>
	)
}

export default TheCreate