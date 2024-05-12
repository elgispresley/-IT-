'use client'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { FormEventHandler } from 'react'
import styles from './SighInForm.module.scss'

const SighInForm = () => {
	const router = useRouter()
	const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)

		const res = await signIn('credentials', {
			email: formData.get('email'),
			password: formData.get('password'),
			redirect: false
		})
		if (res && !res.error) {
			router.push('/profile')
		} else {
			console.log(res)
		}
	}
	return (
		<form onSubmit={handleSubmit} className={styles.loginForm}>
			<div className={styles.inputForm}>
				<label className={styles.labelText} htmlFor='email'>Логин</label>
				<input className={styles.inputText}
							 type='email' name='email' id='email' placeholder={'you@company.com'} required
				/>
			</div>
			<div className={styles.inputForm}>
				<label className={styles.labelText} htmlFor='password'>Пароль</label>
				<input className={styles.inputText}
							 type='password' name='password' id='password' placeholder={'**************'} required
				/>
			</div>
			<div className={styles.checkboxForm}>
				<input
					type='checkbox' name='checkbox' id='checkbox' required
				/>
				<label className={styles.textCheckbox} htmlFor='password'>Запомнить меня</label>
			</div>
			<div></div>
			<button className={styles.btn} type='submit'>Войти</button>
		</form>

	)
}

export default SighInForm
