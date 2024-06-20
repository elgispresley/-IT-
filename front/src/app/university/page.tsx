'use client'

import React, {useState} from 'react'
import TheDatabase from '@/components/theDatabase/TheDatabase'
import styles from '../styles/university/University.module.scss'
import TheList from '@/components/theList/TheList'
import TheTextBase from '@/components/theTextBase/TheTextBase'
import Layout from "@/components/layout/Layout";
import classNames from "classnames";
import TheAddAplication from "@/components/theAddAplication/TheAddAplication";

const PageUniversity = () => {
	const [active, setActive] = useState(false);
	const [idAplication, setIdAplication] = useState<number>(0);


	return (
		<Layout>
			<div className={classNames(styles.shadow, {[styles.shadowNot]: !active})} onClick={() => setActive(!active)}></div>
			<div className={classNames(styles.application, {[styles.applicationNot]: !active})}>
				<TheAddAplication onActive={setActive} active={active} idAplication={idAplication}/>
			</div>
			<section className={styles.wrapperDatabase}>
				<TheDatabase setActive={setActive} active={active}/>
			</section>
			<section className={styles.wrapperList}>
				<TheList />
			</section>
			<section className={styles.wrapperText}>
				<TheTextBase />
			</section>
		</Layout>
	)
}

export default PageUniversity