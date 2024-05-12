import React from 'react'
import photo1 from './icons/photo1.png'
import styles from './TheJoinUs.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const TheJoinUs = () => {
	return (
		<div className={styles.conteinerJoin}>
			<div className={styles.imageJoin}>
				<Image src={photo1} alt='photo' />
			</div>
			<div className={styles.infoJoin}>
				<h1 className={styles.nameHeader}>Присоединяйтесь к нам!</h1>
				<p className={styles.text}>
					Если вы&nbsp;стремитесь к&nbsp;успешной карьере в&nbsp;сфере информационных технологий, наше отделение готово
					помочь вам в
					этом. Обращайтесь к&nbsp;нам для получения дополнительной информации о&nbsp;наших программах обучения,
					условиях
					поступления и&nbsp;возможностях для будущих студентов. Мы&nbsp;рады приветствовать вас в&nbsp;нашем
					отделении &laquo;Информационные
					технологии&raquo; в&nbsp;Бишкекском техническом колледже!
				</p>
				<Link href={'/'} className={styles.btnJoin}>Начать</Link>
			</div>
		</div>
	)
}

export default TheJoinUs