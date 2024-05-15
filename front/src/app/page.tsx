import React from 'react'
import TheCreate from '@/components/theCreate/TheCreate'
import TheTextInfo from '@/components/theTextInfo/TheTextInfo'
import TheSearchInfo from '@/components/theSearchInfo/TheSearchInfo'
import TheRating from '@/components/theRating/TheRating'
import styles from './styles/Home/Home.module.scss'
import ThePopularity from '@/components/thePopularity/ThePopularity'
import TheJoinUs from '@/components/theJoinUs/TheJoinUs'
import Layout from "@/components/layout/Layout";

const Home = () => {
	return (
		<>
			<Layout>
			<section className={styles.wrapperCreate}>
				<TheCreate />
			</section>
			<section className={styles.wrapperTextInfo}>
				<TheTextInfo />
			</section>
			<section className={styles.wrapperSearchInfo}>
				<TheSearchInfo />
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