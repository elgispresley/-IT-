import React from 'react'
import styles from './TheList.module.scss'

const TheList = () => {
	return (
		<div className={styles.contentList}>
			<ul className={styles.blockList}>
				<li className={styles.infoList}>
					<h2 className={styles.nameHeader}>Форма обучения</h2>
					<div>
						<p className={styles.textOchn}>Очный</p>
						<div className={styles.line}></div>
					</div>
				</li>
				<li className={styles.infoList}>
					<h2 className={styles.nameHeader}>Основа обучения</h2>
					<div>
						<p className={styles.text}>Контракт</p>
						<div className={styles.line}></div>
					</div>
				</li>
				<li className={styles.infoList}>
					<h2 className={styles.nameHeader}>Контракт</h2>
					<div>
						<p className={styles.textNum}>150000</p>
						<div className={styles.line}></div>
					</div>
				</li>
				<li className={styles.infoList}>
					<h2 className={styles.nameHeader}>На базе 9 класса</h2>
					<div>
						<p className={styles.text}>2 года 10 месяцев</p>
						<div className={styles.line}></div>
					</div>
				</li>
				<li className={styles.infoList}>
					<h2 className={styles.nameHeader}>На базе 11 класса</h2>
					<div>
						<p className={styles.text}>1 год 10 месяцев</p>
						<div className={styles.line}></div>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default TheList