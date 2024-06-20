'use client'

import React, {useState} from "react";
import LinkedinIcon from '@/components/theFooter/icons/LinkedinIcon'
import InstagramIcon from '@/components/theFooter/icons/InstagramIcon'
import TwitterIcon from '@/components/theFooter/icons/TwitterIcon'
import FacebookIcons from '@/components/theFooter/icons/FacebookIcons'
import {useSession} from "next-auth/react";
import Link from 'next/link'
import styles from './TheFooter.module.scss'
import classNames from "classnames";
import TheAddAplication from "@/components/theAddAplication/TheAddAplication";


const TheFooter = () => {
	const [active, setActive] = useState(false);
	const [idAplication, setIdAplication] = useState<number>(0);
	const session = useSession();

	function Chenge () {
		setActive(!active);
	}
	return (
		<footer className={styles.footer}>
			<div className={classNames(styles.shadow, {[styles.shadowNot]: !active})} onClick={() => setActive(!active)}></div>
			<div className={classNames(styles.application, {[styles.applicationNot]: !active})}>
				<TheAddAplication onActive={setActive} active={active} idAplication={idAplication}/>
			</div>
			<div className={styles.componentFooter}>
				<div className={styles.headerInput}>
					<h2 className={styles.nameFooter}>Оставьте вашу информацию и мы свяжемся с вами </h2>
					{
						session?.data ? <button onClick={Chenge} className={styles.submit} >Отправить</button> :
							<div className={styles.warning}>Для того что бы пройти анкетирование вы должны авторизоваться</div>
					}
				</div>
				<ul className={styles.footerBlock}>
					<li>
						<Link href='https://www.facebook.com/your-profile' target='_blank' passHref>
							<FacebookIcons/>
						</Link>
					</li>
					<li>
						<Link href='https://www.instagram.com/your-profile' target='_blank' passHref>
							<InstagramIcon/>
						</Link>
					</li>
					<li>
						<Link href='https://www.twitter.com/your-profile' target='_blank' passHref>
							<TwitterIcon/>
						</Link>
					</li>
					<li>
						<Link href='https://www.linkedin.com/in/your-profile' target='_blank' passHref>
							<LinkedinIcon/>
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export { TheFooter }
