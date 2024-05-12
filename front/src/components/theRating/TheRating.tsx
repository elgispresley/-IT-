'use client'

import React from 'react'
import Link from 'next/link'
import photo1 from './icons/photo1.png'
import photo2 from './icons/photo2.png'
import photo3 from './icons/photo3.png'
import styles from './TheRating.module.scss'
import Image from 'next/image'
import ArrowRight from '@/app/icons/ArrowRight'

const TheRating = () => {
	return (
		<div className={styles.rating}>
			<h2 className={styles.headerRating}>Топ рейтинговых направлений</h2>
			<div className={styles.line}></div>
			<ul className={styles.infoRating}>
				<li className={styles.textRating}>
					<div className={styles.images}>
						<Image src={photo1} alt='photo' />
					</div>
					<p className={styles.text}>
						Базы данных и их управление, включая SQL и NoSQL решения
					</p>
					<Link className={styles.linckRaring} href={'/'}>Узнать подробнее <ArrowRight /></Link>
				</li>
				<li className={styles.textRating}>
					<div className={styles.images}>
						<Image src={photo2} alt='photo' />
					</div>
					<p className={styles.text}>
						Мобильная разработка приложений для iOS и Android
					</p>
					<Link className={styles.linckRaring} href={'/'}>Узнать подробнее <ArrowRight /></Link>
				</li>
				<li className={styles.textRating}>
					<div className={styles.images}>
						<Image src={photo3} alt='photo' />
					</div>
					<p className={styles.text}>
						Разработка веб-приложений и веб-сайтов с использованием современных технологий и фреймворков
					</p>
					<Link className={styles.linckRaring} href={'/'}>Узнать подробнее <ArrowRight /></Link>
				</li>
			</ul>
			<div className={styles.linck}>
				<Link href={'/'} className={styles.btnRating}>Узнать подробнее <ArrowRight /></Link>
			</div>
		</div>
	)
}

export default TheRating