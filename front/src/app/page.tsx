'use client'

import React, {useState} from 'react'
import TheCreate from '@/components/theCreate/TheCreate'
import TheTextInfo from '@/components/theTextInfo/TheTextInfo'
import TheSearchInfo from '@/components/theSearchInfo/TheSearchInfo'
import TheRating from '@/components/theRating/TheRating'
import styles from './styles/Home/Home.module.scss'
import ThePopularity from '@/components/thePopularity/ThePopularity'
import TheJoinUs from '@/components/theJoinUs/TheJoinUs'
import Layout from "@/components/layout/Layout";
import classNames from "classnames";
import TheAddAplication from "@/components/theAddAplication/TheAddAplication";

const Home = () => {
	const [active, setActive] = useState(false);
	const [idAplication, setIdAplication] = useState<number>(0);

	return (
		<>
			<Layout>
				<div className={classNames(styles.shadow, {[styles.shadowNot]: !active})} onClick={() => setActive(!active)}></div>
				<div className={classNames(styles.application, {[styles.applicationNot]: !active})}>
					<TheAddAplication onActive={setActive} active={active} idAplication={idAplication}/>
				</div>
			<section className={styles.wrapperCreate}>
				<TheCreate />
			</section>
			<section className={styles.wrapperTextInfo}>
				<TheTextInfo setActive={setActive} active={active}/>
			</section>
			<section className={styles.wrapperSearchInfo}>
				<TheSearchInfo setActive={setActive} active={active}/>
			</section>
			<section className={styles.wrapperRating}>
				<TheRating />
			</section>
			<section className={styles.wrapperPopularity}>
				<ThePopularity />
			</section>
			<div className={styles.line}></div>
			<section className={styles.wrapperJoinUs}>
				<TheJoinUs />
			</section>
			</Layout>
		</>
	)
}

export default Home