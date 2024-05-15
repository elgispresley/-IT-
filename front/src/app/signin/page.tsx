import GoogleButton from '@/components/googleButton/GoogleButton'
import SighInForm from '@/components/sighInForm/SighInForm'
import Layout from "@/components/layout/Layout";

import styles from '../styles/sighnIn/SighIn.module.scss'

export default function SighIn() {
	return (
		<Layout isFooterHidden>
		<div className={styles.wrapperSignIn}>
			<div className={styles.infoSignIn}>
				<h1 className={styles.textHeader}>Войти</h1>
				<p className={styles.text}>Введите свои учетные данные чтобы войти в систему</p>
			</div>
			<SighInForm />
			<GoogleButton />
		</div>
		</Layout>
	)
}
