'use client'

import React from 'react'
import Link from 'next/link'
import styles from './TheSearchInfo.module.scss'
import Search from '@/components/theSearchInfo/icon/Search'
import SearchPrint from '@/components/theSearchInfo/icon/SearchPrint'
import HousePrint from '@/components/theSearchInfo/icon/HousePrint'
import ArrowRight from '@/app/icons/ArrowRight'

interface Props {
	setActive: (value: boolean) => void;
	active: boolean;
}

const TheSearchInfo = ({setActive, active}: Props) => {
	function Chenge () {
		setActive(!active);
	}
	return (
		<div className={styles.progress}>
			<ul className={styles.infoSearch}>
				<li className={styles.textSearch}>
					<div>
						<Search />
					</div>
					<div className={styles.info}>
						<div>
							<h2 className={styles.headerSearch}>Найти курс</h2>
							<p className={styles.text}>
								Найдите себя в предмете, курсе , чтобы ваше будущее было подходящим для вас.
							</p>
						</div>
						<button className={styles.linckBegin} onClick={Chenge}>Начать <ArrowRight /></button>
					</div>
				</li>
				<li className={styles.textSearch}>
					<div>
						<SearchPrint />
					</div>
					<div className={styles.info}>
						<div>
							<h2 className={styles.headerSearch}>Найдите университет</h2>
							<p className={styles.text}>
								Найдите корпуса, чтобы узнать о уроках
							</p>
						</div>
						<button className={styles.linckBegin} onClick={Chenge}>Начать <ArrowRight /></button>
					</div>
				</li>
				<li className={styles.textSearch}>
					<div>
						<HousePrint />
					</div>
					<div className={styles.info}>
						<div>
							<h2 className={styles.headerSearch}>Откройте двери!</h2>
							<p className={styles.text}>
								Найдите подходящее направление , что бы ваше будущее было в ваших руках.
							</p>
						</div>
						<button className={styles.linckBegin} onClick={Chenge}>Начать <ArrowRight /></button>
					</div>
				</li>
			</ul>
			<ArrowRight />
		</div>
	)
}

export default TheSearchInfo
