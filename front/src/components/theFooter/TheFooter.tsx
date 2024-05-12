import LinkedinIcon from '@/components/theFooter/icons/LinkedinIcon'
import InstagramIcon from '@/components/theFooter/icons/InstagramIcon'
import TwitterIcon from '@/components/theFooter/icons/TwitterIcon'
import styles from './TheFooter.module.scss'
import FacebookIcons from '@/components/theFooter/icons/FacebookIcons'
import Link from 'next/link'

const TheFooter = () => {

	return (
		<footer className={styles.footer}>
			<div className={styles.componentFooter}>
				<form className={styles.headerInput}>
					<h2 className={styles.nameFooter}>Оставьте вашу почту и мы свяжемся с вами </h2>
					<div className={styles.inputEmail}>
						<input type='email' className={styles.inputText} placeholder='Email address' />
						<div className={styles.checboxInfo}>
							<div>
								<input type='checkbox' className={styles.checkbox} />
							</div>
							<p className={styles.textInput}>
								Я подтверждаю, что мне больше 16 лет, и я согласен с Условиями
								использования
								и Уведомлением о конфиденциальности.
							</p>
						</div>
					</div>
					<button className={styles.submit}>Отправить</button>
				</form>
				<ul className={styles.footerBlock}>
					<li>
						<Link href='/'>
							<FacebookIcons />
						</Link>
					</li>
					<li>
						<Link href='/'>
							<InstagramIcon />
						</Link>
					</li>
					<li>
						<Link href='/'>
							<TwitterIcon />
						</Link>
					</li>
					<li>
						<Link href='/'>
							<LinkedinIcon />
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export { TheFooter }
