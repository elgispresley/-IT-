import React from 'react'
import styles from './TheTextInfo.module.scss'
import Link from "next/link";

const TheTextInfo = () => {
	return (
		<>
			<p className={styles.text}>
				Добро пожаловать в&nbsp;отделение &laquo;Информационные технологии&raquo;! Мы&nbsp;в&nbsp;Бишкекском техническом
				колледже гордимся
				предоставлением высококачественного образования в&nbsp;сфере информационных технологий. Наше отделение
				предоставляет студентам широкий спектр курсов, охватывающих все от&nbsp;основ программирования
				до&nbsp;разработки
				веб-приложений и&nbsp;анализа данных.
			</p>
			<Link href={'/university'} className={styles.btnBegin}>Начать</Link>
		</>
	)
}

export default TheTextInfo