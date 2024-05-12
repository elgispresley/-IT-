'use client'

import React from 'react'
import Link from 'next/link'
import styles from './ThePopularity.module.scss'
import Image from 'next/image'
import photo1 from '@/components/thePopularity/icons/photo1.png'
import ArrowRight from '@/app/icons/ArrowRight'
import photo2 from '@/components/thePopularity/icons/photo2.png'
import photo3 from '@/components/thePopularity/icons/photo3.png'

const ThePopularity = () => {
	return (
		<div className={styles.rating}>
			<h2 className={styles.headerRating}>Популярные языки програмирования</h2>
			<div className={styles.line}></div>
			<ul className={styles.infoRating}>
				<li className={styles.textRating}>
					<div className={styles.images}>
						<Image src={photo1} alt='photo' />
					</div>
					<p className={styles.text}>
						Swift для iOS и macOS
					</p>
					<Link className={styles.linckRaring} href={'/'}>Узнать подробнее <ArrowRight /></Link>
				</li>
				<li className={styles.textRating}>
					<div className={styles.images}>
						<Image src={photo2} alt='photo' />
					</div>
					<p className={styles.text}>
						JavaScript для веб-сайтов и веб-приложений
					</p>
					<Link className={styles.linckRaring} href={'/'}>Узнать подробнее <ArrowRight /></Link>
				</li>
				<li className={styles.textRating}>
					<div className={styles.images}>
						<Image src={photo3} alt='photo' />
					</div>
					<p className={styles.text}>
						SQL для базы данных
					</p>
					<Link className={styles.linckRaring} href={'/'}>Узнать подробнее <ArrowRight /></Link>
				</li>
			</ul>
		</div>
	)
}

export default ThePopularity